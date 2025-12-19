import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure directories exist
const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Download image
const downloadImage = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

// Extract animations/CSS keyframes
const extractAnimations = async (page) => {
  return await page.evaluate(() => {
    const styleSheets = Array.from(document.styleSheets);
    const animations = [];
    
    styleSheets.forEach((sheet) => {
      try {
        const rules = Array.from(sheet.cssRules || []);
        rules.forEach((rule) => {
          if (rule.type === CSSRule.KEYFRAMES_RULE || rule.type === CSSRule.WEBKIT_KEYFRAMES_RULE) {
            animations.push({
              name: rule.name,
              cssText: rule.cssText
            });
          }
        });
      } catch (e) {
        // CORS or other error
      }
    });
    
    return animations;
  });
};

async function extractPageContent(pageUrl, pageName) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    console.log(`\n📄 Extracting: ${pageName} (${pageUrl})`);
    await page.goto(pageUrl, { waitUntil: 'networkidle2', timeout: 30000 });

    // Extract all content
    const pageData = await page.evaluate(() => {
      // Get all sections with their complete HTML
      const sections = Array.from(document.querySelectorAll('section')).map(section => ({
        className: section.className,
        id: section.id,
        innerHTML: section.innerHTML,
        outerHTML: section.outerHTML
      }));

      // Extract all images with full details
      const images = Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src,
        srcset: img.srcset,
        alt: img.alt,
        title: img.title,
        width: img.naturalWidth || img.width,
        height: img.naturalHeight || img.height,
        className: img.className,
        loading: img.loading,
        sizes: img.sizes
      }));

      // Extract all text content with structure
      const content = {
        headings: {
          h1: Array.from(document.querySelectorAll('h1')).map(h => ({
            text: h.textContent.trim(),
            className: h.className,
            id: h.id,
            innerHTML: h.innerHTML
          })),
          h2: Array.from(document.querySelectorAll('h2')).map(h => ({
            text: h.textContent.trim(),
            className: h.className,
            id: h.id,
            innerHTML: h.innerHTML
          })),
          h3: Array.from(document.querySelectorAll('h3')).map(h => ({
            text: h.textContent.trim(),
            className: h.className,
            id: h.id,
            innerHTML: h.innerHTML
          }))
        },
        paragraphs: Array.from(document.querySelectorAll('p')).map(p => ({
          text: p.textContent.trim(),
          className: p.className,
          innerHTML: p.innerHTML
        })),
        lists: Array.from(document.querySelectorAll('ul, ol')).map(list => ({
          tagName: list.tagName,
          className: list.className,
          items: Array.from(list.querySelectorAll('li')).map(li => ({
            text: li.textContent.trim(),
            innerHTML: li.innerHTML
          }))
        })),
        links: Array.from(document.querySelectorAll('a')).map(a => ({
          text: a.textContent.trim(),
          href: a.href,
          className: a.className,
          target: a.target
        }))
      };

      // Extract inline styles and computed styles for animations
      const elementsWithAnimations = [];
      document.querySelectorAll('*').forEach(el => {
        const computedStyle = window.getComputedStyle(el);
        const animationName = computedStyle.animationName;
        const transition = computedStyle.transition;
        
        if (animationName && animationName !== 'none') {
          elementsWithAnimations.push({
            tagName: el.tagName,
            className: el.className,
            animationName: animationName,
            animationDuration: computedStyle.animationDuration,
            animationTimingFunction: computedStyle.animationTimingFunction
          });
        }
      });

      return {
        url: window.location.href,
        title: document.title,
        sections,
        images,
        content,
        elementsWithAnimations,
        allClassNames: Array.from(document.querySelectorAll('*'))
          .map(el => Array.from(el.classList))
          .flat()
          .filter((v, i, a) => a.indexOf(v) === i)
      };
    });

    // Extract CSS animations/keyframes
    const animations = await extractAnimations(page);

    // Download images
    const imagesDir = path.resolve(__dirname, '..', 'public', 'images', 'extracted', pageName);
    ensureDir(imagesDir);

    const imageDownloads = [];
    for (const img of pageData.images) {
      try {
        const imgUrl = new URL(img.src);
        // Only download from same domain
        if (imgUrl.hostname === new URL(pageUrl).hostname) {
          const filename = path.basename(imgUrl.pathname) || 'image.jpg';
          const dest = path.join(imagesDir, filename);
          imageDownloads.push(
            downloadImage(img.src, dest)
              .then(() => console.log(`  ✅ Downloaded: ${filename}`))
              .catch(err => console.log(`  ⚠️  Failed: ${filename} - ${err.message}`))
          );
        }
      } catch (err) {
        // Skip invalid URLs
      }
    }

    await Promise.allSettled(imageDownloads);

    // Save page data
    const outputDir = path.resolve(__dirname, '..', 'extracted-content');
    ensureDir(outputDir);
    
    const outputFile = path.join(outputDir, `${pageName}-content.json`);
    fs.writeFileSync(
      outputFile,
      JSON.stringify({ ...pageData, animations }, null, 2)
    );

    console.log(`  ✅ Saved to: ${outputFile}`);
    console.log(`  📊 Stats: ${pageData.sections.length} sections, ${pageData.images.length} images, ${animations.length} animations`);

    return { pageData, animations };
  } catch (error) {
    console.error(`  ❌ Error extracting ${pageName}:`, error.message);
    return null;
  } finally {
    await browser.close();
  }
}

async function extractAllPages() {
  const baseUrl = 'https://zerobarriers.io';
  const pages = [
    { name: 'home', url: `${baseUrl}/` },
    { name: 'services', url: `${baseUrl}/services` },
    { name: 'technology', url: `${baseUrl}/technology` },
    { name: 'testimonials', url: `${baseUrl}/testimonials` },
    { name: 'case-studies', url: `${baseUrl}/case-studies` },
    { name: 'contact', url: `${baseUrl}/contact` }
  ];

  console.log('🚀 Starting content extraction from live site...\n');

  const results = {};
  for (const page of pages) {
    const result = await extractPageContent(page.url, page.name);
    if (result) {
      results[page.name] = result;
    }
    // Small delay between pages
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  // Create summary
  const summary = {
    extractedAt: new Date().toISOString(),
    baseUrl,
    pages: Object.keys(results),
    totals: {
      sections: Object.values(results).reduce((sum, r) => sum + r.pageData.sections.length, 0),
      images: Object.values(results).reduce((sum, r) => sum + r.pageData.images.length, 0),
      animations: Object.values(results).reduce((sum, r) => sum + r.animations.length, 0)
    }
  };

  const summaryFile = path.resolve(__dirname, '..', 'extracted-content', 'summary.json');
  fs.writeFileSync(summaryFile, JSON.stringify(summary, null, 2));
  
  console.log('\n✅ Extraction complete!');
  console.log(`📋 Summary: ${summary.totals.sections} sections, ${summary.totals.images} images, ${summary.totals.animations} animations`);
  console.log(`📁 Output: extracted-content/`);
}

extractAllPages().catch(console.error);



