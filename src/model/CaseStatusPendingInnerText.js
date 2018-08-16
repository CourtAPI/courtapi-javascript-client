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
    root.CourtApi.CaseStatusPendingInnerText = factory(root.CourtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CaseStatusPendingInnerText model module.
   * @module model/CaseStatusPendingInnerText
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>CaseStatusPendingInnerText</code>.
   * @alias module:model/CaseStatusPendingInnerText
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>CaseStatusPendingInnerText</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CaseStatusPendingInnerText} obj Optional instance to populate.
   * @return {module:model/CaseStatusPendingInnerText} The populated <code>CaseStatusPendingInnerText</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('docket_related_uri')) {
        obj['docket_related_uri'] = ApiClient.convertToType(data['docket_related_uri'], 'String');
      }
      if (data.hasOwnProperty('docket_no')) {
        obj['docket_no'] = ApiClient.convertToType(data['docket_no'], 'String');
      }
      if (data.hasOwnProperty('status_set_by')) {
        obj['status_set_by'] = ApiClient.convertToType(data['status_set_by'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('date_status_begin')) {
        obj['date_status_begin'] = ApiClient.convertToType(data['date_status_begin'], 'String');
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'String');
      }
      if (data.hasOwnProperty('time_in_status')) {
        obj['time_in_status'] = ApiClient.convertToType(data['time_in_status'], 'String');
      }
      if (data.hasOwnProperty('docket_uri')) {
        obj['docket_uri'] = ApiClient.convertToType(data['docket_uri'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} docket_related_uri
   */
  exports.prototype['docket_related_uri'] = undefined;
  /**
   * @member {String} docket_no
   */
  exports.prototype['docket_no'] = undefined;
  /**
   * @member {String} status_set_by
   */
  exports.prototype['status_set_by'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} date_status_begin
   */
  exports.prototype['date_status_begin'] = undefined;
  /**
   * @member {String} modified
   */
  exports.prototype['modified'] = undefined;
  /**
   * @member {String} time_in_status
   */
  exports.prototype['time_in_status'] = undefined;
  /**
   * @member {String} docket_uri
   */
  exports.prototype['docket_uri'] = undefined;



  return exports;
}));


