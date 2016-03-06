(function($, Backbone){

  /* A Backbone view that controls interactions with the form */

  var AssistanceRequest = Backbone.Model.extend({
    url: '/api/assistance-requests',

    validate: function(attributes, options){
      var assistanceRequest = attributes.assistance_request;
      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (!assistanceRequest.contact.first_name) {
        return { 
          id: "first_name",
          message: "Please enter your first name" 
        };
      }

      if (!assistanceRequest.contact.last_name) {
        return { 
          id: "last_name",
          message: "Please enter your last name" 
        };
      }

      if (!assistanceRequest.contact.email) {
        return { 
          id: "email",
          message: "Please enter your email" 
        };
      }

      if (!emailRegex.test(assistanceRequest.contact.email)) {
        return { 
          id: "email",
          message: "Please enter a valid email address" 
        };
      }

      if (!assistanceRequest.service_type) {
        return { 
          id: "service_type",
          message: "Please select a service type" 
        };
      }

      if (!assistanceRequest.description) {
        return { 
          id: "description",
          message: "Please enter an assistance request description" 
        };
      }

      if (!assistanceRequest.terms_of_service) {
        return { 
          id: "terms_of_service",
          message: "Please accept the terms of service" 
        };
      }
    }
  });

  window.App = window.App || {};
  window.App.Models = window.App.Views || {};
  window.App.Models.AssistanceRequest = AssistanceRequest;
})(jQuery, Backbone);