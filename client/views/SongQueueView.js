// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  // initialize: function() {
  // },

  // render: function() {
  //   return this.$el;
  // }

  tagName: 'table',

  initialize: function() {
    this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/

    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});




//copied from LibraryView
  // tagName: 'table',

  // initialize: function() {
  //   this.render();

  // },

  // render: function() {
  //   // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
  //   // see http://api.jquery.com/detach/
  //   this.$el.children().detach();

  //   this.$el.html('<th>Library</th>').append(
  //     this.collection.map(function(song) {
  //       return new LibraryEntryView({model: song}).render();
  //     })
  //   );
  // }