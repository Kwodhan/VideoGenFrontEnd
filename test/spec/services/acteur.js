'use strict';

describe('Service: Acteur', function () {

  // load the service's module
  beforeEach(module('videoGenApp'));

  // instantiate service
  var Acteur;
  beforeEach(inject(function (_Acteur_) {
    Acteur = _Acteur_;
  }));

  it('should do something', function () {
    expect(!!Acteur).toBe(true);
  });

});
