async function loadBooks() {
    try {
        const response = await fetch('books.json');
        if (!response.ok) throw new Error("Could not find books.json");
        
        const books = await response.json();
        const container = document.getElementById('library-container');
        container.innerHTML = '';
        
        books.forEach(book => {
            container.innerHTML += `
                <div class="book-card">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                    <a href="${book.file}" target="_blank">Open Story</a>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error loading library:", error);
    }
}

function filterBooks() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let cards = document.getElementsByClassName('book-card');
    
    for (let card of cards) {
        let title = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = title.includes(input) ? "" : "none";
    }
}

loadBooks();