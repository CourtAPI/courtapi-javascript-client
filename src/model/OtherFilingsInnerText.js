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
    define(['ApiClient', 'model/OtherFilingsInnerCase', 'model/OtherFilingsInnerDebtor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OtherFilingsInnerCase'), require('./OtherFilingsInnerDebtor'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.OtherFilingsInnerText = factory(root.CourtApi.ApiClient, root.CourtApi.OtherFilingsInnerCase, root.CourtApi.OtherFilingsInnerDebtor);
  }
}(this, function(ApiClient, OtherFilingsInnerCase, OtherFilingsInnerDebtor) {
  'use strict';




  /**
   * The OtherFilingsInnerText model module.
   * @module model/OtherFilingsInnerText
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>OtherFilingsInnerText</code>.
   * @alias module:model/OtherFilingsInnerText
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>OtherFilingsInnerText</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OtherFilingsInnerText} obj Optional instance to populate.
   * @return {module:model/OtherFilingsInnerText} The populated <code>OtherFilingsInnerText</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('case')) {
        obj['case'] = OtherFilingsInnerCase.constructFromObject(data['case']);
      }
      if (data.hasOwnProperty('debtor')) {
        obj['debtor'] = OtherFilingsInnerDebtor.constructFromObject(data['debtor']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OtherFilingsInnerCase} case
   */
  exports.prototype['case'] = undefined;
  /**
   * @member {module:model/OtherFilingsInnerDebtor} debtor
   */
  exports.prototype['debtor'] = undefined;



  return exports;
}));


