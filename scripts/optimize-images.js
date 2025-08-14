import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create optimized directory if it doesn't exist
const optimizedDir = path.join(__dirname, '../public/images/optimized');
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Image optimization settings for better performance while maintaining vibrancy
const optimizationSettings = {
  // WebP with high quality for vibrant images
  webp: {
    quality: 85,
    effort: 6,
    nearLossless: true,
    smartSubsample: true
  },
  // AVIF for modern browsers (better compression)
  avif: {
    quality: 80,
    effort: 9,
    chromaSubsampling: '4:4:4'
  },
  // JPEG fallback with optimized settings
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true
  }
};

async function optimizeImage(inputPath, outputPath, format = 'webp') {
  try {
    const image = sharp(inputPath);
    
    // Get image metadata
    const metadata = await image.metadata();
    
    // Resize if image is too large (maintain aspect ratio)
    let processedImage = image;
    if (metadata.width > 1200 || metadata.height > 1200) {
      processedImage = image.resize(1200, 1200, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // Apply format-specific optimization
    let outputBuffer;
    switch (format) {
      case 'webp':
        outputBuffer = await processedImage.webp(optimizationSettings.webp).toBuffer();
        break;
      case 'avif':
        outputBuffer = await processedImage.avif(optimizationSettings.avif).toBuffer();
        break;
      case 'jpeg':
        outputBuffer = await processedImage.jpeg(optimizationSettings.jpeg).toBuffer();
        break;
      default:
        outputBuffer = await processedImage.webp(optimizationSettings.webp).toBuffer();
    }
    
    // Write optimized image
    fs.writeFileSync(outputPath, outputBuffer);
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = outputBuffer.length;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB, Optimized: ${(optimizedSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
    
    return { success: true, savings };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

async function optimizeAllImages() {
  const imagesDir = path.join(__dirname, '../public/images');
  const supportedFormats = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff'];
  
  console.log('🚀 Starting image optimization...\n');
  
  let totalSavings = 0;
  let processedCount = 0;
  let errorCount = 0;
  
  // Process each image file
  const files = fs.readdirSync(imagesDir);
  
  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const ext = path.extname(file).toLowerCase();
    
    if (fs.statSync(filePath).isFile() && supportedFormats.includes(ext)) {
      const baseName = path.basename(file, ext);
      
      // Create multiple formats for better browser support
      const formats = ['webp', 'avif', 'jpeg'];
      
      for (const format of formats) {
        const outputExt = format === 'jpeg' ? '.jpg' : `.${format}`;
        const outputPath = path.join(optimizedDir, `${baseName}${outputExt}`);
        
        const result = await optimizeImage(filePath, outputPath, format);
        
        if (result.success) {
          totalSavings += result.savings || 0;
          processedCount++;
        } else {
          errorCount++;
        }
      }
    }
  }
  
  console.log('\n📊 Optimization Summary:');
  console.log(`   Processed: ${processedCount} images`);
  console.log(`   Errors: ${errorCount}`);
  console.log(`   Average savings: ${(totalSavings / Math.max(processedCount, 1)).toFixed(1)}%`);
  console.log(`   Output directory: ${optimizedDir}`);
  
  // Create a manifest file for easy reference
  const manifest = {
    generated: new Date().toISOString(),
    totalProcessed: processedCount,
    averageSavings: (totalSavings / Math.max(processedCount, 1)).toFixed(1) + '%',
    formats: ['webp', 'avif', 'jpeg']
  };
  
  fs.writeFileSync(
    path.join(optimizedDir, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('\n🎉 Image optimization complete!');
}

// Run optimization if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  optimizeAllImages().catch(console.error);
}

export { optimizeImage, optimizeAllImages }; 