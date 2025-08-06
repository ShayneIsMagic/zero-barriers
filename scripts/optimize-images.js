import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imageDir = './public/images';
const outputDir = './public/images/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Images to optimize with their target sizes
const imagesToOptimize = [
  {
    input: 'typing.jpg',
    output: 'typing-optimized.jpg',
    width: 800,
    quality: 80
  },
  {
    input: 'teamwork.jpg', 
    output: 'teamwork-optimized.jpg',
    width: 800,
    quality: 80
  },
  {
    input: 'code.jpg',
    output: 'code-optimized.jpg', 
    width: 800,
    quality: 80
  },
  {
    input: 'Human_Transformation.png',
    output: 'Human_Transformation-optimized.jpg',
    width: 800,
    quality: 80
  },
  {
    input: 'side-profile-tech.png',
    output: 'side-profile-tech-optimized.jpg',
    width: 600,
    quality: 85
  },
  {
    input: 'Team.png',
    output: 'Team-optimized.jpg',
    width: 600,
    quality: 85
  }
];

async function optimizeImages() {
  console.log('Starting image optimization...');
  
  for (const image of imagesToOptimize) {
    const inputPath = path.join(imageDir, image.input);
    const outputPath = path.join(outputDir, image.output);
    
    if (fs.existsSync(inputPath)) {
      try {
        await sharp(inputPath)
          .resize(image.width, null, { withoutEnlargement: true })
          .jpeg({ quality: image.quality, progressive: true })
          .toFile(outputPath);
        
        const originalSize = fs.statSync(inputPath).size;
        const optimizedSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
        
        console.log(`✅ ${image.input}: ${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(optimizedSize / 1024 / 1024).toFixed(1)}MB (${savings}% smaller)`);
      } catch (error) {
        console.error(`❌ Error optimizing ${image.input}:`, error);
      }
    } else {
      console.log(`⚠️  ${image.input} not found`);
    }
  }
  
  console.log('Image optimization complete!');
}

optimizeImages(); 