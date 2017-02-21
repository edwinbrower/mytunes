// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    debugger;
    console.log(this);
    this.on('add', function() {
      if (this.length === 1) {
        // this.model.set('currentSong', this.at(0));
        // this.playFirst('currentSong');
        this.playFirst();
      }
    }, this);
    this.on('ended', function() {
      this.at(0).dequeue();
    }, this);
    // remove should take parameters. 
    // dequeue should not
    this.on('dequeue', function() {
      this.remove(this.at(0));
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
  },
  playFirst: function() {
    this.at(0).play();
  },
  // dequeue: function() {
  //   this.remove();
  //   // this.remove(this.at(0));
  // }
});

// comparator  ??