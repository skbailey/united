(function($, Backbone){

  /* A Backbone view that controls interactions with the form */

  var AssistanceForm = Backbone.View.extend({
    initialize: function(){
      this.collection.on("sync", this.populateServiceTypes, this);
    },

    populateServiceTypes: function(){
      var selectBox = this.$('select.service-types');
      var serviceTypeOptionTemplate = _.template('<option value="<%= model.id %>">' + 
        '<%= model.get("display_name") %>' +
        '</option>');

      this.collection.each(function(serviceType){
        selectBox.append(serviceTypeOptionTemplate({model: serviceType}));
      });
    }
  });

  window.App = window.App || {};
  window.App.Views = window.App.Views || {};
  window.App.Views.AssistanceForm = AssistanceForm;
})(jQuery, Backbone);