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
    define(['ApiClient', 'model/CaseAttorneysInner'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CaseAttorneysInner'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.CaseAttorneys = factory(root.CourtApi.ApiClient, root.CourtApi.CaseAttorneysInner);
  }
}(this, function(ApiClient, CaseAttorneysInner) {
  'use strict';




  /**
   * The CaseAttorneys model module.
   * @module model/CaseAttorneys
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>CaseAttorneys</code>.
   * @alias module:model/CaseAttorneys
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>CaseAttorneys</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CaseAttorneys} obj Optional instance to populate.
   * @return {module:model/CaseAttorneys} The populated <code>CaseAttorneys</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'CaseAttorneysInner');

    }
    return obj;
  }




  return exports;
}));

