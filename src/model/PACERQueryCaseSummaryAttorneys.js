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
    define(['ApiClient', 'model/InlineResponse2001QueriesMenuMeta', 'model/PACERQueryCaseSummaryAttorneysText'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2001QueriesMenuMeta'), require('./PACERQueryCaseSummaryAttorneysText'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.PACERQueryCaseSummaryAttorneys = factory(root.CourtApi.ApiClient, root.CourtApi.InlineResponse2001QueriesMenuMeta, root.CourtApi.PACERQueryCaseSummaryAttorneysText);
  }
}(this, function(ApiClient, InlineResponse2001QueriesMenuMeta, PACERQueryCaseSummaryAttorneysText) {
  'use strict';




  /**
   * The PACERQueryCaseSummaryAttorneys model module.
   * @module model/PACERQueryCaseSummaryAttorneys
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>PACERQueryCaseSummaryAttorneys</code>.
   * @alias module:model/PACERQueryCaseSummaryAttorneys
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PACERQueryCaseSummaryAttorneys</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PACERQueryCaseSummaryAttorneys} obj Optional instance to populate.
   * @return {module:model/PACERQueryCaseSummaryAttorneys} The populated <code>PACERQueryCaseSummaryAttorneys</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], [PACERQueryCaseSummaryAttorneysText]);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = InlineResponse2001QueriesMenuMeta.constructFromObject(data['meta']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PACERQueryCaseSummaryAttorneysText>} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {module:model/InlineResponse2001QueriesMenuMeta} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));

