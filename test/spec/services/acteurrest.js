'use strict';

describe('Service: ActeurRest', function () {

  // load the service's module
  beforeEach(module('videoGenApp'));

  // instantiate service
  var ActeurRest;
  beforeEach(inject(function (_ActeurRest_) {
    ActeurRest = _ActeurRest_;
  }));

  it('should do something', function () {
    expect(!!ActeurRest).toBe(true);
  });

});
