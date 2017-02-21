// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',
  //USE el. when song ends it should trigger ended. ALSO make sure we BIND/Apply/call

  initialize: function() {
    // this.on('ended', function() {
    //   this.collection.at(0).dequeue();
    //   this.setSong(this.collection.at(0));
    // });
    console.log('what is ', this);
    console.log('what is model ', this.model);

    // this.collection.on('ended', function() {
    //   // diuwehfiue(); 
    //   console.log('has been ended');
    //   // var song = this.get(this.collection.at(0));
    //   // this.setSong(song);
    //   // this.collection.at(0).dequeue();
    //   // this.setSong(this.collection.at(0));
    //   this.model.ended();
    //   this.setSong(this.collection.at(0));
    // });
    var context = this;
    this.$el.on('ended', function() {
      // this.songQueueView.setSong(model.get('currentSong'));
      console.log('inside', this);
      // if (AppView.PlayerView.model !== undefined) {
        // this.model.ended();
        // this.setSong();
      // AppView.PlayerView.model.ended();
      // }
      context.model.ended();
    });
    // this.model.on('change:currentSong', function(model) {
    //   this.playerView.setSong(model.get('currentSong'));
    // }, this);
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
