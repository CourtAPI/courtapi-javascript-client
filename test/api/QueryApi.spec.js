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
    instance = new CourtApi.QueryApi();
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

  describe('QueryApi', function() {
    describe('buyClaimDocument', function() {
      it('should call buyClaimDocument successfully', function(done) {
        //uncomment below and update the code to test buyClaimDocument
        //instance.buyClaimDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('buyDocketDocument', function() {
      it('should call buyDocketDocument successfully', function(done) {
        //uncomment below and update the code to test buyDocketDocument
        //instance.buyDocketDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAssociatedCases', function() {
      it('should call updateAssociatedCases successfully', function(done) {
        //uncomment below and update the code to test updateAssociatedCases
        //instance.updateAssociatedCases(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAttorneys', function() {
      it('should call updateAttorneys successfully', function(done) {
        //uncomment below and update the code to test updateAttorneys
        //instance.updateAttorneys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCaseFileLocation', function() {
      it('should call updateCaseFileLocation successfully', function(done) {
        //uncomment below and update the code to test updateCaseFileLocation
        //instance.updateCaseFileLocation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCaseSummary', function() {
      it('should call updateCaseSummary successfully', function(done) {
        //uncomment below and update the code to test updateCaseSummary
        //instance.updateCaseSummary(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClaimParts', function() {
      it('should call updateClaimParts successfully', function(done) {
        //uncomment below and update the code to test updateClaimParts
        //instance.updateClaimParts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClaims', function() {
      it('should call updateClaims successfully', function(done) {
        //uncomment below and update the code to test updateClaims
        //instance.updateClaims(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCreditorMailingMatrix', function() {
      it('should call updateCreditorMailingMatrix successfully', function(done) {
        //uncomment below and update the code to test updateCreditorMailingMatrix
        //instance.updateCreditorMailingMatrix(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCreditors', function() {
      it('should call updateCreditors successfully', function(done) {
        //uncomment below and update the code to test updateCreditors
        //instance.updateCreditors(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDocketDocuments', function() {
      it('should call updateDocketDocuments successfully', function(done) {
        //uncomment below and update the code to test updateDocketDocuments
        //instance.updateDocketDocuments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDockets', function() {
      it('should call updateDockets successfully', function(done) {
        //uncomment below and update the code to test updateDockets
        //instance.updateDockets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateFilers', function() {
      it('should call updateFilers successfully', function(done) {
        //uncomment below and update the code to test updateFilers
        //instance.updateFilers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateHistory', function() {
      it('should call updateHistory successfully', function(done) {
        //uncomment below and update the code to test updateHistory
        //instance.updateHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateMenu', function() {
      it('should call updateMenu successfully', function(done) {
        //uncomment below and update the code to test updateMenu
        //instance.updateMenu(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNotice', function() {
      it('should call updateNotice successfully', function(done) {
        //uncomment below and update the code to test updateNotice
        //instance.updateNotice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateParties', function() {
      it('should call updateParties successfully', function(done) {
        //uncomment below and update the code to test updateParties
        //instance.updateParties(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePartyAliases', function() {
      it('should call updatePartyAliases successfully', function(done) {
        //uncomment below and update the code to test updatePartyAliases
        //instance.updatePartyAliases(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePendingStatus', function() {
      it('should call updatePendingStatus successfully', function(done) {
        //uncomment below and update the code to test updatePendingStatus
        //instance.updatePendingStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateRelatedTransactions', function() {
      it('should call updateRelatedTransactions successfully', function(done) {
        //uncomment below and update the code to test updateRelatedTransactions
        //instance.updateRelatedTransactions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSchedule', function() {
      it('should call updateSchedule successfully', function(done) {
        //uncomment below and update the code to test updateSchedule
        //instance.updateSchedule(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTrustees', function() {
      it('should call updateTrustees successfully', function(done) {
        //uncomment below and update the code to test updateTrustees
        //instance.updateTrustees(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
