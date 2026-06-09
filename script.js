fetch('books.json')
    .then(response => response.json())
    .then(data => {
        const libraryContainer = document.getElementById('library');
        
        data.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            
            // Note: We are now passing book.story to the readAloud function
            card.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <button onclick="readAloud('${book.story}')">🔊 Auto Read Story</button>
                <a href="${book.file}" target="_blank">Open Story</a>
            `;
            
            libraryContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading books:', error));

// The Function to speak the story content
function readAloud(text) {
    // Stop any current speaking before starting a new story
    window.speechSynthesis.cancel();
    
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    speech.rate = 0.9; // Keeps the voice clear and easy to follow
    speech.pitch = 1;
    
    window.speechSynthesis.speak(speech);
}