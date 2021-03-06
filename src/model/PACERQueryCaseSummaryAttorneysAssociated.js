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
    root.CourtApi.PACERQueryCaseSummaryAttorneysAssociated = factory(root.CourtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PACERQueryCaseSummaryAttorneysAssociated model module.
   * @module model/PACERQueryCaseSummaryAttorneysAssociated
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>PACERQueryCaseSummaryAttorneysAssociated</code>.
   * @alias module:model/PACERQueryCaseSummaryAttorneysAssociated
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PACERQueryCaseSummaryAttorneysAssociated</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PACERQueryCaseSummaryAttorneysAssociated} obj Optional instance to populate.
   * @return {module:model/PACERQueryCaseSummaryAttorneysAssociated} The populated <code>PACERQueryCaseSummaryAttorneysAssociated</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} role
   */
  exports.prototype['role'] = undefined;



  return exports;
}));


