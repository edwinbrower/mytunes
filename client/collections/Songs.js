// Songs.js - Defines a backbone collection class for songs.
// This collection is an array. It is given the data and extends the SongModel model
var Songs = Backbone.Collection.extend({

  model: SongModel

});