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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.PacerCaseLookupApi = factory(root.CourtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * PacerCaseLookup service.
   * @module api/PacerCaseLookupApi
   * @version 0.9.2
   */

  /**
   * Constructs a new PacerCaseLookupApi. 
   * @alias module:api/PacerCaseLookupApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the bankruptcyCaseReport operation.
     * @callback module:api/PacerCaseLookupApi~bankruptcyCaseReportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Local Court Bankruptcy Cases Report
     * Returns detailed information on matching cases.
     * @param {String} courtCode Court Code (must be a Bankruptcy Court)
     * @param {Object} opts Optional parameters
     * @param {String} opts.chapter Chapter
     * @param {String} opts.caseType Case Type
     * @param {module:model/String} opts.dateType Date Type
     * @param {String} opts.dateFrom Date From
     * @param {String} opts.dateTo Date To
     * @param {Boolean} opts.partyInfo Party information
     * @param {String} opts.assetNotice Asset Notice
     * @param {String} opts.natureOfDebt Nature of Debt
     * @param {String} opts.typeOfDebtor Type of Debtor
     * @param {String} opts.natureOfBusiness Nature of Business
     * @param {Boolean} opts.openCases Open cases
     * @param {Boolean} opts.closedCases Closed cases
     * @param {Boolean} opts.voluntary Voluntary
     * @param {Boolean} opts.involuntary Involuntary
     * @param {Boolean} opts.smallbusiness Small Business Cases
     * @param {Boolean} opts.proseonly Pro se cases only
     * @param {String} opts.maxCostCents Max Cost Cents
     * @param {module:api/PacerCaseLookupApi~bankruptcyCaseReportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.bankruptcyCaseReport = function(courtCode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'courtCode' is set
      if (courtCode === undefined || courtCode === null) {
        throw new Error("Missing the required parameter 'courtCode' when calling bankruptcyCaseReport");
      }


      var pathParams = {
        'court_code': courtCode
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'chapter': opts['chapter'],
        'case_type': opts['caseType'],
        'date_type': opts['dateType'],
        'date_from': opts['dateFrom'],
        'date_to': opts['dateTo'],
        'party_info': opts['partyInfo'],
        'asset_notice': opts['assetNotice'],
        'nature_of_debt': opts['natureOfDebt'],
        'type_of_debtor': opts['typeOfDebtor'],
        'nature_of_business': opts['natureOfBusiness'],
        'open_cases': opts['openCases'],
        'closed_cases': opts['closedCases'],
        'voluntary': opts['voluntary'],
        'involuntary': opts['involuntary'],
        'smallbusiness': opts['smallbusiness'],
        'proseonly': opts['proseonly'],
        'max_cost_cents': opts['maxCostCents']
      };

      var authNames = ['www-authenticate'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/courts/pacer/{court_code}/cases/report/bankruptcy', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the courtsPacerCourtCodeCasesReportCivilPost operation.
     * @callback module:api/PacerCaseLookupApi~courtsPacerCourtCodeCasesReportCivilPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Local Court Civil Cases Report
     * Local Court Civil Cases Report
     * @param {String} courtCode Court Code
     * @param {Object} opts Optional parameters
     * @param {String} opts.office Office
     * @param {module:model/String} opts.caseType Case Type
     * @param {String} opts.natureOfSuit Nature of Suit
     * @param {String} opts.cause Cause of Action
     * @param {String} opts.jurisdic jurisdiction
     * @param {String} opts.caseFlags Case flags
     * @param {String} opts.terminalDigit Terminal digit(s)
     * @param {Boolean} opts.openCases Open cases
     * @param {Boolean} opts.closedCases Closed cases
     * @param {String} opts.dateFrom Date From
     * @param {String} opts.dateTo Date To
     * @param {String} opts.maxCostCents Max Cost Cents
     * @param {module:api/PacerCaseLookupApi~courtsPacerCourtCodeCasesReportCivilPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.courtsPacerCourtCodeCasesReportCivilPost = function(courtCode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'courtCode' is set
      if (courtCode === undefined || courtCode === null) {
        throw new Error("Missing the required parameter 'courtCode' when calling courtsPacerCourtCodeCasesReportCivilPost");
      }


      var pathParams = {
        'court_code': courtCode
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'office': opts['office'],
        'case_type': opts['caseType'],
        'nature_of_suit': opts['natureOfSuit'],
        'cause': opts['cause'],
        'jurisdic': opts['jurisdic'],
        'case_flags': opts['caseFlags'],
        'terminal_digit': opts['terminalDigit'],
        'open_cases': opts['openCases'],
        'closed_cases': opts['closedCases'],
        'date_from': opts['dateFrom'],
        'date_to': opts['dateTo'],
        'max_cost_cents': opts['maxCostCents']
      };

      var authNames = ['www-authenticate'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/courts/pacer/{court_code}/cases/report/civil', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the courtsPacerCourtCodeCasesReportCriminalPost operation.
     * @callback module:api/PacerCaseLookupApi~courtsPacerCourtCodeCasesReportCriminalPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Local Court Criminal Cases Report
     * Local Court Criminal Cases Report
     * @param {String} courtCode Court Code
     * @param {Object} opts Optional parameters
     * @param {String} opts.office Office
     * @param {module:model/String} opts.caseType Case Type
     * @param {String} opts.caseFlags Case flags
     * @param {String} opts.citation Citation
     * @param {Boolean} opts.pendingCitations Pending Citations
     * @param {Boolean} opts.terminatedCitations Disposed Citations
     * @param {String} opts.dateFrom Date From
     * @param {String} opts.dateTo Date To
     * @param {Number} opts.terminalDigit Terminal digit(s)
     * @param {Boolean} opts.pendingDefendants Pending defendants
     * @param {Boolean} opts.terminatedDefendants Terminated defendants
     * @param {String} opts.maxCostCents Max Cost Cents
     * @param {module:api/PacerCaseLookupApi~courtsPacerCourtCodeCasesReportCriminalPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.courtsPacerCourtCodeCasesReportCriminalPost = function(courtCode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'courtCode' is set
      if (courtCode === undefined || courtCode === null) {
        throw new Error("Missing the required parameter 'courtCode' when calling courtsPacerCourtCodeCasesReportCriminalPost");
      }


      var pathParams = {
        'court_code': courtCode
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'office': opts['office'],
        'case_type': opts['caseType'],
        'case_flags': opts['caseFlags'],
        'citation': opts['citation'],
        'pending_citations': opts['pendingCitations'],
        'terminated_citations': opts['terminatedCitations'],
        'date_from': opts['dateFrom'],
        'date_to': opts['dateTo'],
        'terminal_digit': opts['terminalDigit'],
        'pending_defendants': opts['pendingDefendants'],
        'terminated_defendants': opts['terminatedDefendants'],
        'max_cost_cents': opts['maxCostCents']
      };

      var authNames = ['www-authenticate'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/courts/pacer/{court_code}/cases/report/criminal', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the searchCourtCases operation.
     * @callback module:api/PacerCaseLookupApi~searchCourtCasesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Local Court Case Search
     * Query Court for cases that match the specified filters.
     * @param {String} courtCode Court Code
     * @param {Object} opts Optional parameters
     * @param {String} opts.office Office
     * @param {String} opts.caseNo Case Number
     * @param {String} opts.lastBusinessName Last / Business Name
     * @param {String} opts.firstName First Name
     * @param {String} opts.middleName Middle Name
     * @param {Boolean} opts.partyExact Exact matches only
     * @param {module:model/String} opts.personType Person Type
     * @param {String} opts.ssntin SSN / ITIN
     * @param {Number} opts.taxIdEin Tax ID / EIN
     * @param {Boolean} opts.openCases Open cases
     * @param {Boolean} opts.closedCases Closed cases
     * @param {String} opts.filedFrom Filed From Date
     * @param {String} opts.filedTo Filed To Date
     * @param {String} opts.lastEntryFrom Last Entry From Date
     * @param {String} opts.lastEntryTo Last Entry To Date
     * @param {String} opts.nos Nature of Suit
     * @param {String} opts.causeOfAction Cause of Action
     * @param {module:api/PacerCaseLookupApi~searchCourtCasesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.searchCourtCases = function(courtCode, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'courtCode' is set
      if (courtCode === undefined || courtCode === null) {
        throw new Error("Missing the required parameter 'courtCode' when calling searchCourtCases");
      }


      var pathParams = {
        'court_code': courtCode
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'office': opts['office'],
        'case_no': opts['caseNo'],
        'last_business_name': opts['lastBusinessName'],
        'first_name': opts['firstName'],
        'middle_name': opts['middleName'],
        'party_exact': opts['partyExact'],
        'person_type': opts['personType'],
        'ssntin': opts['ssntin'],
        'tax_id_ein': opts['taxIdEin'],
        'open_cases': opts['openCases'],
        'closed_cases': opts['closedCases'],
        'filed_from': opts['filedFrom'],
        'filed_to': opts['filedTo'],
        'last_entry_from': opts['lastEntryFrom'],
        'last_entry_to': opts['lastEntryTo'],
        'nos': opts['nos'],
        'cause_of_action': opts['causeOfAction']
      };

      var authNames = ['www-authenticate'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/courts/pacer/{court_code}/cases/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));