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
    instance = new CourtApi.InlineResponse20015Items();
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

  describe('InlineResponse20015Items', function() {
    it('should create an instance of InlineResponse20015Items', function() {
      // uncomment below and update the code to test InlineResponse20015Items
      //var instane = new CourtApi.InlineResponse20015Items();
      //expect(instance).to.be.a(CourtApi.InlineResponse20015Items);
    });

    it('should have the property headers (base name: "headers")', function() {
      // uncomment below and update the code to test the property headers
      //var instane = new CourtApi.InlineResponse20015Items();
      //expect(instance).to.be();
    });

    it('should have the property receipts (base name: "receipts")', function() {
      // uncomment below and update the code to test the property receipts
      //var instane = new CourtApi.InlineResponse20015Items();
      //expect(instance).to.be();
    });

    it('should have the property relatedTransactions (base name: "related_transactions")', function() {
      // uncomment below and update the code to test the property relatedTransactions
      //var instane = new CourtApi.InlineResponse20015Items();
      //expect(instance).to.be();
    });

  });

}));
