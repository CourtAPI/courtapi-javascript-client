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
    define(['ApiClient', 'model/CaseAttorneysInnerText'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CaseAttorneysInnerText'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.CaseAttorneysInner = factory(root.CourtApi.ApiClient, root.CourtApi.CaseAttorneysInnerText);
  }
}(this, function(ApiClient, CaseAttorneysInnerText) {
  'use strict';




  /**
   * The CaseAttorneysInner model module.
   * @module model/CaseAttorneysInner
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>CaseAttorneysInner</code>.
   * @alias module:model/CaseAttorneysInner
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CaseAttorneysInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CaseAttorneysInner} obj Optional instance to populate.
   * @return {module:model/CaseAttorneysInner} The populated <code>CaseAttorneysInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], [CaseAttorneysInnerText]);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ApiClient.convertToType(data['meta'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CaseAttorneysInnerText>} text
   */
  exports.prototype['text'] = undefined;
  /**
   * Various metadata like time modified, case_uuid, and bunch of unused legacy fieleds
   * @member {Object} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));


