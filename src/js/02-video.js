import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('play', () => {
  console.log('play');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', throttle(function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}, 1000));  

const currentTime = localStorage.getItem(STORAGE_KEY);
if (currentTime) {
  player.setCurrentTime(currentTime);
}