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
    root.CourtApi.InlineResponse20014ItemsHistory = factory(root.CourtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse20014ItemsHistory model module.
   * @module model/InlineResponse20014ItemsHistory
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>InlineResponse20014ItemsHistory</code>.
   * @alias module:model/InlineResponse20014ItemsHistory
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>InlineResponse20014ItemsHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20014ItemsHistory} obj Optional instance to populate.
   * @return {module:model/InlineResponse20014ItemsHistory} The populated <code>InlineResponse20014ItemsHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('case_uuid')) {
        obj['case_uuid'] = ApiClient.convertToType(data['case_uuid'], 'String');
      }
      if (data.hasOwnProperty('date_entered')) {
        obj['date_entered'] = ApiClient.convertToType(data['date_entered'], 'String');
      }
      if (data.hasOwnProperty('date_filed')) {
        obj['date_filed'] = ApiClient.convertToType(data['date_filed'], 'String');
      }
      if (data.hasOwnProperty('date_terminated')) {
        obj['date_terminated'] = ApiClient.convertToType(data['date_terminated'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('description_uri')) {
        obj['description_uri'] = ApiClient.convertToType(data['description_uri'], 'String');
      }
      if (data.hasOwnProperty('docket_no')) {
        obj['docket_no'] = ApiClient.convertToType(data['docket_no'], 'String');
      }
      if (data.hasOwnProperty('docket_seq')) {
        obj['docket_seq'] = ApiClient.convertToType(data['docket_seq'], 'String');
      }
      if (data.hasOwnProperty('docket_uri')) {
        obj['docket_uri'] = ApiClient.convertToType(data['docket_uri'], 'String');
      }
      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('order_docket_no')) {
        obj['order_docket_no'] = ApiClient.convertToType(data['order_docket_no'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} case_uuid
   */
  exports.prototype['case_uuid'] = undefined;
  /**
   * @member {String} date_entered
   */
  exports.prototype['date_entered'] = undefined;
  /**
   * @member {String} date_filed
   */
  exports.prototype['date_filed'] = undefined;
  /**
   * @member {String} date_terminated
   */
  exports.prototype['date_terminated'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} description_uri
   */
  exports.prototype['description_uri'] = undefined;
  /**
   * @member {String} docket_no
   */
  exports.prototype['docket_no'] = undefined;
  /**
   * @member {String} docket_seq
   */
  exports.prototype['docket_seq'] = undefined;
  /**
   * @member {String} docket_uri
   */
  exports.prototype['docket_uri'] = undefined;
  /**
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * @member {String} order_docket_no
   */
  exports.prototype['order_docket_no'] = undefined;
  /**
   * @member {String} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;



  return exports;
}));

