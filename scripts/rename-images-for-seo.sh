#!/bin/bash
# Image Rename Script for SEO Best Practices
# This script renames all images to SEO-friendly formats

cd "$(dirname "$0")/.." || exit

echo "🖼️  Starting SEO Image Rename Process..."
echo ""

# Rename images to SEO-friendly format
rename_images() {
    # Core Logo
    mv "public/images/zblogo.png" "public/images/zero-barriers-logo.png" 2>/dev/null
    
    # Hero Images
    mv "public/images/Human_Transformation.png" "public/images/hero-human-transformation.png" 2>/dev/null
    mv "public/images/tech-empowerment.png" "public/images/technology-empowerment-hero.png" 2>/dev/null
    mv "public/images/Confident Woman.png" "public/images/testimonials-confident-woman-hero.png" 2>/dev/null
    mv "public/images/BridgeTheGap.png" "public/images/case-studies-bridge-the-gap-hero.png" 2>/dev/null
    mv "public/images/mountain-sunset.png" "public/images/contact-mountain-sunset-background.png" 2>/dev/null
    
    # Service Images
    mv "public/images/Transforming_Breakthrough.png" "public/images/services-strategic-consulting-transforming-breakthrough.png" 2>/dev/null
    mv "public/images/B2B Sales.png" "public/images/services-b2b-sales.png" 2>/dev/null
    mv "public/images/teamwork.jpg" "public/images/services-team-collaboration.jpg" 2>/dev/null
    
    # Technology/Development Images
    mv "public/images/code.jpg" "public/images/development-code-screen.jpg" 2>/dev/null
    mv "public/images/typing.jpg" "public/images/professional-typing-laptop.jpg" 2>/dev/null
    
    # Team/Supporting Images
    mv "public/images/Team.png" "public/images/team-portrait.png" 2>/dev/null
    
    # Company Logos (already good names, just ensure consistency)
    mv "public/images/caselle-updated-logo.png" "public/images/caselle-logo.png" 2>/dev/null
    mv "public/images/devpipeline-black-logo.png" "public/images/devpipeline-logo-black.png" 2>/dev/null
    mv "public/images/devpipeline-logo.png" "public/images/devpipeline-logo.png" 2>/dev/null
    mv "public/images/Q90-LOGO.svg" "public/images/q90-logo.svg" 2>/dev/null
    mv "public/images/Salesforce_Consulting_Logo.svg" "public/images/salesforce-consulting-logo.svg" 2>/dev/null
    mv "public/images/Sebo Logosvg.svg" "public/images/sebo-logo.svg" 2>/dev/null
    mv "public/images/Sebo%20Logosvg.svg" "public/images/sebo-logo.svg" 2>/dev/null
    
    # Case Study Logos
    mv "public/images/sos-support-logo.png" "public/images/sos-support-logo.png" 2>/dev/null # Already good
    mv "public/images/hays-company-logo.png" "public/images/hays-company-logo.png" 2>/dev/null # Already good
    
    # Remove unused/duplicate
    rm "public/images/sebo-logo.png" 2>/dev/null # Duplicate
    rm "public/images/Technology Enablement.webp" 2>/dev/null # Unused
}

echo "Renaming images..."
rename_images

echo "✅ Image rename complete!"
echo ""
echo "⚠️  Next step: Run the reference update script to update all file references in source code."



