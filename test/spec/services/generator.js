'use strict';

describe('Service: generator', function () {

  // load the service's module
  beforeEach(module('videoGenApp'));

  // instantiate service
  var generator;
  beforeEach(inject(function (_generator_) {
    generator = _generator_;
  }));

  it('should do something', function () {
    expect(!!generator).toBe(true);
  });

});
