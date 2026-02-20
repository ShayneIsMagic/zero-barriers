import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function extractCompleteSiteData(url) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Extract complete site data including SEO, content, and metadata
        const siteData = await page.evaluate(() => {
            // Extract all meta tags
            const metaTags = {};
            const metaElements = document.querySelectorAll('meta');
            metaElements.forEach(meta => {
                const name = meta.getAttribute('name') || meta.getAttribute('property') || meta.getAttribute('http-equiv');
                const content = meta.getAttribute('content');
                if (name && content) {
                    metaTags[name] = content;
                }
            });

            // Extract structured data (JSON-LD)
            const structuredData = [];
            const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
            jsonLdScripts.forEach(script => {
                try {
                    structuredData.push(JSON.parse(script.textContent));
                } catch (e) {
                    console.warn('Could not parse JSON-LD:', e);
                }
            });

            // Extract all headings with hierarchy
            const headings = {
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: []
            };
            
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
                const elements = document.querySelectorAll(tag);
                elements.forEach(el => {
                    headings[tag].push({
                        text: el.textContent.trim(),
                        id: el.id,
                        classes: Array.from(el.classList),
                        innerHTML: el.innerHTML
                    });
                });
            });

            // Extract all text content with semantic structure
            const content = {
                title: document.title,
                description: metaTags.description || '',
                headings: headings,
                paragraphs: [],
                lists: [],
                links: [],
                images: [],
                buttons: [],
                forms: []
            };

            // Extract paragraphs
            const paragraphs = document.querySelectorAll('p');
            paragraphs.forEach(p => {
                content.paragraphs.push({
                    text: p.textContent.trim(),
                    classes: Array.from(p.classList),
                    innerHTML: p.innerHTML
                });
            });

            // Extract lists
            const lists = document.querySelectorAll('ul, ol');
            lists.forEach(list => {
                const items = Array.from(list.querySelectorAll('li')).map(li => ({
                    text: li.textContent.trim(),
                    innerHTML: li.innerHTML
                }));
                content.lists.push({
                    type: list.tagName.toLowerCase(),
                    items: items,
                    classes: Array.from(list.classList)
                });
            });

            // Extract links
            const links = document.querySelectorAll('a');
            links.forEach(link => {
                content.links.push({
                    text: link.textContent.trim(),
                    href: link.href,
                    classes: Array.from(link.classList),
                    target: link.target,
                    rel: link.rel
                });
            });

            // Extract images with all attributes
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                content.images.push({
                    src: img.src,
                    alt: img.alt,
                    title: img.title,
                    width: img.width,
                    height: img.height,
                    classes: Array.from(img.classList),
                    loading: img.loading,
                    decoding: img.decoding,
                    sizes: img.sizes,
                    srcset: img.srcset
                });
            });

            // Extract buttons
            const buttons = document.querySelectorAll('button, input[type="button"], input[type="submit"]');
            buttons.forEach(btn => {
                content.buttons.push({
                    text: btn.textContent.trim() || btn.value,
                    type: btn.type,
                    classes: Array.from(btn.classList),
                    id: btn.id,
                    name: btn.name
                });
            });

            // Extract forms
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                const inputs = Array.from(form.querySelectorAll('input, textarea, select')).map(input => ({
                    type: input.type,
                    name: input.name,
                    placeholder: input.placeholder,
                    required: input.required,
                    value: input.value,
                    classes: Array.from(input.classList),
                    id: input.id
                }));
                
                content.forms.push({
                    action: form.action,
                    method: form.method,
                    classes: Array.from(form.classList),
                    inputs: inputs
                });
            });

            // Extract Open Graph and Twitter Card data
            const socialMeta = {
                og: {},
                twitter: {},
                canonical: document.querySelector('link[rel="canonical"]')?.href || '',
                robots: metaTags.robots || '',
                viewport: metaTags.viewport || ''
            };

            Object.keys(metaTags).forEach(key => {
                if (key.startsWith('og:')) {
                    socialMeta.og[key.replace('og:', '')] = metaTags[key];
                } else if (key.startsWith('twitter:')) {
                    socialMeta.twitter[key.replace('twitter:', '')] = metaTags[key];
                }
            });

            // Extract page structure
            const pageStructure = {
                header: document.querySelector('header')?.outerHTML || '',
                main: document.querySelector('main')?.outerHTML || '',
                footer: document.querySelector('footer')?.outerHTML || '',
                nav: document.querySelector('nav')?.outerHTML || '',
                sections: []
            };

            // Extract sections
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                pageStructure.sections.push({
                    id: section.id,
                    classes: Array.from(section.classList),
                    innerHTML: section.innerHTML,
                    outerHTML: section.outerHTML
                });
            });

            // Extract CSS classes used
            const allClasses = new Set();
            document.querySelectorAll('*').forEach(el => {
                el.classList.forEach(cls => allClasses.add(cls));
            });

            return {
                url: window.location.href,
                metaTags,
                structuredData,
                content,
                socialMeta,
                pageStructure,
                cssClasses: Array.from(allClasses),
                lang: document.documentElement.lang,
                charset: document.characterSet
            };
        });

        // Save complete site data
        const siteDataPath = path.resolve(__dirname, 'complete-site-data.json');
        fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2));
        console.log('✅ Complete site data extracted to complete-site-data.json');

        // Extract HTML structure for each page
        const pages = [
            { name: 'index', url: url },
            { name: 'services', url: url + 'services' },
            { name: 'technology', url: url + 'technology' },
            { name: 'testimonials', url: url + 'testimonials' },
            { name: 'case-studies', url: url + 'case-studies' },
            { name: 'contact', url: url + 'contact' }
        ];

        const allPagesData = {};

        for (const pageInfo of pages) {
            try {
                const newPage = await browser.newPage();
                await newPage.goto(pageInfo.url, { waitUntil: 'networkidle2' });
                
                const pageData = await newPage.evaluate(() => {
                    return {
                        title: document.title,
                        metaTags: Object.fromEntries(
                            Array.from(document.querySelectorAll('meta')).map(meta => [
                                meta.getAttribute('name') || meta.getAttribute('property') || meta.getAttribute('http-equiv'),
                                meta.getAttribute('content')
                            ]).filter(([name, content]) => name && content)
                        ),
                        headings: {
                            h1: Array.from(document.querySelectorAll('h1')).map(h => ({
                                text: h.textContent.trim(),
                                id: h.id,
                                classes: Array.from(h.classList)
                            })),
                            h2: Array.from(document.querySelectorAll('h2')).map(h => ({
                                text: h.textContent.trim(),
                                id: h.id,
                                classes: Array.from(h.classList)
                            })),
                            h3: Array.from(document.querySelectorAll('h3')).map(h => ({
                                text: h.textContent.trim(),
                                id: h.id,
                                classes: Array.from(h.classList)
                            }))
                        },
                        content: document.querySelector('main')?.innerHTML || document.body.innerHTML,
                        images: Array.from(document.querySelectorAll('img')).map(img => ({
                            src: img.src,
                            alt: img.alt,
                            title: img.title,
                            classes: Array.from(img.classList)
                        }))
                    };
                });

                allPagesData[pageInfo.name] = pageData;
                console.log(`✅ Extracted data for ${pageInfo.name} page`);
                await newPage.close();
            } catch (error) {
                console.error(`❌ Error extracting ${pageInfo.name}:`, error.message);
            }
        }

        // Save all pages data
        const pagesDataPath = path.resolve(__dirname, 'all-pages-data.json');
        fs.writeFileSync(pagesDataPath, JSON.stringify(allPagesData, null, 2));
        console.log('✅ All pages data extracted to all-pages-data.json');

        console.log('\n📊 Extraction Summary:');
        console.log(`   Meta tags: ${Object.keys(siteData.metaTags).length}`);
        console.log(`   Structured data: ${siteData.structuredData.length}`);
        console.log(`   Headings: ${Object.values(siteData.content.headings).flat().length}`);
        console.log(`   Images: ${siteData.content.images.length}`);
        console.log(`   Pages extracted: ${Object.keys(allPagesData).length}`);
        console.log(`   CSS classes: ${siteData.cssClasses.length}`);

    } catch (error) {
        console.error('An error occurred during extraction:', error);
    } finally {
        await browser.close();
    }
}

// Run the extraction
extractCompleteSiteData('https://zerobarriers.io/');
