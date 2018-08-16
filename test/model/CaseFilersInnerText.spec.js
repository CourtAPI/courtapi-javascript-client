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
    instance = new CourtApi.CaseFilersInnerText();
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

  describe('CaseFilersInnerText', function() {
    it('should create an instance of CaseFilersInnerText', function() {
      // uncomment below and update the code to test CaseFilersInnerText
      //var instane = new CourtApi.CaseFilersInnerText();
      //expect(instance).to.be.a(CourtApi.CaseFilersInnerText);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CourtApi.CaseFilersInnerText();
      //expect(instance).to.be();
    });

    it('should have the property dateAdded (base name: "date_added")', function() {
      // uncomment below and update the code to test the property dateAdded
      //var instane = new CourtApi.CaseFilersInnerText();
      //expect(instance).to.be();
    });

    it('should have the property modified (base name: "modified")', function() {
      // uncomment below and update the code to test the property modified
      //var instane = new CourtApi.CaseFilersInnerText();
      //expect(instance).to.be();
    });

    it('should have the property uri (base name: "uri")', function() {
      // uncomment below and update the code to test the property uri
      //var instane = new CourtApi.CaseFilersInnerText();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CourtApi.CaseFilersInnerText();
      //expect(instance).to.be();
    });

    it('should have the property dateTerminated (base name: "date_terminated")', function() {
      // uncomment below and update the code to test the property dateTerminated
      //var instane = new CourtApi.CaseFilersInnerText();
      //expect(instance).to.be();
    });

  });

}));