// 1. get the videos
const videos = document.querySelectorAll('video');

// 2. loop through each video
videos.forEach(video => {
    const menuItem = video.closest('.menu-item');
    let isHovered = false;

    // when a mouse enters into the menu item
    menuItem.addEventListener('mouseenter', () => {
        // we need to set is hovered to true and set display from none to block
        isHovered = true;
        video.style.display = 'block';

        // Check if the video can be played by checking the ready state
        if (video.readyState >= 2) {
            // play the video
            video.play();
        } else {
            // use the 'canplay' event listener to listen for when enough data has been loaded to allow playback
            // then play the video
            video.addEventListener('canplay', () => {
                video.play();
            });
        }
    });

    // when the mouse moves on the menuitem, we first need to check if 'isHovered' is truthy
    menuItem.addEventListener('mousemove', event => {
        if (isHovered) {
            // we retreive the width and height of the video
            const videoWidth = video.offsetWidth;
            const videoHeight = video.offsetHeight;

            // We need to get the mouse coordinates relative to the top-left corner of the menuitem
            const mouseX = event.clientX - menuItem.getBoundingClientRect().left;
            const mouseY = event.clientY - menuItem.getBoundingClientRect().top;

            // We need to calculate the translation values that moves the video along with our mouse.
            const x = mouseX - videoWidth / 2;
            const y = mouseY - videoHeight / 2;

            video.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    // Finally we set a 'mouseleave event' that resets our elements values when the mouse leaves the menu-items
    menuItem.addEventListener('mouseleave', () => {
        isHovered = false;
        video.style.display = 'none';
        video.pause(); // We set pause to the video so when we revisit the menu-item, the video continues from where it stops.
        video.style.transform = 'translate(0, 0)';
    });
});