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
    root.CourtApi.InlineResponse2001QueriesMenuMeta = factory(root.CourtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse2001QueriesMenuMeta model module.
   * @module model/InlineResponse2001QueriesMenuMeta
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>InlineResponse2001QueriesMenuMeta</code>.
   * @alias module:model/InlineResponse2001QueriesMenuMeta
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse2001QueriesMenuMeta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001QueriesMenuMeta} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001QueriesMenuMeta} The populated <code>InlineResponse2001QueriesMenuMeta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('case_uuid')) {
        obj['case_uuid'] = ApiClient.convertToType(data['case_uuid'], 'String');
      }
      if (data.hasOwnProperty('filename')) {
        obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
      }
      if (data.hasOwnProperty('timestamp')) {
        obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} case_uuid
   */
  exports.prototype['case_uuid'] = undefined;
  /**
   * @member {String} filename
   */
  exports.prototype['filename'] = undefined;
  /**
   * @member {String} timestamp
   */
  exports.prototype['timestamp'] = undefined;



  return exports;
}));

