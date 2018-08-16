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
    define(['ApiClient', 'model/ClaimEntryMeta', 'model/ClaimEntryText'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClaimEntryMeta'), require('./ClaimEntryText'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.ClaimEntry = factory(root.CourtApi.ApiClient, root.CourtApi.ClaimEntryMeta, root.CourtApi.ClaimEntryText);
  }
}(this, function(ApiClient, ClaimEntryMeta, ClaimEntryText) {
  'use strict';




  /**
   * The ClaimEntry model module.
   * @module model/ClaimEntry
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>ClaimEntry</code>.
   * @alias module:model/ClaimEntry
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ClaimEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClaimEntry} obj Optional instance to populate.
   * @return {module:model/ClaimEntry} The populated <code>ClaimEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('meta')) {
        obj['meta'] = ClaimEntryMeta.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ClaimEntryText.constructFromObject(data['text']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ClaimEntryMeta} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {module:model/ClaimEntryText} text
   */
  exports.prototype['text'] = undefined;



  return exports;
}));

