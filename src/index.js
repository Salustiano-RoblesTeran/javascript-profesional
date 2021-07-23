import mediaPlayer from './mediaPlayer.js';
import autoPlay from './plugins/autoPlay.js';

const video = document.querySelector('video');
const player = new mediaPlayer({ el: video, plugins: [new autoPlay()] });

const button1 = document.querySelector('#pp');
const button2 = document.querySelector('#mu');

button1.onclick = () => player.togglePlay();
button2.onclick = () => player.toggleMute();