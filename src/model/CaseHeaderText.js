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
    root.CourtApi.CaseHeaderText = factory(root.CourtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CaseHeaderText model module.
   * @module model/CaseHeaderText
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>CaseHeaderText</code>.
   * @alias module:model/CaseHeaderText
   * @class
   */
  var exports = function() {
    var _this = this;





























  };

  /**
   * Constructs a <code>CaseHeaderText</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CaseHeaderText} obj Optional instance to populate.
   * @return {module:model/CaseHeaderText} The populated <code>CaseHeaderText</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('case_uuid')) {
        obj['case_uuid'] = ApiClient.convertToType(data['case_uuid'], 'String');
      }
      if (data.hasOwnProperty('liabilities')) {
        obj['liabilities'] = ApiClient.convertToType(data['liabilities'], 'String');
      }
      if (data.hasOwnProperty('date_discharged')) {
        obj['date_discharged'] = ApiClient.convertToType(data['date_discharged'], 'String');
      }
      if (data.hasOwnProperty('has_asset')) {
        obj['has_asset'] = ApiClient.convertToType(data['has_asset'], 'String');
      }
      if (data.hasOwnProperty('court_code')) {
        obj['court_code'] = ApiClient.convertToType(data['court_code'], 'String');
      }
      if (data.hasOwnProperty('date_closed')) {
        obj['date_closed'] = ApiClient.convertToType(data['date_closed'], 'String');
      }
      if (data.hasOwnProperty('date_of_last_filing')) {
        obj['date_of_last_filing'] = ApiClient.convertToType(data['date_of_last_filing'], 'String');
      }
      if (data.hasOwnProperty('case_no')) {
        obj['case_no'] = ApiClient.convertToType(data['case_no'], 'String');
      }
      if (data.hasOwnProperty('website')) {
        obj['website'] = ApiClient.convertToType(data['website'], 'String');
      }
      if (data.hasOwnProperty('judge_name')) {
        obj['judge_name'] = ApiClient.convertToType(data['judge_name'], 'String');
      }
      if (data.hasOwnProperty('date_filed')) {
        obj['date_filed'] = ApiClient.convertToType(data['date_filed'], 'String');
      }
      if (data.hasOwnProperty('industry')) {
        obj['industry'] = ApiClient.convertToType(data['industry'], 'String');
      }
      if (data.hasOwnProperty('petition_type')) {
        obj['petition_type'] = ApiClient.convertToType(data['petition_type'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
      }
      if (data.hasOwnProperty('disposition')) {
        obj['disposition'] = ApiClient.convertToType(data['disposition'], 'String');
      }
      if (data.hasOwnProperty('assets')) {
        obj['assets'] = ApiClient.convertToType(data['assets'], 'String');
      }
      if (data.hasOwnProperty('case_title')) {
        obj['case_title'] = ApiClient.convertToType(data['case_title'], 'String');
      }
      if (data.hasOwnProperty('chapter')) {
        obj['chapter'] = ApiClient.convertToType(data['chapter'], 'String');
      }
      if (data.hasOwnProperty('plan_confirmed')) {
        obj['plan_confirmed'] = ApiClient.convertToType(data['plan_confirmed'], 'String');
      }
      if (data.hasOwnProperty('ch11_type')) {
        obj['ch11_type'] = ApiClient.convertToType(data['ch11_type'], 'String');
      }
      if (data.hasOwnProperty('case_type')) {
        obj['case_type'] = ApiClient.convertToType(data['case_type'], 'String');
      }
      if (data.hasOwnProperty('assigned_to')) {
        obj['assigned_to'] = ApiClient.convertToType(data['assigned_to'], 'String');
      }
      if (data.hasOwnProperty('referred_to')) {
        obj['referred_to'] = ApiClient.convertToType(data['referred_to'], 'String');
      }
      if (data.hasOwnProperty('cause')) {
        obj['cause'] = ApiClient.convertToType(data['cause'], 'String');
      }
      if (data.hasOwnProperty('date_terminated')) {
        obj['date_terminated'] = ApiClient.convertToType(data['date_terminated'], 'String');
      }
      if (data.hasOwnProperty('jurisdiction')) {
        obj['jurisdiction'] = ApiClient.convertToType(data['jurisdiction'], 'String');
      }
      if (data.hasOwnProperty('jury_demand')) {
        obj['jury_demand'] = ApiClient.convertToType(data['jury_demand'], 'String');
      }
      if (data.hasOwnProperty('nature_of_suit_code')) {
        obj['nature_of_suit_code'] = ApiClient.convertToType(data['nature_of_suit_code'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} case_uuid
   */
  exports.prototype['case_uuid'] = undefined;
  /**
   * @member {String} liabilities
   */
  exports.prototype['liabilities'] = undefined;
  /**
   * @member {String} date_discharged
   */
  exports.prototype['date_discharged'] = undefined;
  /**
   * @member {String} has_asset
   */
  exports.prototype['has_asset'] = undefined;
  /**
   * @member {String} court_code
   */
  exports.prototype['court_code'] = undefined;
  /**
   * @member {String} date_closed
   */
  exports.prototype['date_closed'] = undefined;
  /**
   * @member {String} date_of_last_filing
   */
  exports.prototype['date_of_last_filing'] = undefined;
  /**
   * @member {String} case_no
   */
  exports.prototype['case_no'] = undefined;
  /**
   * @member {String} website
   */
  exports.prototype['website'] = undefined;
  /**
   * @member {String} judge_name
   */
  exports.prototype['judge_name'] = undefined;
  /**
   * @member {String} date_filed
   */
  exports.prototype['date_filed'] = undefined;
  /**
   * @member {String} industry
   */
  exports.prototype['industry'] = undefined;
  /**
   * @member {String} petition_type
   */
  exports.prototype['petition_type'] = undefined;
  /**
   * @member {String} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * @member {String} disposition
   */
  exports.prototype['disposition'] = undefined;
  /**
   * @member {String} assets
   */
  exports.prototype['assets'] = undefined;
  /**
   * @member {String} case_title
   */
  exports.prototype['case_title'] = undefined;
  /**
   * @member {String} chapter
   */
  exports.prototype['chapter'] = undefined;
  /**
   * @member {String} plan_confirmed
   */
  exports.prototype['plan_confirmed'] = undefined;
  /**
   * @member {String} ch11_type
   */
  exports.prototype['ch11_type'] = undefined;
  /**
   * @member {String} case_type
   */
  exports.prototype['case_type'] = undefined;
  /**
   * @member {String} assigned_to
   */
  exports.prototype['assigned_to'] = undefined;
  /**
   * @member {String} referred_to
   */
  exports.prototype['referred_to'] = undefined;
  /**
   * @member {String} cause
   */
  exports.prototype['cause'] = undefined;
  /**
   * @member {String} date_terminated
   */
  exports.prototype['date_terminated'] = undefined;
  /**
   * @member {String} jurisdiction
   */
  exports.prototype['jurisdiction'] = undefined;
  /**
   * @member {String} jury_demand
   */
  exports.prototype['jury_demand'] = undefined;
  /**
   * @member {String} nature_of_suit_code
   */
  exports.prototype['nature_of_suit_code'] = undefined;



  return exports;
}));


