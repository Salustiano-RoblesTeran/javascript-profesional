

function mediaPlayer (config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    
    this._initPlugins();
}

mediaPlayer.prototype._initPlugins = function () {
  this.plugins.forEach(plugin => {
    plugin.run(this);
  });
}

mediaPlayer.prototype.play = function () {
    this.media.play();
}

mediaPlayer.prototype.pause = function () {
  this.media.pause();
}


mediaPlayer.prototype.togglePlay = function() {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

mediaPlayer.prototype.toggleMute = function() {
  if (this.media.muted == false) {
    this.mute();
  } else {
    this.unmute();
  }
};

mediaPlayer.prototype.mute = function() {
  this.media.muted = true;
}

mediaPlayer.prototype.unmute = function() {
  this.media.muted = false;
}


export default mediaPlayer;