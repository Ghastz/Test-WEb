<script>
  document.addEventListener('DOMContentLoaded', function() {
    const musicToggle = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');
    
    // Cek status toggle saat halaman dimuat
    const isMusicOn = localStorage.getItem('musicOn') === 'true';
    musicToggle.checked = isMusicOn;
    
    if (isMusicOn) {
      bgMusic.play().catch(e => console.log('Autoplay blocked:', e));
    }
    
    // Event listener untuk toggle
    musicToggle.addEventListener('change', function() {
      if (this.checked) {
        bgMusic.play().then(() => {
          localStorage.setItem('musicOn', 'true');
        }).catch(e => {
          console.log('Play failed:', e);
          this.checked = false;
        });
      } else {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        localStorage.setItem('musicOn', 'false');
      }
    });
    
    // Auto play ketika user berinteraksi dengan halaman
    document.body.addEventListener('click', function() {
      if (musicToggle.checked && bgMusic.paused) {
        bgMusic.play().then(() => {
          console.log('Music started after interaction');
        });
      }
    }, { once: true });
  });
</script>