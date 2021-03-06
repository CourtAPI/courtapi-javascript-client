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
    instance = new CourtApi.PACERQueryCaseHeaderText();
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

  describe('PACERQueryCaseHeaderText', function() {
    it('should create an instance of PACERQueryCaseHeaderText', function() {
      // uncomment below and update the code to test PACERQueryCaseHeaderText
      //var instane = new CourtApi.PACERQueryCaseHeaderText();
      //expect(instance).to.be.a(CourtApi.PACERQueryCaseHeaderText);
    });

    it('should have the property caseCode (base name: "case_code")', function() {
      // uncomment below and update the code to test the property caseCode
      //var instane = new CourtApi.PACERQueryCaseHeaderText();
      //expect(instance).to.be();
    });

    it('should have the property caseTitle (base name: "case_title")', function() {
      // uncomment below and update the code to test the property caseTitle
      //var instane = new CourtApi.PACERQueryCaseHeaderText();
      //expect(instance).to.be();
    });

    it('should have the property caseType (base name: "case_type")', function() {
      // uncomment below and update the code to test the property caseType
      //var instane = new CourtApi.PACERQueryCaseHeaderText();
      //expect(instance).to.be();
    });

    it('should have the property caseUuid (base name: "case_uuid")', function() {
      // uncomment below and update the code to test the property caseUuid
      //var instane = new CourtApi.PACERQueryCaseHeaderText();
      //expect(instance).to.be();
    });

    it('should have the property chapter (base name: "chapter")', function() {
      // uncomment below and update the code to test the property chapter
      //var instane = new CourtApi.PACERQueryCaseHeaderText();
      //expect(instance).to.be();
    });

    it('should have the property dateFiled (base name: "date_filed")', function() {
      // uncomment below and update the code to test the property dateFiled
      //var instane = new CourtApi.PACERQueryCaseHeaderText();
      //expect(instance).to.be();
    });

    it('should have the property dateOfLastFiling (base name: "date_of_last_filing")', function() {
      // uncomment below and update the code to test the property dateOfLastFiling
      //var instane = new CourtApi.PACERQueryCaseHeaderText();
      //expect(instance).to.be();
    });

    it('should have the property hasAsset (base name: "has_asset")', function() {
      // uncomment below and update the code to test the property hasAsset
      //var instane = new CourtApi.PACERQueryCaseHeaderText();
      //expect(instance).to.be();
    });

    it('should have the property judgeName (base name: "judge_name")', function() {
      // uncomment below and update the code to test the property judgeName
      //var instane = new CourtApi.PACERQueryCaseHeaderText();
      //expect(instance).to.be();
    });

    it('should have the property petitionType (base name: "petition_type")', function() {
      // uncomment below and update the code to test the property petitionType
      //var instane = new CourtApi.PACERQueryCaseHeaderText();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new CourtApi.PACERQueryCaseHeaderText();
      //expect(instance).to.be();
    });

  });

}));
