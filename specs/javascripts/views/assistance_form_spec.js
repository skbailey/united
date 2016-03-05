describe("Assistance Form", function(){
  var assistanceForm, serviceTypes;
  var serviceTypeID = "employment";
  var serviceTypeDisplayName = "Employment";

  beforeEach(function(){
    var models = [{
      id: serviceTypeID, 
      display_name: serviceTypeDisplayName
    }];
    serviceTypes = new window.App.Collections.ServiceTypes(models);
  });

  it('populates the service-type select dropdown with options', function(){
    setFixtures('<form class="assistance"><select class="service-types"></select></form>');
    assistanceForm = new window.App.Views.AssistanceForm({
      el: "form.assistance",
      collection: serviceTypes
    });
    assistanceForm.populateServiceTypes();

    expect($('select.service-types option')).toHaveAttr('value', serviceTypeID);
    expect($('select.service-types option')).toHaveText(serviceTypeDisplayName);
  });
});