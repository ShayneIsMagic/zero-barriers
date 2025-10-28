const puppeteer = require('puppeteer');
const fs = require('fs');
const https = require('https');
const path = require('path');

async function extractStylesAndAssets() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  // Navigate to the live site
  await page.goto('https://zerobarriers.io', { waitUntil: 'networkidle2' });
  
  // Extract all CSS
  const styles = await page.evaluate(() => {
    const styleSheets = Array.from(document.styleSheets);
    let allCSS = '';
    
    styleSheets.forEach(sheet => {
      try {
        const rules = Array.from(sheet.cssRules || []);
        rules.forEach(rule => {
          allCSS += rule.cssText + '\n';
        });
      } catch (e) {
        // Cross-origin stylesheets will fail, skip them
        console.log('Skipping cross-origin stylesheet');
      }
    });
    
    return allCSS;
  });
  
  // Extract inline styles
  const inlineStyles = await page.evaluate(() => {
    const elements = document.querySelectorAll('[style]');
    let inlineCSS = '';
    
    elements.forEach(el => {
      inlineCSS += el.outerHTML + '\n';
    });
    
    return inlineCSS;
  });
  
  // Extract images
  const images = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs.map(img => ({
      src: img.src,
      alt: img.alt,
      srcset: img.srcset
    }));
  });
  
  // Save the extracted CSS
  fs.writeFileSync('assets/css/main.css', styles);
  console.log('✅ Extracted CSS to assets/css/main.css');
  
  // Download images
  console.log('\n📥 Downloading images...');
  for (const img of images) {
    if (img.src && !img.src.startsWith('data:')) {
      try {
        const url = new URL(img.src);
        const filename = path.basename(url.pathname);
        const filePath = path.join('public/images', filename);
        
        // Download the image
        const file = fs.createWriteStream(filePath);
        https.get(img.src, (response) => {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`✅ Downloaded: ${filename}`);
          });
        }).on('error', (err) => {
          console.error(`❌ Error downloading ${filename}:`, err.message);
        });
      } catch (e) {
        console.error(`Error processing ${img.src}:`, e.message);
      }
    }
  }
  
  await browser.close();
  console.log('\n✅ Extraction complete!');
}

extractStylesAndAssets().catch(console.error);

