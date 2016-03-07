describe("Assistance Form", function(){
  var assistanceForm, serviceTypes;

  describe('Populate service type dropdown', function(){
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

  describe('Form Management', function(){
    var formMarkup;

    describe('Enabled and disabled states', function(){
      it('disables the form', function(){
        formMarkup = '<form class="assistance">'
            + '<div class="submit">'
              + '<input type="submit">'
            + '</div>'
          + '</form>';

        setFixtures(formMarkup);
        assistanceForm = new window.App.Views.AssistanceForm({
          el: "form.assistance"
        });
        assistanceForm.disableForm();

        expect(assistanceForm.submitBtn).toHaveAttr('disabled');
      });

      it('enables the form', function(){
        formMarkup = '<form class="assistance">'
            + '<div class="submit">'
              + '<input type="submit" disabled="disabled">'
            + '</div>'
          + '</form>';

        setFixtures(formMarkup);
        assistanceForm = new window.App.Views.AssistanceForm({
          el: "form.assistance"
        });
        assistanceForm.enableForm();

        expect(assistanceForm.submitBtn).not.toHaveAttr('disabled');
      });
    });

    describe('Clean up', function(){
      it('cleans up error states', function(){
        formMarkup = '<form class="assistance">'
            + '<div class="form-group has-error"></div>'
            + '<div class="form-group"></div>'
            + '<div class="form-group has-error"></div>'
          + '</form>';

        setFixtures(formMarkup);
        assistanceForm = new window.App.Views.AssistanceForm({
          el: "form.assistance"
        });
        assistanceForm.cleanupForm();

        expect($('.has-error')).not.toBeInDOM();
      });

      it('cleans up alert states', function(){
        formMarkup = '<form class="assistance">'
            + '<div class="alert alert-danger"></div>'
          + '</form>';

        setFixtures(formMarkup);
        assistanceForm = new window.App.Views.AssistanceForm({
          el: "form.assistance"
        });
        assistanceForm.cleanupForm();

        expect(assistanceForm.alert).not.toHaveClass('alert-danger');
      });
    });
  });
});