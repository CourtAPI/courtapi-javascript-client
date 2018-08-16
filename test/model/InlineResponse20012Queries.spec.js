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
    instance = new CourtApi.InlineResponse20012Queries();
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

  describe('InlineResponse20012Queries', function() {
    it('should create an instance of InlineResponse20012Queries', function() {
      // uncomment below and update the code to test InlineResponse20012Queries
      //var instane = new CourtApi.InlineResponse20012Queries();
      //expect(instance).to.be.a(CourtApi.InlineResponse20012Queries);
    });

    it('should have the property caseSummary (base name: "case_summary")', function() {
      // uncomment below and update the code to test the property caseSummary
      //var instane = new CourtApi.InlineResponse20012Queries();
      //expect(instance).to.be();
    });

    it('should have the property caseSummaryAttorneys (base name: "case_summary_attorneys")', function() {
      // uncomment below and update the code to test the property caseSummaryAttorneys
      //var instane = new CourtApi.InlineResponse20012Queries();
      //expect(instance).to.be();
    });

  });

}));
