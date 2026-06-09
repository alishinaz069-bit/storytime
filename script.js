fetch('books.json')
    .then(response => response.json())
    .then(data => {
        const libraryContainer = document.getElementById('library');
        
        data.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            
            // This builds the card with the image, title, read button, and link
            card.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <button onclick="readAloud('${book.title}')">🔊 Auto Read Title</button>
                <a href="${book.file}" target="_blank">Open Story</a>
            `;
            
            libraryContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading books:', error));

// The Function to speak the text
function readAloud(text) {
    // Stop any current speaking before starting new
    window.speechSynthesis.cancel();
    
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 0.9; // Slightly slower for better clarity for kids
    window.speechSynthesis.speak(speech);
}