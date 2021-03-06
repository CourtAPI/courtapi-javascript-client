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
    define(['ApiClient', 'model/InlineResponse20017ItemsText', 'model/InlineResponse2001QueriesMenuMeta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20017ItemsText'), require('./InlineResponse2001QueriesMenuMeta'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.InlineResponse20017ItemsHeaders = factory(root.CourtApi.ApiClient, root.CourtApi.InlineResponse20017ItemsText, root.CourtApi.InlineResponse2001QueriesMenuMeta);
  }
}(this, function(ApiClient, InlineResponse20017ItemsText, InlineResponse2001QueriesMenuMeta) {
  'use strict';




  /**
   * The InlineResponse20017ItemsHeaders model module.
   * @module model/InlineResponse20017ItemsHeaders
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>InlineResponse20017ItemsHeaders</code>.
   * @alias module:model/InlineResponse20017ItemsHeaders
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse20017ItemsHeaders</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20017ItemsHeaders} obj Optional instance to populate.
   * @return {module:model/InlineResponse20017ItemsHeaders} The populated <code>InlineResponse20017ItemsHeaders</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('meta')) {
        obj['meta'] = InlineResponse2001QueriesMenuMeta.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = InlineResponse20017ItemsText.constructFromObject(data['text']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2001QueriesMenuMeta} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {module:model/InlineResponse20017ItemsText} text
   */
  exports.prototype['text'] = undefined;



  return exports;
}));


