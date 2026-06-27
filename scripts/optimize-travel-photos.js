#!/usr/bin/env node
/**
 * Import shared travel photos into public/images/photography/site/
 * with JPG + WebP variants matching Spencer DuToit assets.
 */
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const ASSETS_DIR = path.join(
  process.env.HOME,
  '.cursor/projects/Users-shayneroy-Downloads-zero-barriers/assets'
)
const OUT_DIR = path.join(__dirname, '../public/images/photography/site')

const PHOTOS = [
  { source: 'Sunrise_Provo-315fc452-d05d-424c-9f51-bdd12bdbec60.png', slug: 'sunrise-provo' },
  { source: 'ballymacoda_country_roads-aa644d00-d4ea-45b4-8a1e-094d850a6e3e.png', slug: 'ballymacoda-country-roads' },
  { source: 'drombeg_circle-9c22dcca-0c81-4d70-9777-8e17ac3ca787.png', slug: 'drombeg-circle' },
  { source: 'st_loius_bridge-94eb3046-a9aa-4006-aed4-4ee40cc29324.png', slug: 'st-louis-bridge' },
  { source: 'st_louiss_bridge__2_-f776eb7e-f305-4e45-a0eb-c4f5538d55f4.png', slug: 'st-louis-bridge-2' },
  { source: 'ballymacoda_firlds-67048032-31e9-4621-b4f9-b089e4f6bf78.png', slug: 'ballymacoda-fields' },
  { source: 'Colorado_Peaks-1ef82e5b-70f1-4ea8-9024-feaf0afa0558.png', slug: 'colorado-peaks' },
  { source: 'Provo_sunset-4d127920-ffdb-4b6b-80a2-8f503df0c649.png', slug: 'provo-sunset' },
  { source: 'ballymacoda_sunset-3ce2bd90-c69f-4a09-90c8-515f206dec24.png', slug: 'ballymacoda-sunset' },
  { source: 'brianhead_sunset-0ad88932-ede3-42fe-8bd5-71d057e9403c.png', slug: 'brianhead-sunset' },
  { source: 'Timp__2_-62ebe4b9-8530-4f2f-a5f0-7615ba447881.png', slug: 'timp-mountain' },
]

const MAX_WIDTH = 1200
const WEBP_QUALITY = 86
const JPEG_QUALITY = 88

async function optimizePhoto({ source, slug }) {
  const inputPath = path.join(ASSETS_DIR, source)
  if (!fs.existsSync(inputPath)) {
    throw new Error(`Missing source: ${inputPath}`)
  }

  const base = path.join(OUT_DIR, slug)
  const image = sharp(inputPath).rotate()
  const meta = await image.metadata()
  const width = Math.min(meta.width, MAX_WIDTH)
  const height = Math.round((meta.height / meta.width) * width)

  await sharp(inputPath)
    .rotate()
    .resize(width, height, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toFile(`${base}.jpg`)

  await sharp(inputPath)
    .rotate()
    .resize(width, height, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(`${base}.webp`)

  const thumbWidth = Math.min(480, width)
  const thumbHeight = Math.round((height / width) * thumbWidth)

  await sharp(inputPath)
    .rotate()
    .resize(thumbWidth, thumbHeight, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(`${base}-480.webp`)

  return { slug, width, height, fullWidth: width }
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const results = []

  for (const photo of PHOTOS) {
    const info = await optimizePhoto(photo)
    results.push(info)
    console.log(`✓ ${photo.slug} (${info.width}×${info.height})`)
  }

  console.log('\nDimensions for site-images.ts:')
  console.log(JSON.stringify(results, null, 2))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
