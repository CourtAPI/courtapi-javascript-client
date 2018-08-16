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
    define(['ApiClient', 'model/CaseMeta', 'model/InlineResponse2006Items', 'model/InlineResponse2006Queries'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CaseMeta'), require('./InlineResponse2006Items'), require('./InlineResponse2006Queries'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.InlineResponse2006 = factory(root.CourtApi.ApiClient, root.CourtApi.CaseMeta, root.CourtApi.InlineResponse2006Items, root.CourtApi.InlineResponse2006Queries);
  }
}(this, function(ApiClient, CaseMeta, InlineResponse2006Items, InlineResponse2006Queries) {
  'use strict';




  /**
   * The InlineResponse2006 model module.
   * @module model/InlineResponse2006
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>InlineResponse2006</code>.
   * @alias module:model/InlineResponse2006
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2006} obj Optional instance to populate.
   * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
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
        obj['items'] = InlineResponse2006Items.constructFromObject(data['items']);
      }
      if (data.hasOwnProperty('queries')) {
        obj['queries'] = InlineResponse2006Queries.constructFromObject(data['queries']);
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
   * @member {module:model/InlineResponse2006Items} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {module:model/InlineResponse2006Queries} queries
   */
  exports.prototype['queries'] = undefined;



  return exports;
}));

