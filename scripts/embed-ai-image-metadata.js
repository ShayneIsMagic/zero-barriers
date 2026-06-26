#!/usr/bin/env node
/**
 * Embeds IPTC/XMP provenance metadata into published AI-generated site images.
 * Aligns with Utah HB 276 provenance transparency practices and IPTC
 * DigitalSourceType "TrainedAlgorithmicMedia" for generative AI content.
 *
 * Usage: node scripts/embed-ai-image-metadata.js
 */

const fs = require('fs')
const path = require('path')
const { exiftool } = require('exiftool-vendored')

const ROOT = path.join(__dirname, '..')
const PROVENANCE_PATH = path.join(ROOT, 'src/data/ai-image-provenance.json')
const PUBLIC_DIR = path.join(ROOT, 'public')

const DIGITAL_SOURCE_TYPE_URI =
  'http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia'

function publicPathFromUrl(imagePath) {
  return path.join(PUBLIC_DIR, imagePath.replace(/^\//, ''))
}

function buildTags(record) {
  const description = [
    record.disclosureLabel,
    `Creation method: ${record.creationMethod}.`,
    `Provenance ID: ${record.id}.`,
    `See https://zerobarriers.io/privacy for AI imagery disclosure.`,
  ].join(' ')

  return {
    Description: description,
    ImageDescription: description,
    UserComment: description,
    Credit: 'Zero Barriers (AI-generated illustration)',
    Artist: 'Zero Barriers',
    CreatorTool: 'Generative artificial intelligence',
    DigitalSourceType: 'TrainedAlgorithmicMedia',
    'XMP-iptcExt:DigitalSourceType': DIGITAL_SOURCE_TYPE_URI,
    Keywords: [
      'AI-generated',
      'generative-artificial-intelligence',
      record.contentCategory,
      record.id,
    ],
    Subject: ['AI-generated', record.contentCategory],
    Software: 'Zero Barriers AI image provenance pipeline',
  }
}

async function embedMetadataForFile(filePath, tags) {
  if (!fs.existsSync(filePath)) {
    return { filePath, status: 'missing' }
  }

  await exiftool.write(filePath, tags, ['-overwrite_original'])
  return { filePath, status: 'updated' }
}

async function main() {
  const provenance = JSON.parse(fs.readFileSync(PROVENANCE_PATH, 'utf8'))
  const published = provenance.images.filter((image) => image.published)
  const results = []

  for (const record of published) {
    const tags = buildTags(record)
    const primary = publicPathFromUrl(record.path)
    results.push(await embedMetadataForFile(primary, tags))

    const parsed = path.parse(primary)
    const siblingExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif']

    for (const ext of siblingExtensions) {
      if (ext === parsed.ext) continue
      const sibling = path.join(parsed.dir, `${parsed.name}${ext}`)
      results.push(await embedMetadataForFile(sibling, tags))
    }
  }

  await exiftool.end()

  const updated = results.filter((r) => r.status === 'updated')
  const missing = results.filter((r) => r.status === 'missing')

  console.log(`Embedded AI provenance metadata in ${updated.length} file(s).`)
  updated.forEach((r) => console.log(`  ✓ ${path.relative(ROOT, r.filePath)}`))

  if (missing.length) {
    console.log(`Skipped ${missing.length} optional sibling file(s) not found.`)
  }
}

main().catch((error) => {
  console.error('Failed to embed AI image metadata:', error)
  process.exit(1)
})
