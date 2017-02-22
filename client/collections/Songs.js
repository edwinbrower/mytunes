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



// solutions from chatterbox 
  // fetch: function(animate) {
  //   $.ajax({
  //     url: app.server,
  //     type: 'GET',
  //     data: { order: '-createdAt' },
  //     contentType: 'application/json',
  //     success: function(data) {
  //       // Don't bother if we have nothing to work with
  //       if (!data.results || !data.results.length) { return; }

  //       // Store messages for caching later
  //       app.messages = data.results;

  //       // Get the last message
  //       var mostRecentMessage = data.results[data.results.length - 1];

  //       // Only bother updating the DOM if we have a new message
  //       if (mostRecentMessage.objectId !== app.lastMessageId) {
  //         // Update the UI with the fetched rooms
  //         app.renderRoomList(data.results);

  //         // Update the UI with the fetched messages
  //         app.renderMessages(data.results, animate);

  //         // Store the ID of the most recent message
  //         app.lastMessageId = mostRecentMessage.objectId;
  //       }
  //     },
  //     error: function(error) {
  //       console.error('chatterbox: Failed to fetch messages', error);
  //     }
  //   });
  // },