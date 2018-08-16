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
    define(['ApiClient', 'model/NCLConfigPages', 'model/NCLConfigSort'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NCLConfigPages'), require('./NCLConfigSort'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.NCLConfig = factory(root.CourtApi.ApiClient, root.CourtApi.NCLConfigPages, root.CourtApi.NCLConfigSort);
  }
}(this, function(ApiClient, NCLConfigPages, NCLConfigSort) {
  'use strict';




  /**
   * The NCLConfig model module.
   * @module model/NCLConfig
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>NCLConfig</code>.
   * @alias module:model/NCLConfig
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>NCLConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NCLConfig} obj Optional instance to populate.
   * @return {module:model/NCLConfig} The populated <code>NCLConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pages')) {
        obj['pages'] = NCLConfigPages.constructFromObject(data['pages']);
      }
      if (data.hasOwnProperty('search_id')) {
        obj['search_id'] = ApiClient.convertToType(data['search_id'], 'String');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = NCLConfigSort.constructFromObject(data['sort']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/NCLConfigPages} pages
   */
  exports.prototype['pages'] = undefined;
  /**
   * @member {String} search_id
   */
  exports.prototype['search_id'] = undefined;
  /**
   * @member {module:model/NCLConfigSort} sort
   */
  exports.prototype['sort'] = undefined;



  return exports;
}));


