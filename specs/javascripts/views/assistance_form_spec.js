describe("Assistance Form", function(){
  var assistanceForm;

  beforeEach(function(){
    setFixtures('<form class="assistance"></form>');
    assistanceForm = new window.App.Views.AssistanceForm({el: 'form.assistance'});
  });

  it("has a collection of service types", function(){
    expect(assistanceForm.serviceTypes).toEqual(jasmine.any(window.App.Collections.ServiceTypes));
  });
});