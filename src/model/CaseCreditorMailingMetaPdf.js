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
    root.CourtApi.CaseCreditorMailingMetaPdf = factory(root.CourtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CaseCreditorMailingMetaPdf model module.
   * @module model/CaseCreditorMailingMetaPdf
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>CaseCreditorMailingMetaPdf</code>.
   * @alias module:model/CaseCreditorMailingMetaPdf
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CaseCreditorMailingMetaPdf</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CaseCreditorMailingMetaPdf} obj Optional instance to populate.
   * @return {module:model/CaseCreditorMailingMetaPdf} The populated <code>CaseCreditorMailingMetaPdf</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('friendly_name')) {
        obj['friendly_name'] = ApiClient.convertToType(data['friendly_name'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} friendly_name
   */
  exports.prototype['friendly_name'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} timestamp
   */
  exports.prototype['timestamp'] = undefined;
  /**
   * @member {String} link
   */
  exports.prototype['link'] = undefined;



  return exports;
}));


