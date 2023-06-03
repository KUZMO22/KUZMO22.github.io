window.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playlistItems = document.querySelectorAll('.playlist li');
  
    playlistItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const source = this.getAttribute('data-src');
            audio.src = source;
            audio.play();
        });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playlistItems = document.querySelectorAll('.playlist li');
    const playButton = document.getElementById('play-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const progressBar = document.querySelector('.progress');
    let currentIndex = 0;
  
    playlistItems.forEach(function(item, index) {
      item.addEventListener('click', function() {
        currentIndex = index;
        playSong(this.getAttribute('data-src'));
        updatePlaylist();
      });
    });
  
    playButton.addEventListener('click', function() {
      if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
      } else {
        audio.pause();
        playButton.textContent = 'Play';
      }
    });
  
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex - 1 + playlistItems.length) % playlistItems.length;
      playSong(playlistItems[currentIndex].getAttribute('data-src'));
      updatePlaylist();
    });
  
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex + 1) % playlistItems.length;
      playSong(playlistItems[currentIndex].getAttribute('data-src'));
      updatePlaylist();
    });
  
    audio.addEventListener('timeupdate', function() {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = progress + '%';
    });
  
    audio.addEventListener('ended', function() {
      currentIndex = (currentIndex + 1) % playlistItems.length;
      playSong(playlistItems[currentIndex].getAttribute('data-src'));
        updatePlaylist();
      });
    
      function playSong(source) {
        audio.src = source;
        audio.play();
        playButton.textContent = 'Pause';
      }
    
      function updatePlaylist() {
        playlistItems.forEach(function(item, index) {
          if (index === currentIndex) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });