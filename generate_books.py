import os
import json

def generate_json():
    books = []
    # Assumes your PDFs and Images are in the 'books' folder
    for file in os.listdir('books'):
        if file.endswith('.pdf'):
            name = os.path.splitext(file)[0]
            # Assumes your image is named the same as the PDF, e.g., 'Lumi.jpg'
            books.append({
                "title": name.replace('_', ' '),
                "file": f"books/{file}",
                "image": f"books/{name}.jpg" 
            })
    
    with open('books.json', 'w') as f:
        json.dump(books, f, indent=4)
    print("Library updated successfully!")

if __name__ == "__main__":
    generate_json()