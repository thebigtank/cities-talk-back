const videos = document.querySelectorAll('video');

videos.forEach(video => {
    const menuItem = video.closest('.menu-item');
    let isHovered = false;

    menuItem.addEventListener('mouseenter', () => {
        isHovered = true;
        video.style.display = 'block';

        // Check if the video can be played
        if (video.readyState >= 2) {
            video.play();
        } else {
            video.addEventListener('canplay', () => {
                video.play();
            });
        }
    });

    menuItem.addEventListener('mousemove', event => {
        if (isHovered) {
            const videoWidth = video.offsetWidth;
            const videoHeight = video.offsetHeight;
            const mouseX = event.clientX - menuItem.getBoundingClientRect().left;
            const mouseY = event.clientY - menuItem.getBoundingClientRect().top;

            const x = mouseX - videoWidth / 2;
            const y = mouseY - videoHeight / 2;

            video.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    menuItem.addEventListener('mouseleave', () => {
        isHovered = false;
        video.style.display = 'none';
        video.pause(); // Pause the video
        video.style.transform = 'translate(0, 0)';
    });
});