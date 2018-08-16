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
    define(['ApiClient', 'model/CaseMeta', 'model/InlineResponse20010Queries', 'model/InlineResponse2003Items'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CaseMeta'), require('./InlineResponse20010Queries'), require('./InlineResponse2003Items'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.InlineResponse20010 = factory(root.CourtApi.ApiClient, root.CourtApi.CaseMeta, root.CourtApi.InlineResponse20010Queries, root.CourtApi.InlineResponse2003Items);
  }
}(this, function(ApiClient, CaseMeta, InlineResponse20010Queries, InlineResponse2003Items) {
  'use strict';




  /**
   * The InlineResponse20010 model module.
   * @module model/InlineResponse20010
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>InlineResponse20010</code>.
   * @alias module:model/InlineResponse20010
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>InlineResponse20010</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20010} obj Optional instance to populate.
   * @return {module:model/InlineResponse20010} The populated <code>InlineResponse20010</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('case')) {
        obj['case'] = CaseMeta.constructFromObject(data['case']);
      }
      if (data.hasOwnProperty('forms')) {
        obj['forms'] = ApiClient.convertToType(data['forms'], Object);
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = InlineResponse2003Items.constructFromObject(data['items']);
      }
      if (data.hasOwnProperty('queries')) {
        obj['queries'] = InlineResponse20010Queries.constructFromObject(data['queries']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CaseMeta} case
   */
  exports.prototype['case'] = undefined;
  /**
   * @member {Object} forms
   */
  exports.prototype['forms'] = undefined;
  /**
   * @member {module:model/InlineResponse2003Items} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {module:model/InlineResponse20010Queries} queries
   */
  exports.prototype['queries'] = undefined;



  return exports;
}));


