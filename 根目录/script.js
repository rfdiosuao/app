window.onload = function() {
    console.log('页面加载完成');

    // 音乐控制
    const music = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');

    // 检查元素是否存在
    if (!music || !musicToggle) {
        console.error('未找到音乐播放器元素');
        return;
    }

    console.log('音乐播放器元素已找到');
    let isPlaying = false;

    // 设置音量
    music.volume = 0.5;
    console.log('音量已设置为50%');

    // 添加音频加载错误处理
    music.addEventListener('error', function(e) {
        console.error('音频加载错误:', e);
        alert('背景音乐加载失败，请检查音频文件');
    });

    // 添加音频加载成功处理
    music.addEventListener('loadeddata', function() {
        console.log('音频加载成功');
    });

    // 检查音频文件是否正确加载
    if (music.readyState === 0) {
        console.error('音频文件未加载');
    } else {
        console.log('音频文件状态:', music.readyState);
    }

    // 点击播放按钮时的处理
    musicToggle.addEventListener('click', function() {
        console.log('播放按钮被点击');
        
        if (isPlaying) {
            console.log('尝试暂停音乐');
            music.pause();
            musicToggle.classList.remove('playing');
            console.log('音乐已暂停');
        } else {
            console.log('尝试播放音乐');
            // 尝试播放
            const playPromise = music.play();
            
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // 播放成功
                    console.log('音乐播放成功');
                    musicToggle.classList.add('playing');
                })
                .catch(error => {
                    // 播放失败
                    console.error('播放失败:', error);
                    alert('音乐播放失败，请检查浏览器设置是否允许自动播放');
                });
            }
        }
        isPlaying = !isPlaying;
    });

    // 监听音频播放状态
    music.addEventListener('playing', function() {
        console.log('音频开始播放');
    });

    music.addEventListener('pause', function() {
        console.log('音频已暂停');
    });

    music.addEventListener('ended', function() {
        console.log('音频播放结束');
        isPlaying = false;
        musicToggle.classList.remove('playing');
    });

    // 检查音频文件路径
    console.log('音频文件路径:', music.querySelector('source').src);
} 