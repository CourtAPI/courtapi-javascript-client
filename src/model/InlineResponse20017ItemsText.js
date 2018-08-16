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
    root.CourtApi.InlineResponse20017ItemsText = factory(root.CourtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse20017ItemsText model module.
   * @module model/InlineResponse20017ItemsText
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>InlineResponse20017ItemsText</code>.
   * @alias module:model/InlineResponse20017ItemsText
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>InlineResponse20017ItemsText</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20017ItemsText} obj Optional instance to populate.
   * @return {module:model/InlineResponse20017ItemsText} The populated <code>InlineResponse20017ItemsText</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('assigned_to')) {
        obj['assigned_to'] = ApiClient.convertToType(data['assigned_to'], 'String');
      }
      if (data.hasOwnProperty('case_uuid')) {
        obj['case_uuid'] = ApiClient.convertToType(data['case_uuid'], 'String');
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
      if (data.hasOwnProperty('referred_to')) {
        obj['referred_to'] = ApiClient.convertToType(data['referred_to'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} assigned_to
   */
  exports.prototype['assigned_to'] = undefined;
  /**
   * @member {String} case_uuid
   */
  exports.prototype['case_uuid'] = undefined;
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
  /**
   * @member {String} referred_to
   */
  exports.prototype['referred_to'] = undefined;



  return exports;
}));


