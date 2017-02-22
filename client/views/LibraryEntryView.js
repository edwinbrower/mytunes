// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      // if (this.mode.collection)
      // this.model.play();  // currently works with play but it should only enqueue....
      this.model.enqueue();  // do we need to test  here if it's already added??
      // this.model.render();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
