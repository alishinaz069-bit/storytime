fetch('books.json')
    .then(response => response.json())
    .then(data => {
        const libraryContainer = document.getElementById('library');
        libraryContainer.innerHTML = ''; 
        
        data.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <button onclick="readAloud('${book.story}')">🔊 Auto Read</button>
                <a href="${book.file}" target="_blank">Open PDF Story</a>
            `;
            libraryContainer.appendChild(card);
        });
    });

function readAloud(text) {
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
}