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
    define(['ApiClient', 'model/InlineResponse2001QueriesMenuMeta', 'model/InlineResponse2009QueriesText'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2001QueriesMenuMeta'), require('./InlineResponse2009QueriesText'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.InlineResponse2009QueriesStatusPending = factory(root.CourtApi.ApiClient, root.CourtApi.InlineResponse2001QueriesMenuMeta, root.CourtApi.InlineResponse2009QueriesText);
  }
}(this, function(ApiClient, InlineResponse2001QueriesMenuMeta, InlineResponse2009QueriesText) {
  'use strict';




  /**
   * The InlineResponse2009QueriesStatusPending model module.
   * @module model/InlineResponse2009QueriesStatusPending
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>InlineResponse2009QueriesStatusPending</code>.
   * @alias module:model/InlineResponse2009QueriesStatusPending
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse2009QueriesStatusPending</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2009QueriesStatusPending} obj Optional instance to populate.
   * @return {module:model/InlineResponse2009QueriesStatusPending} The populated <code>InlineResponse2009QueriesStatusPending</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('meta')) {
        obj['meta'] = InlineResponse2001QueriesMenuMeta.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], [InlineResponse2009QueriesText]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2001QueriesMenuMeta} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponse2009QueriesText>} text
   */
  exports.prototype['text'] = undefined;



  return exports;
}));


