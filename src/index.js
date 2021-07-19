import mediaPlayer from './mediaPlayer';

const video = document.querySelector('video');
const player = new mediaPlayer({el: video});

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();