let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        playerVars: {
            'autoplay': 0,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'key': '9bbb106dcdmshe4bb547d1c7fdb2p12df60jsn1272a48cc21f',
        },
    });
}

function loadVideo() {
    const videoId = document.getElementById('videoIdInput').value;
    if (videoId.trim() !== '') {
        if (player) {
            player.loadVideoById(videoId);
        } else {
            setTimeout(() => {
                loadVideo();
            }, 1000);
        }
    } else {
        alert('Enter a valid YouTube Video ID.');
    }
}