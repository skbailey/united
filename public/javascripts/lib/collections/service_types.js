(function($, Backbone){

  /* A Backbone view that controls interactions with the form */

  var ServiceTypes = Backbone.Collection.extend({
    url: '/api/service-types',

    parse: function(response) {
      return response.data;
    }
  });

  window.App = window.App || {};
  window.App.Collections = window.App.Views || {};
  window.App.Collections.ServiceTypes = ServiceTypes;
})(jQuery, Backbone);