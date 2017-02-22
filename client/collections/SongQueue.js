// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    console.log(this);

    this.on('add', function() {
      // debugger;
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    // if (this.length === 1) {
    //   this.playFirst();
    // }

    // this.on('enqueue', this.enqueue(), this);
    // this.on('ended', this.dequeue(), this);
    // this.on('dequeue', this.dequeue(), this);
    this.on('enqueue', this.enqueue.bind(this));
    this.on('ended', this.dequeue.bind(this));
    this.on('dequeue', this.dequeue.bind(this));

      //function() {
    //   this.remove(this.at(0));
    //   if (this.length > 0) {
    //     this.playFirst();
    //   }
    // }, this);
  },
  playFirst: function() {
    this.at(0).play();
  },

  enqueue: function() {
    // this.play();
    this.add(this.at(this.length));
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function() {
    this.remove(this.at(0));
    if (this.length > 0) {
      this.playFirst();
    }
  }

  // ended: function() {
  //   // this.at(0).dequeue();
  //   this.dequeue();
  // }

});
