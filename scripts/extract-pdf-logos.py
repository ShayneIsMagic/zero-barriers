#!/usr/bin/env python3
"""
Extract logos from PDF case studies.
This script extracts images from PDFs and saves them as PNG files.
"""

import sys
import os

try:
    import fitz  # PyMuPDF
except ImportError:
    print("PyMuPDF not found. Installing...")
    os.system("pip3 install PyMuPDF")
    import fitz

def extract_images_from_pdf(pdf_path, output_dir, prefix):
    """Extract all images from a PDF file."""
    if not os.path.exists(pdf_path):
        print(f"❌ PDF not found: {pdf_path}")
        return []
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir, exist_ok=True)
    
    doc = fitz.open(pdf_path)
    extracted_images = []
    
    for page_num in range(len(doc)):
        page = doc[page_num]
        image_list = page.get_images()
        
        for img_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]
            
            # Only save PNG and JPEG images (likely logos)
            if image_ext.lower() in ['png', 'jpg', 'jpeg']:
                # Check image size - logos are usually larger than small icons
                if len(image_bytes) > 5000:  # At least 5KB
                    filename = f"{prefix}_page{page_num+1}_img{img_index+1}.{image_ext}"
                    filepath = os.path.join(output_dir, filename)
                    
                    with open(filepath, "wb") as img_file:
                        img_file.write(image_bytes)
                    
                    print(f"✅ Extracted: {filename} ({len(image_bytes)} bytes)")
                    extracted_images.append(filepath)
    
    doc.close()
    return extracted_images

def main():
    docs_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "docs")
    output_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), "public", "images", "extracted-logos")
    
    pdfs = {
        "sos_support": os.path.join(docs_dir, "ZB_CaseStudies_1218_sm-1 (2).pdf"),
        "michelle": os.path.join(docs_dir, "ZeroBarriersInc_Case-Study_MichelleA (2).pdf"),
        "darrel": os.path.join(docs_dir, "ZeroBarriersInc_Case-Study_DarrelRawlins (2).pdf"),
    }
    
    all_images = {}
    
    for name, pdf_path in pdfs.items():
        print(f"\n📄 Processing {name}...")
        images = extract_images_from_pdf(pdf_path, output_dir, name)
        all_images[name] = images
    
    print("\n" + "="*60)
    print("Summary:")
    for name, images in all_images.items():
        print(f"  {name}: {len(images)} images extracted")
    
    print(f"\n✅ All images extracted to: {output_dir}")
    
    # Look for specific logos
    print("\n🔍 Looking for specific logos...")
    
    # Look for SOS Support logo
    sos_images = [img for img in all_images.get("sos_support", []) + all_images.get("michelle", []) 
                  if "sos" in os.path.basename(img).lower() or os.path.getsize(img) > 20000]
    
    # Look for Hays Company logo
    hays_images = [img for img in all_images.get("darrel", []) 
                   if "hays" in os.path.basename(img).lower() or os.path.getsize(img) > 20000]
    
    if sos_images:
        print(f"  Found {len(sos_images)} potential SOS Support logos")
        for img in sos_images[:3]:  # Show first 3
            print(f"    - {os.path.basename(img)}")
    
    if hays_images:
        print(f"  Found {len(hays_images)} potential Hays Company logos")
        for img in hays_images[:3]:  # Show first 3
            print(f"    - {os.path.basename(img)}")
    
    return all_images

if __name__ == "__main__":
    main()



