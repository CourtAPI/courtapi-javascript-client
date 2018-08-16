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
    define(['ApiClient', 'model/CaseCreditorMailingMeta', 'model/CaseCreditorMailingText'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CaseCreditorMailingMeta'), require('./CaseCreditorMailingText'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.CaseCreditorMailing = factory(root.CourtApi.ApiClient, root.CourtApi.CaseCreditorMailingMeta, root.CourtApi.CaseCreditorMailingText);
  }
}(this, function(ApiClient, CaseCreditorMailingMeta, CaseCreditorMailingText) {
  'use strict';




  /**
   * The CaseCreditorMailing model module.
   * @module model/CaseCreditorMailing
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>CaseCreditorMailing</code>.
   * @alias module:model/CaseCreditorMailing
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CaseCreditorMailing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CaseCreditorMailing} obj Optional instance to populate.
   * @return {module:model/CaseCreditorMailing} The populated <code>CaseCreditorMailing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('text')) {
        obj['text'] = CaseCreditorMailingText.constructFromObject(data['text']);
      }
      if (data.hasOwnProperty('meta')) {
        obj['meta'] = CaseCreditorMailingMeta.constructFromObject(data['meta']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CaseCreditorMailingText} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {module:model/CaseCreditorMailingMeta} meta
   */
  exports.prototype['meta'] = undefined;



  return exports;
}));


