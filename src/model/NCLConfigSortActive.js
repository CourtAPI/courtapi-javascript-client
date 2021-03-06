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
    root.CourtApi.NCLConfigSortActive = factory(root.CourtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NCLConfigSortActive model module.
   * @module model/NCLConfigSortActive
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>NCLConfigSortActive</code>.
   * @alias module:model/NCLConfigSortActive
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>NCLConfigSortActive</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NCLConfigSortActive} obj Optional instance to populate.
   * @return {module:model/NCLConfigSortActive} The populated <code>NCLConfigSortActive</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('field')) {
        obj['field'] = ApiClient.convertToType(data['field'], 'String');
      }
      if (data.hasOwnProperty('is_reverse')) {
        obj['is_reverse'] = ApiClient.convertToType(data['is_reverse'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} field
   */
  exports.prototype['field'] = undefined;
  /**
   * @member {Boolean} is_reverse
   */
  exports.prototype['is_reverse'] = undefined;



  return exports;
}));


