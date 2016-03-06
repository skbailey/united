(function($, Backbone){

  /* A Backbone view that controls interactions with the form */

  var AssistanceForm = Backbone.View.extend({
    events: {
      "submit" : "onSubmit"
    },

    initialize: function(){
      this.model = new window.App.Models.AssistanceRequest();

      this.listenTo(this.model, "sync", this.displaySubmissionSuccess);
      this.listenTo(this.model, "error", this.displayConnectionError);
      this.listenTo(this.model, "invalid", this.displayValidationError);
      this.listenTo(this.collection, "sync", this.populateServiceTypes)

      // Components
      this.alert = this.$('.alert');
      this.submitBtn = this.$('.submit input');
    },

    // Form Management Methods
    enableForm: function(){
      this.submitBtn.removeAttr('disabled');
    },

    disableForm: function(){
      this.submitBtn.attr('disabled', 'disabled');
      this.cleanupForm();
    },

    cleanupForm: function() {
      var $currentErrors = this.$('.has-error');
      $currentErrors.removeClass('has-error');

      this.alert
        .removeClass('alert-danger alert-success')
        .addClass('hidden');
    },

    // Model & Collection Event Callbacks
    populateServiceTypes: function(collection){
      var selectBox = this.$('select.service-types');
      var serviceTypeOptionTemplate = _.template('<option value="<%= model.id %>">' + 
        '<%= model.get("display_name") %>' +
        '</option>');

      this.collection.each(function(serviceType){
        selectBox.append(serviceTypeOptionTemplate({model: serviceType}));
      });
    },

    displaySubmissionSuccess: function(model, response, options) {
      this.alert
        .addClass('alert-success')
        .removeClass('hidden')
        .text(response.message);

      this.enableForm();
    },

    displayConnectionError: function(model, response, options) {
      this.alert
        .addClass('alert-danger')
        .removeClass('hidden')
        .text(response.responseJSON.message);

      this.enableForm();
    },

    displayValidationError: function(model, error, options){
      var $errorGroup = this.$('.' + error.id);
      var $errorDisplay = $errorGroup.find('.error-message');
      $errorDisplay.text(error.message);
      $errorGroup.addClass('has-error');

      this.enableForm();
    },

    // DOM Event Callbacks
    onSubmit: function(evt){
      var form = evt.target;
      var formParams = this.$el.formParams();

      this.disableForm();
      this.model.save({ assistance_request: formParams }, {
        success: function(){
          form.reset();
        }
      });

      return false;
    }
  });

  window.App = window.App || {};
  window.App.Views = window.App.Views || {};
  window.App.Views.AssistanceForm = AssistanceForm;
})(jQuery, Backbone);