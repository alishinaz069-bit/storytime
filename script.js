fetch('books.json')
    .then(response => response.json())
    .then(books => {
        const container = document.getElementById('library');
        books.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <img src="${book.image}" alt="${book.title}" onerror="this.src='placeholder.png'">
                <h3>${book.title}</h3>
                <a href="${book.file}" target="_blank">Open Story</a>
            `;
            container.appendChild(card);
        });
    });