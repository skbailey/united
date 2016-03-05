jQuery(function($){
  var serviceTypes = new window.App.Collections.ServiceTypes();
  var assistanceForm = new window.App.Views.AssistanceForm({
    el: 'form.assistance',
    collection: serviceTypes
  });

  serviceTypes.fetch();
});