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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CourtApi) {
      root.CourtApi = {};
    }
    root.CourtApi.CasePartiesInnerAssociated = factory(root.CourtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CasePartiesInnerAssociated model module.
   * @module model/CasePartiesInnerAssociated
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>CasePartiesInnerAssociated</code>.
   * @alias module:model/CasePartiesInnerAssociated
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>CasePartiesInnerAssociated</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CasePartiesInnerAssociated} obj Optional instance to populate.
   * @return {module:model/CasePartiesInnerAssociated} The populated <code>CasePartiesInnerAssociated</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('lead')) {
        obj['lead'] = ApiClient.convertToType(data['lead'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'String');
      }
    }
    return obj;
  }

  /**
   * Fax
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;
  /**
   * Name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Role
   * @member {String} lead
   */
  exports.prototype['lead'] = undefined;
  /**
   * Phone
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;
  /**
   * Email
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Address
   * @member {String} address
   */
  exports.prototype['address'] = undefined;



  return exports;
}));

