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
    define(['ApiClient', 'model/InlineResponse20020ContentMeta', 'model/InlineResponse20020ContentText'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse20020ContentMeta'), require('./InlineResponse20020ContentText'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.InlineResponse20020ContentJsonData = factory(root.CourtApi.ApiClient, root.CourtApi.InlineResponse20020ContentMeta, root.CourtApi.InlineResponse20020ContentText);
  }
}(this, function(ApiClient, InlineResponse20020ContentMeta, InlineResponse20020ContentText) {
  'use strict';




  /**
   * The InlineResponse20020ContentJsonData model module.
   * @module model/InlineResponse20020ContentJsonData
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>InlineResponse20020ContentJsonData</code>.
   * @alias module:model/InlineResponse20020ContentJsonData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse20020ContentJsonData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20020ContentJsonData} obj Optional instance to populate.
   * @return {module:model/InlineResponse20020ContentJsonData} The populated <code>InlineResponse20020ContentJsonData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('meta')) {
        obj['meta'] = InlineResponse20020ContentMeta.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = InlineResponse20020ContentText.constructFromObject(data['text']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse20020ContentMeta} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {module:model/InlineResponse20020ContentText} text
   */
  exports.prototype['text'] = undefined;



  return exports;
}));


