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
    instance = new CourtApi.InlineResponse2003();
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

  describe('InlineResponse2003', function() {
    it('should create an instance of InlineResponse2003', function() {
      // uncomment below and update the code to test InlineResponse2003
      //var instane = new CourtApi.InlineResponse2003();
      //expect(instance).to.be.a(CourtApi.InlineResponse2003);
    });

    it('should have the property _case (base name: "case")', function() {
      // uncomment below and update the code to test the property _case
      //var instane = new CourtApi.InlineResponse2003();
      //expect(instance).to.be();
    });

    it('should have the property forms (base name: "forms")', function() {
      // uncomment below and update the code to test the property forms
      //var instane = new CourtApi.InlineResponse2003();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new CourtApi.InlineResponse2003();
      //expect(instance).to.be();
    });

    it('should have the property queries (base name: "queries")', function() {
      // uncomment below and update the code to test the property queries
      //var instane = new CourtApi.InlineResponse2003();
      //expect(instance).to.be();
    });

  });

}));
