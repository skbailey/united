describe("Assistance Request", function(){
  var assistanceRequest;

  beforeEach(function(){
    assistanceRequest = new window.App.Models.AssistanceRequest();
  });

  it("has a url to submit the assistance request", function(){
    var assistanceRequestURL = '/api/assistance-requests';
    expect(assistanceRequest.url).toEqual(assistanceRequestURL);
  });
});