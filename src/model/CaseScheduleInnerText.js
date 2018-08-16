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
    root.CourtApi.CaseScheduleInnerText = factory(root.CourtApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CaseScheduleInnerText model module.
   * @module model/CaseScheduleInnerText
   * @version 0.9.2
   */

  /**
   * Constructs a new <code>CaseScheduleInnerText</code>.
   * @alias module:model/CaseScheduleInnerText
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>CaseScheduleInnerText</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CaseScheduleInnerText} obj Optional instance to populate.
   * @return {module:model/CaseScheduleInnerText} The populated <code>CaseScheduleInnerText</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('doc_uri')) {
        obj['doc_uri'] = ApiClient.convertToType(data['doc_uri'], 'String');
      }
      if (data.hasOwnProperty('event_name')) {
        obj['event_name'] = ApiClient.convertToType(data['event_name'], 'String');
      }
      if (data.hasOwnProperty('modified')) {
        obj['modified'] = ApiClient.convertToType(data['modified'], 'String');
      }
      if (data.hasOwnProperty('date_event_filed')) {
        obj['date_event_filed'] = ApiClient.convertToType(data['date_event_filed'], 'String');
      }
      if (data.hasOwnProperty('date_due_set')) {
        obj['date_due_set'] = ApiClient.convertToType(data['date_due_set'], 'String');
      }
      if (data.hasOwnProperty('date_terminated')) {
        obj['date_terminated'] = ApiClient.convertToType(data['date_terminated'], 'String');
      }
      if (data.hasOwnProperty('doc_no')) {
        obj['doc_no'] = ApiClient.convertToType(data['doc_no'], 'String');
      }
      if (data.hasOwnProperty('hearing_judge')) {
        obj['hearing_judge'] = ApiClient.convertToType(data['hearing_judge'], 'String');
      }
    }
    return obj;
  }

  /**
   * Document link
   * @member {String} doc_uri
   */
  exports.prototype['doc_uri'] = undefined;
  /**
   * Event Name
   * @member {String} event_name
   */
  exports.prototype['event_name'] = undefined;
  /**
   * Date of last modification
   * @member {String} modified
   */
  exports.prototype['modified'] = undefined;
  /**
   * Event Filed Date
   * @member {String} date_event_filed
   */
  exports.prototype['date_event_filed'] = undefined;
  /**
   * Due Date
   * @member {String} date_due_set
   */
  exports.prototype['date_due_set'] = undefined;
  /**
   * Termination date
   * @member {String} date_terminated
   */
  exports.prototype['date_terminated'] = undefined;
  /**
   * Document Number
   * @member {String} doc_no
   */
  exports.prototype['doc_no'] = undefined;
  /**
   * Hearing Judge Name
   * @member {String} hearing_judge
   */
  exports.prototype['hearing_judge'] = undefined;



  return exports;
}));

