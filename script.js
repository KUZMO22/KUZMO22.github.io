const songSearch = document.getElementById('songSearch');
songSearch.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let songs = document.querySelectorAll('h1.title')
    songs.forEach(song => {
        if (song.textContent.toLowerCase().includes(currentValue)) {
            song.parentNode.parentNode.style.display = 'block';
        } else {
            song.parentNode.parentNode.style.display = 'none';
        }
    });
});