(function($, Backbone){

  /* A Backbone view that controls interactions with the form */

  var AssistanceForm = Backbone.View.extend({
    initialize: function(){
      this.serviceTypes = new window.App.Collections.ServiceTypes()
      this.serviceTypes.on("sync", this.loadServiceTypes, this);
      this.serviceTypes.fetch();
    },

    loadServiceTypes: function(){
      console.log("Load the serviceTypes!", this.serviceTypes);
    }
  });

  window.App = window.App || {};
  window.App.Views = window.App.Views || {};
  window.App.Views.AssistanceForm = AssistanceForm;
})(jQuery, Backbone);