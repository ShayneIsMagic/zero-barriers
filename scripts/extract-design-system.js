const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function extractDesignSystem(url) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Extract color palette and design tokens
        const designSystem = await page.evaluate(() => {
            const computedStyles = window.getComputedStyle(document.body);
            const rootStyles = window.getComputedStyle(document.documentElement);
            
            // Extract CSS custom properties
            const cssVariables = {};
            const rootStyle = document.documentElement.style;
            const rootComputed = getComputedStyle(document.documentElement);
            
            // Get all CSS custom properties
            for (let i = 0; i < rootComputed.length; i++) {
                const prop = rootComputed[i];
                if (prop.startsWith('--')) {
                    cssVariables[prop] = rootComputed.getPropertyValue(prop);
                }
            }

            // Extract color palette from elements
            const colors = new Set();
            const elements = document.querySelectorAll('*');
            elements.forEach(el => {
                const style = getComputedStyle(el);
                const color = style.color;
                const bgColor = style.backgroundColor;
                const borderColor = style.borderColor;
                
                if (color && color !== 'rgba(0, 0, 0, 0)') colors.add(color);
                if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)') colors.add(bgColor);
                if (borderColor && borderColor !== 'rgba(0, 0, 0, 0)') colors.add(borderColor);
            });

            // Extract typography
            const typography = {
                fonts: new Set(),
                fontSizes: new Set(),
                fontWeights: new Set(),
                lineHeights: new Set()
            };

            elements.forEach(el => {
                const style = getComputedStyle(el);
                typography.fonts.add(style.fontFamily);
                typography.fontSizes.add(style.fontSize);
                typography.fontWeights.add(style.fontWeight);
                typography.lineHeights.add(style.lineHeight);
            });

            // Extract spacing system
            const spacing = new Set();
            elements.forEach(el => {
                const style = getComputedStyle(el);
                ['margin', 'padding'].forEach(prop => {
                    ['top', 'right', 'bottom', 'left'].forEach(side => {
                        const value = style[`${prop}${side.charAt(0).toUpperCase() + side.slice(1)}`];
                        if (value && value !== '0px') spacing.add(value);
                    });
                });
            });

            // Extract layout patterns
            const layouts = [];
            const gridElements = document.querySelectorAll('[style*="grid"], [style*="flex"]');
            gridElements.forEach(el => {
                const style = getComputedStyle(el);
                layouts.push({
                    display: style.display,
                    gridTemplateColumns: style.gridTemplateColumns,
                    gridTemplateRows: style.gridTemplateRows,
                    flexDirection: style.flexDirection,
                    justifyContent: style.justifyContent,
                    alignItems: style.alignItems
                });
            });

            return {
                cssVariables,
                colors: Array.from(colors),
                typography: {
                    fonts: Array.from(typography.fonts),
                    fontSizes: Array.from(typography.fontSizes),
                    fontWeights: Array.from(typography.fontWeights),
                    lineHeights: Array.from(typography.lineHeights)
                },
                spacing: Array.from(spacing),
                layouts,
                breakpoints: {
                    mobile: '768px',
                    tablet: '1024px',
                    desktop: '1200px'
                }
            };
        });

        // Save design system
        const designSystemPath = path.resolve(__dirname, 'design-system.json');
        fs.writeFileSync(designSystemPath, JSON.stringify(designSystem, null, 2));
        console.log('✅ Design system extracted to design-system.json');

        // Extract all CSS
        const cssContent = await page.evaluate(() => {
            const styleSheets = Array.from(document.styleSheets);
            let allCss = '';
            
            for (const sheet of styleSheets) {
                try {
                    const rules = Array.from(sheet.cssRules || []);
                    allCss += rules.map(rule => rule.cssText).join('\n');
                } catch (e) {
                    console.warn(`Could not read stylesheet: ${sheet.href || 'inline style'}`, e);
                }
            }
            return allCss;
        });

        // Save CSS
        const cssPath = path.resolve(__dirname, 'extracted-styles.css');
        fs.writeFileSync(cssPath, cssContent);
        console.log('✅ CSS extracted to extracted-styles.css');

        // Extract component structure
        const components = await page.evaluate(() => {
            const components = [];
            
            // Extract header structure
            const header = document.querySelector('header');
            if (header) {
                components.push({
                    name: 'Header',
                    html: header.outerHTML,
                    classes: Array.from(header.classList)
                });
            }

            // Extract footer structure
            const footer = document.querySelector('footer');
            if (footer) {
                components.push({
                    name: 'Footer',
                    html: footer.outerHTML,
                    classes: Array.from(footer.classList)
                });
            }

            // Extract main sections
            const sections = document.querySelectorAll('section');
            sections.forEach((section, index) => {
                const id = section.id || `section-${index}`;
                const classes = Array.from(section.classList);
                components.push({
                    name: `Section-${id}`,
                    html: section.outerHTML,
                    classes,
                    id
                });
            });

            return components;
        });

        // Save components
        const componentsPath = path.resolve(__dirname, 'extracted-components.json');
        fs.writeFileSync(componentsPath, JSON.stringify(components, null, 2));
        console.log('✅ Components extracted to extracted-components.json');

        console.log('\n🎨 Design System Summary:');
        console.log(`   Colors: ${designSystem.colors.length}`);
        console.log(`   CSS Variables: ${Object.keys(designSystem.cssVariables).length}`);
        console.log(`   Typography: ${designSystem.typography.fonts.length} fonts`);
        console.log(`   Components: ${components.length}`);

    } catch (error) {
        console.error('An error occurred during extraction:', error);
    } finally {
        await browser.close();
    }
}

// Run the extraction
extractDesignSystem('https://zerobarriers.io/');

