// Songs.js - Defines a backbone collection class for songs.
// This collection is an array. It is given the data and extends the SongModel model
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
  
  parse: function(response) {
    return response.results;
  },

  initialize: function() {
    this.fetch({
      data: {}
    });
  },

});