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
    define(['ApiClient', 'model/InlineResponse2007QueriesFilers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2007QueriesFilers'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.InlineResponse2007Queries = factory(root.CourtApi.ApiClient, root.CourtApi.InlineResponse2007QueriesFilers);
  }
}(this, function(ApiClient, InlineResponse2007QueriesFilers) {
  'use strict';




  /**
   * The InlineResponse2007Queries model module.
   * @module model/InlineResponse2007Queries
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>InlineResponse2007Queries</code>.
   * @alias module:model/InlineResponse2007Queries
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse2007Queries</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2007Queries} obj Optional instance to populate.
   * @return {module:model/InlineResponse2007Queries} The populated <code>InlineResponse2007Queries</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('filers')) {
        obj['filers'] = InlineResponse2007QueriesFilers.constructFromObject(data['filers']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2007QueriesFilers} filers
   */
  exports.prototype['filers'] = undefined;



  return exports;
}));


