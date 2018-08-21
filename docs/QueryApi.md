# CourtApi.QueryApi

All URIs are relative to *https://train.v1.courtapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buyClaimDocument**](QueryApi.md#buyClaimDocument) | **POST** /cases/pacer/{court_code}/{case_number}/claims/{claim_no}/documents/{claim_seq_no}/{part_no} | Purchase Claim Entry Document from PACER
[**buyDocketDocument**](QueryApi.md#buyDocketDocument) | **POST** /cases/pacer/{court_code}/{case_number}/dockets/{docket_no}/documents/{part_no} | DocketSelect Order PDF
[**updateAssociatedCases**](QueryApi.md#updateAssociatedCases) | **POST** /cases/pacer/{court_code}/{case_number}/associated_cases | PACER Query Case Associated Cases
[**updateAttorneys**](QueryApi.md#updateAttorneys) | **POST** /cases/pacer/{court_code}/{case_number}/attorneys | PACER Query Case Attorneys
[**updateCaseFileLocation**](QueryApi.md#updateCaseFileLocation) | **POST** /cases/pacer/{court_code}/{case_number}/case_file_location | PACER Query Case File Location
[**updateCaseSummary**](QueryApi.md#updateCaseSummary) | **POST** /cases/pacer/{court_code}/{case_number}/case_summary | PACER Query Case Summary
[**updateClaimParts**](QueryApi.md#updateClaimParts) | **POST** /cases/pacer/{court_code}/{case_number}/claims/{claim_no}/documents/{claim_seq_no} | Purchase Claim Entry Document Parts from PACER
[**updateClaims**](QueryApi.md#updateClaims) | **POST** /cases/pacer/{court_code}/{case_number}/claims/update | PACER Query Case Claims
[**updateCreditorMailingMatrix**](QueryApi.md#updateCreditorMailingMatrix) | **POST** /cases/pacer/{court_code}/{case_number}/creditor_mailing | PACER Query Case Creditor Mailing
[**updateCreditors**](QueryApi.md#updateCreditors) | **POST** /cases/pacer/{court_code}/{case_number}/creditors | PACER Query Case Creditors
[**updateDocketDocuments**](QueryApi.md#updateDocketDocuments) | **POST** /cases/pacer/{court_code}/{case_number}/dockets/{docket_no}/documents | DocumentSelect Documents
[**updateDockets**](QueryApi.md#updateDockets) | **POST** /cases/pacer/{court_code}/{case_number}/dockets/update | PACER Query Case Dockets
[**updateFilers**](QueryApi.md#updateFilers) | **POST** /cases/pacer/{court_code}/{case_number}/filers | PACER Query Case Filers
[**updateHistory**](QueryApi.md#updateHistory) | **POST** /cases/pacer/{court_code}/{case_number}/history | PACER Query Case History
[**updateMenu**](QueryApi.md#updateMenu) | **POST** /cases/pacer/{court_code}/{case_number}/menu | PACER Query Case Menu
[**updateNotice**](QueryApi.md#updateNotice) | **POST** /cases/pacer/{court_code}/{case_number}/notice | PACER Query Case Notice
[**updateParties**](QueryApi.md#updateParties) | **POST** /cases/pacer/{court_code}/{case_number}/parties | PACER Query Case Parties
[**updatePartyAliases**](QueryApi.md#updatePartyAliases) | **POST** /cases/pacer/{court_code}/{case_number}/alias | PACER Query Case Alias
[**updatePendingStatus**](QueryApi.md#updatePendingStatus) | **POST** /cases/pacer/{court_code}/{case_number}/status_pending | PACER Query Case Status Pending
[**updateRelatedTransactions**](QueryApi.md#updateRelatedTransactions) | **POST** /cases/pacer/{court_code}/{case_number}/related_transactions | PACER Query Case Related Transactions
[**updateSchedule**](QueryApi.md#updateSchedule) | **POST** /cases/pacer/{court_code}/{case_number}/schedule | PACER Query Case Schedule
[**updateTrustees**](QueryApi.md#updateTrustees) | **POST** /cases/pacer/{court_code}/{case_number}/trustees | PACER Query Case Trustees


<a name="buyClaimDocument"></a>
# **buyClaimDocument**
> buyClaimDocument(courtCode, caseNumber, claimNo, claimSeqNo, partNo)

Purchase Claim Entry Document from PACER

Purchase Claim Entry Document from PACER

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number

var claimNo = "claimNo_example"; // String | Claim Entry Number

var claimSeqNo = "claimSeqNo_example"; // String | Claim Entry Document's Sequence Number

var partNo = "partNo_example"; // String | Document part number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.buyClaimDocument(courtCode, caseNumber, claimNo, claimSeqNo, partNo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 
 **claimNo** | **String**| Claim Entry Number | 
 **claimSeqNo** | **String**| Claim Entry Document&#39;s Sequence Number | 
 **partNo** | **String**| Document part number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="buyDocketDocument"></a>
# **buyDocketDocument**
> buyDocketDocument(courtCode, caseNumber, docketNo, partNo)

DocketSelect Order PDF

Purchase Order Docket Entry Document From PACER;

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number

var docketNo = "docketNo_example"; // String | Docket Entry Number

var partNo = "partNo_example"; // String | Document part number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.buyDocketDocument(courtCode, caseNumber, docketNo, partNo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 
 **docketNo** | **String**| Docket Entry Number | 
 **partNo** | **String**| Document part number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="updateAssociatedCases"></a>
# **updateAssociatedCases**
> InlineResponse2003 updateAssociatedCases(courtCode, caseNumber)

PACER Query Case Associated Cases

PACER Query Case Associated Cases

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAssociatedCases(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateAttorneys"></a>
# **updateAttorneys**
> InlineResponse2004 updateAttorneys(courtCode, caseNumber)

PACER Query Case Attorneys

PACER Query Case Attorneys

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAttorneys(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateCaseFileLocation"></a>
# **updateCaseFileLocation**
> InlineResponse20016 updateCaseFileLocation(courtCode, caseNumber)

PACER Query Case File Location

PACER Query Case File Location

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCaseFileLocation(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateCaseSummary"></a>
# **updateCaseSummary**
> InlineResponse20012 updateCaseSummary(courtCode, caseNumber)

PACER Query Case Summary

PACER Query Case Summary

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCaseSummary(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateClaimParts"></a>
# **updateClaimParts**
> updateClaimParts(courtCode, caseNumber, claimNo, claimSeqNo)

Purchase Claim Entry Document Parts from PACER

Purchase Claim Entry Document Parts from PACER

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number

var claimNo = "claimNo_example"; // String | Claim Entry Number

var claimSeqNo = "claimSeqNo_example"; // String | Claim Entry Document's Sequence Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateClaimParts(courtCode, caseNumber, claimNo, claimSeqNo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 
 **claimNo** | **String**| Claim Entry Number | 
 **claimSeqNo** | **String**| Claim Entry Document&#39;s Sequence Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="updateClaims"></a>
# **updateClaims**
> InlineResponse20019 updateClaims(courtCode, caseNumber, opts)

PACER Query Case Claims

PACER Query Case Claims

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number

var opts = { 
  'caseCode': "caseCode_example", // String | 
  'creditorType': "creditorType_example", // String | 
  'creditorNo': 56, // Number | 
  'creditorName': "creditorName_example", // String | 
  'dateType': "dateType_example", // String | 
  'dateFrom': "dateFrom_example", // String | 
  'dateTo': "dateTo_example", // String | 
  'docFrom': 56, // Number | 
  'docTo': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateClaims(courtCode, caseNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 
 **caseCode** | **String**|  | [optional] 
 **creditorType** | **String**|  | [optional] 
 **creditorNo** | **Number**|  | [optional] 
 **creditorName** | **String**|  | [optional] 
 **dateType** | **String**|  | [optional] 
 **dateFrom** | **String**|  | [optional] 
 **dateTo** | **String**|  | [optional] 
 **docFrom** | **Number**|  | [optional] 
 **docTo** | **Number**|  | [optional] 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateCreditorMailingMatrix"></a>
# **updateCreditorMailingMatrix**
> InlineResponse20013 updateCreditorMailingMatrix(courtCode, caseNumber, opts)

PACER Query Case Creditor Mailing

PACER Query Case Creditor Mailing

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number

var opts = { 
  'caseCode': "caseCode_example", // String | 
  'format': "format_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCreditorMailingMatrix(courtCode, caseNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 
 **caseCode** | **String**|  | [optional] 
 **format** | **String**|  | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateCreditors"></a>
# **updateCreditors**
> InlineResponse2005 updateCreditors(courtCode, caseNumber, opts)

PACER Query Case Creditors

PACER Query Case Creditors

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number

var opts = { 
  'creditorType': "creditorType_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCreditors(courtCode, caseNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 
 **creditorType** | **String**|  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateDocketDocuments"></a>
# **updateDocketDocuments**
> updateDocketDocuments(courtCode, caseNumber, docketNo)

DocumentSelect Documents

Purchase Docket Entry Document Parts from PACER

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number

var docketNo = "docketNo_example"; // String | Docket Entry Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateDocketDocuments(courtCode, caseNumber, docketNo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 
 **docketNo** | **String**| Docket Entry Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateDockets"></a>
# **updateDockets**
> InlineResponse20017 updateDockets(courtCode, caseNumber, opts)

PACER Query Case Dockets

PACER Query Case Dockets

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number

var opts = { 
  'caseNumber2': "caseNumber_example", // String | 
  'dateFrom': "dateFrom_example", // String | 
  'dateTo': "dateTo_example", // String | 
  'docFrom': 56, // Number | 
  'docTo': 56, // Number | 
  'minimizeHeader': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDockets(courtCode, caseNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 
 **caseNumber2** | **String**|  | [optional] 
 **dateFrom** | **String**|  | [optional] 
 **dateTo** | **String**|  | [optional] 
 **docFrom** | **Number**|  | [optional] 
 **docTo** | **Number**|  | [optional] 
 **minimizeHeader** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateFilers"></a>
# **updateFilers**
> InlineResponse2007 updateFilers(courtCode, caseNumber)

PACER Query Case Filers

PACER Query Case Filers

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateFilers(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateHistory"></a>
# **updateHistory**
> InlineResponse20014 updateHistory(courtCode, caseNumber, opts)

PACER Query Case History

PACER Query Case History

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number

var opts = { 
  'historyType': "historyType_example", // String | 
  'sort': "sort_example", // String | 
  'showDocket': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateHistory(courtCode, caseNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 
 **historyType** | **String**|  | [optional] 
 **sort** | **String**|  | [optional] 
 **showDocket** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateMenu"></a>
# **updateMenu**
> InlineResponse2001 updateMenu(courtCode, caseNumber)

PACER Query Case Menu

PACER Query Case Menu

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateMenu(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateNotice"></a>
# **updateNotice**
> InlineResponse2002 updateNotice(courtCode, caseNumber)

PACER Query Case Notice

PACER Query Case Notice

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateNotice(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateParties"></a>
# **updateParties**
> InlineResponse2006 updateParties(courtCode, caseNumber)

PACER Query Case Parties

PACER Query Case Parties

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateParties(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updatePartyAliases"></a>
# **updatePartyAliases**
> InlineResponse20011 updatePartyAliases(courtCode, caseNumber)

PACER Query Case Alias

PACER Query Case Alias

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePartyAliases(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updatePendingStatus"></a>
# **updatePendingStatus**
> InlineResponse2009 updatePendingStatus(courtCode, caseNumber)

PACER Query Case Status Pending

PACER Query Case Status Pending

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePendingStatus(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateRelatedTransactions"></a>
# **updateRelatedTransactions**
> InlineResponse20015 updateRelatedTransactions(courtCode, caseNumber, opts)

PACER Query Case Related Transactions

PACER Query Case Related Transactions

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number

var opts = { 
  'docFrom': 8.14, // Number | 
  'docTo': 8.14, // Number | 
  'dataFiledFrom': "dataFiledFrom_example", // String | 
  'dataFiledTo': "dataFiledTo_example", // String | 
  'showPending': true, // Boolean | 
  'showTerminated': true, // Boolean | 
  'sort': "sort_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateRelatedTransactions(courtCode, caseNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 
 **docFrom** | **Number**|  | [optional] 
 **docTo** | **Number**|  | [optional] 
 **dataFiledFrom** | **String**|  | [optional] 
 **dataFiledTo** | **String**|  | [optional] 
 **showPending** | **Boolean**|  | [optional] 
 **showTerminated** | **Boolean**|  | [optional] 
 **sort** | **String**|  | [optional] 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateSchedule"></a>
# **updateSchedule**
> InlineResponse2008 updateSchedule(courtCode, caseNumber)

PACER Query Case Schedule

PACER Query Case Schedule

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSchedule(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="updateTrustees"></a>
# **updateTrustees**
> InlineResponse20010 updateTrustees(courtCode, caseNumber)

PACER Query Case Trustees

PACER Query Case Trustees

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.QueryApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTrustees(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

