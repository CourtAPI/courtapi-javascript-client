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
    instance = new CourtApi.InlineResponse2005QueriesCreditorsText();
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

  describe('InlineResponse2005QueriesCreditorsText', function() {
    it('should create an instance of InlineResponse2005QueriesCreditorsText', function() {
      // uncomment below and update the code to test InlineResponse2005QueriesCreditorsText
      //var instane = new CourtApi.InlineResponse2005QueriesCreditorsText();
      //expect(instance).to.be.a(CourtApi.InlineResponse2005QueriesCreditorsText);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new CourtApi.InlineResponse2005QueriesCreditorsText();
      //expect(instance).to.be();
    });

    it('should have the property creditorCode (base name: "creditor_code")', function() {
      // uncomment below and update the code to test the property creditorCode
      //var instane = new CourtApi.InlineResponse2005QueriesCreditorsText();
      //expect(instance).to.be();
    });

    it('should have the property creditorRole (base name: "creditor_role")', function() {
      // uncomment below and update the code to test the property creditorRole
      //var instane = new CourtApi.InlineResponse2005QueriesCreditorsText();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CourtApi.InlineResponse2005QueriesCreditorsText();
      //expect(instance).to.be();
    });

  });

}));
