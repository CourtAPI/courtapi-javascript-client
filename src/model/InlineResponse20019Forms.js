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
    root.CourtApi.InlineResponse20019Forms = factory(root.CourtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse20019Forms model module.
   * @module model/InlineResponse20019Forms
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>InlineResponse20019Forms</code>.
   * @alias module:model/InlineResponse20019Forms
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>InlineResponse20019Forms</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20019Forms} obj Optional instance to populate.
   * @return {module:model/InlineResponse20019Forms} The populated <code>InlineResponse20019Forms</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('case_code')) {
        obj['case_code'] = ApiClient.convertToType(data['case_code'], 'String');
      }
      if (data.hasOwnProperty('creditor_name')) {
        obj['creditor_name'] = ApiClient.convertToType(data['creditor_name'], 'String');
      }
      if (data.hasOwnProperty('creditor_no')) {
        obj['creditor_no'] = ApiClient.convertToType(data['creditor_no'], 'Number');
      }
      if (data.hasOwnProperty('creditor_type')) {
        obj['creditor_type'] = ApiClient.convertToType(data['creditor_type'], 'String');
      }
      if (data.hasOwnProperty('date_from')) {
        obj['date_from'] = ApiClient.convertToType(data['date_from'], 'String');
      }
      if (data.hasOwnProperty('date_to')) {
        obj['date_to'] = ApiClient.convertToType(data['date_to'], 'String');
      }
      if (data.hasOwnProperty('doc_from')) {
        obj['doc_from'] = ApiClient.convertToType(data['doc_from'], 'Number');
      }
      if (data.hasOwnProperty('doc_to')) {
        obj['doc_to'] = ApiClient.convertToType(data['doc_to'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} case_code
   */
  exports.prototype['case_code'] = undefined;
  /**
   * @member {String} creditor_name
   */
  exports.prototype['creditor_name'] = undefined;
  /**
   * @member {Number} creditor_no
   */
  exports.prototype['creditor_no'] = undefined;
  /**
   * @member {String} creditor_type
   */
  exports.prototype['creditor_type'] = undefined;
  /**
   * @member {String} date_from
   */
  exports.prototype['date_from'] = undefined;
  /**
   * @member {String} date_to
   */
  exports.prototype['date_to'] = undefined;
  /**
   * @member {Number} doc_from
   */
  exports.prototype['doc_from'] = undefined;
  /**
   * @member {Number} doc_to
   */
  exports.prototype['doc_to'] = undefined;



  return exports;
}));


