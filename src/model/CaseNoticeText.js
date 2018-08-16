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
    root.CourtApi.CaseNoticeText = factory(root.CourtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CaseNoticeText model module.
   * @module model/CaseNoticeText
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>CaseNoticeText</code>.
   * @alias module:model/CaseNoticeText
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>CaseNoticeText</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CaseNoticeText} obj Optional instance to populate.
   * @return {module:model/CaseNoticeText} The populated <code>CaseNoticeText</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('html')) {
        obj['html'] = ApiClient.convertToType(data['html'], 'String');
      }
    }
    return obj;
  }

  /**
   * Sanitized HTML from PACER
   * @member {String} html
   */
  exports.prototype['html'] = undefined;



  return exports;
}));


