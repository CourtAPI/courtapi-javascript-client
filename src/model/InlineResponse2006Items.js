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
    define(['ApiClient', 'model/InlineResponse2006ItemsAttorneys', 'model/PACERQueryCaseHeader', 'model/PACERQueryReceipt'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2006ItemsAttorneys'), require('./PACERQueryCaseHeader'), require('./PACERQueryReceipt'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.InlineResponse2006Items = factory(root.CourtApi.ApiClient, root.CourtApi.InlineResponse2006ItemsAttorneys, root.CourtApi.PACERQueryCaseHeader, root.CourtApi.PACERQueryReceipt);
  }
}(this, function(ApiClient, InlineResponse2006ItemsAttorneys, PACERQueryCaseHeader, PACERQueryReceipt) {
  'use strict';




  /**
   * The InlineResponse2006Items model module.
   * @module model/InlineResponse2006Items
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>InlineResponse2006Items</code>.
   * @alias module:model/InlineResponse2006Items
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InlineResponse2006Items</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2006Items} obj Optional instance to populate.
   * @return {module:model/InlineResponse2006Items} The populated <code>InlineResponse2006Items</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('headers')) {
        obj['headers'] = ApiClient.convertToType(data['headers'], [PACERQueryCaseHeader]);
      }
      if (data.hasOwnProperty('receipts')) {
        obj['receipts'] = ApiClient.convertToType(data['receipts'], [PACERQueryReceipt]);
      }
      if (data.hasOwnProperty('attorneys')) {
        obj['attorneys'] = ApiClient.convertToType(data['attorneys'], [InlineResponse2006ItemsAttorneys]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PACERQueryCaseHeader>} headers
   */
  exports.prototype['headers'] = undefined;
  /**
   * @member {Array.<module:model/PACERQueryReceipt>} receipts
   */
  exports.prototype['receipts'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponse2006ItemsAttorneys>} attorneys
   */
  exports.prototype['attorneys'] = undefined;



  return exports;
}));


