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
    root.CourtApi.InlineResponse20020ContentTextInfo = factory(root.CourtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponse20020ContentTextInfo model module.
   * @module model/InlineResponse20020ContentTextInfo
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>InlineResponse20020ContentTextInfo</code>.
   * @alias module:model/InlineResponse20020ContentTextInfo
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse20020ContentTextInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20020ContentTextInfo} obj Optional instance to populate.
   * @return {module:model/InlineResponse20020ContentTextInfo} The populated <code>InlineResponse20020ContentTextInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('claim_no')) {
        obj['claim_no'] = ApiClient.convertToType(data['claim_no'], 'Number');
      }
      if (data.hasOwnProperty('original_entered_date')) {
        obj['original_entered_date'] = ApiClient.convertToType(data['original_entered_date'], 'String');
      }
      if (data.hasOwnProperty('original_filed_date')) {
        obj['original_filed_date'] = ApiClient.convertToType(data['original_filed_date'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} claim_no
   */
  exports.prototype['claim_no'] = undefined;
  /**
   * @member {String} original_entered_date
   */
  exports.prototype['original_entered_date'] = undefined;
  /**
   * @member {String} original_filed_date
   */
  exports.prototype['original_filed_date'] = undefined;



  return exports;
}));


