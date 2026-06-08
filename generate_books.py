import os
import json

def update_library():
    # The folder where your books are kept
    folder = 'books'
    book_list = []

    # Check if folder exists
    if os.path.exists(folder):
        # Scan for PDF files
        for filename in os.listdir(folder):
            if filename.endswith(".pdf"):
                # Clean the title (replace underscores with spaces, remove .pdf)
                title = filename.replace(".pdf", "").replace("_", " ")
                
                # Create the entry
                book_list.append({
                    "title": title,
                    "author": "Unknown",
                    "file": f"{folder}/{filename}"
                })

        # Save to books.json
        with open('books.json', 'w') as f:
            json.dump(book_list, f, indent=4)
        print(f"Successfully added {len(book_list)} books to books.json!")
    else:
        print("Error: 'books' folder not found.")

if __name__ == "__main__":
    update_library()