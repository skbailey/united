describe("Assistance Request", function(){
  var assistanceRequest;

  beforeEach(function(){
    assistanceRequest = new window.App.Models.AssistanceRequest();
  });

  it("has a url to submit the assistance request", function(){
    var assistanceRequestURL = '/api/assistance-requests';
    expect(assistanceRequest.url).toEqual(assistanceRequestURL);
  });

  describe('Validation', function(){
    var requestData;

    beforeEach(function(){
      requestData = {
        assistance_request: {
          contact: {
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@company.com"
          },
          service_type: "Health",
          description: "An assistance request description.",
          terms_of_service: "true"
        }
      }
    });

    it("validates presence of first name", function(){
      requestData.assistance_request.contact.first_name = "";
      assistanceRequest.set(requestData, {validate: true});

      expect(assistanceRequest.validationError.message).toEqual("Please enter your first name");
    });

    it("validates presence of last name", function(){
      requestData.assistance_request.contact.last_name = "";
      assistanceRequest.set(requestData, {validate: true});

      expect(assistanceRequest.validationError.message).toEqual("Please enter your last name");
    });

    it("validates presence of email", function(){
      requestData.assistance_request.contact.email = "";
      assistanceRequest.set(requestData, {validate: true});

      expect(assistanceRequest.validationError.message).toEqual("Please enter your email");
    });

    it("validates format of email", function(){
      requestData.assistance_request.contact.email = "s.@";
      assistanceRequest.set(requestData, {validate: true});

      expect(assistanceRequest.validationError.message).toEqual("Please enter a valid email address");
    });

    it("validates presence of a service type", function(){
      requestData.assistance_request.service_type = "";
      assistanceRequest.set(requestData, {validate: true});

      expect(assistanceRequest.validationError.message).toEqual("Please select a service type");
    });

    it("validates presence of a description", function(){
      requestData.assistance_request.description = "";
      assistanceRequest.set(requestData, {validate: true});

      expect(assistanceRequest.validationError.message).toEqual("Please enter an assistance request description");
    });

    it("validates acceptance of terms of service", function(){
      requestData.assistance_request.terms_of_service = "";
      assistanceRequest.set(requestData, {validate: true});

      expect(assistanceRequest.validationError.message).toEqual("Please accept the terms of service");
    });
  });
});