describe("Service Types", function(){
  var serviceTypes;

  beforeEach(function(){
    serviceTypes = new window.App.Collections.ServiceTypes();
  });

  it("has a url to fetch the service types", function(){
    var serviceTypesURL = '/api/service-types';
    expect(serviceTypes.url).toEqual(serviceTypesURL);
  });
});