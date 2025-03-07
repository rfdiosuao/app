window.onload = function() {
    // 音乐控制
    const music = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    let isPlaying = false;

    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            music.pause();
            musicToggle.classList.remove('playing');
        } else {
            music.play();
            musicToggle.classList.add('playing');
        }
        isPlaying = !isPlaying;
    });
} 