/**
 * CourtAPI
 * Automate PACER Access
 *
 * OpenAPI spec version: 0.9.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CourtApi);
  }
}(this, function(expect, CourtApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CourtApi.PACERQueryCaseAliasText();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PACERQueryCaseAliasText', function() {
    it('should create an instance of PACERQueryCaseAliasText', function() {
      // uncomment below and update the code to test PACERQueryCaseAliasText
      //var instane = new CourtApi.PACERQueryCaseAliasText();
      //expect(instance).to.be.a(CourtApi.PACERQueryCaseAliasText);
    });

    it('should have the property party (base name: "party")', function() {
      // uncomment below and update the code to test the property party
      //var instane = new CourtApi.PACERQueryCaseAliasText();
      //expect(instance).to.be();
    });

    it('should have the property partyAlias (base name: "party_alias")', function() {
      // uncomment below and update the code to test the property partyAlias
      //var instane = new CourtApi.PACERQueryCaseAliasText();
      //expect(instance).to.be();
    });

  });

}));
