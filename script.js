fetch('books.json')
    .then(response => response.json())
    .then(data => {
        const libraryContainer = document.getElementById('library');
        
        data.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            
            card.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <a href="${book.file}" target="_blank">Read Book</a>
            `;
            
            libraryContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading books:', error));