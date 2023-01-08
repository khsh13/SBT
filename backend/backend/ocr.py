def ocr_core(filename):
    from PIL import Image
    import pytesseract
    #This function will handle the core OCR processing of images.
    
    text = pytesseract.image_to_string(Image.open(filename))
    return 