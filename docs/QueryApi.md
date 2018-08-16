# CourtApi.QueryApi

All URIs are relative to *https://v1.courtapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buyClaimDocument**](QueryApi.md#buyClaimDocument) | **POST** /cases/pacer/{court_code}/{case_number}/claims/{claim_no}/documents/{claim_seq_no}/{part_no} | Purchase Claim Entry Document from PACER
[**buyDocketDocument**](QueryApi.md#buyDocketDocument) | **POST** /cases/pacer/{court_code}/{case_number}/dockets/{docket_no}/documents/{part_no} | DocketSelect Order PDF
[**casesPacerCourtCodeCaseNumberAliasPost**](QueryApi.md#casesPacerCourtCodeCaseNumberAliasPost) | **POST** /cases/pacer/{court_code}/{case_number}/alias | PACER Query Case Alias
[**casesPacerCourtCodeCaseNumberAssociatedCasesPost**](QueryApi.md#casesPacerCourtCodeCaseNumberAssociatedCasesPost) | **POST** /cases/pacer/{court_code}/{case_number}/associated_cases | PACER Query Case Associated Cases
[**casesPacerCourtCodeCaseNumberAttorneysPost**](QueryApi.md#casesPacerCourtCodeCaseNumberAttorneysPost) | **POST** /cases/pacer/{court_code}/{case_number}/attorneys | PACER Query Case Attorneys
[**casesPacerCourtCodeCaseNumberCaseFileLocationPost**](QueryApi.md#casesPacerCourtCodeCaseNumberCaseFileLocationPost) | **POST** /cases/pacer/{court_code}/{case_number}/case_file_location | PACER Query Case File Location
[**casesPacerCourtCodeCaseNumberCaseSummaryPost**](QueryApi.md#casesPacerCourtCodeCaseNumberCaseSummaryPost) | **POST** /cases/pacer/{court_code}/{case_number}/case_summary | PACER Query Case Summary
[**casesPacerCourtCodeCaseNumberCreditorMailingPost**](QueryApi.md#casesPacerCourtCodeCaseNumberCreditorMailingPost) | **POST** /cases/pacer/{court_code}/{case_number}/creditor_mailing | PACER Query Case Creditor Mailing
[**casesPacerCourtCodeCaseNumberCreditorsPost**](QueryApi.md#casesPacerCourtCodeCaseNumberCreditorsPost) | **POST** /cases/pacer/{court_code}/{case_number}/creditors | PACER Query Case Creditors
[**casesPacerCourtCodeCaseNumberFilersPost**](QueryApi.md#casesPacerCourtCodeCaseNumberFilersPost) | **POST** /cases/pacer/{court_code}/{case_number}/filers | PACER Query Case Filers
[**casesPacerCourtCodeCaseNumberHistoryPost**](QueryApi.md#casesPacerCourtCodeCaseNumberHistoryPost) | **POST** /cases/pacer/{court_code}/{case_number}/history | PACER Query Case History
[**casesPacerCourtCodeCaseNumberMenuPost**](QueryApi.md#casesPacerCourtCodeCaseNumberMenuPost) | **POST** /cases/pacer/{court_code}/{case_number}/menu | PACER Query Case Menu
[**casesPacerCourtCodeCaseNumberNoticePost**](QueryApi.md#casesPacerCourtCodeCaseNumberNoticePost) | **POST** /cases/pacer/{court_code}/{case_number}/notice | PACER Query Case Notice
[**casesPacerCourtCodeCaseNumberPartiesPost**](QueryApi.md#casesPacerCourtCodeCaseNumberPartiesPost) | **POST** /cases/pacer/{court_code}/{case_number}/parties | PACER Query Case Parties
[**casesPacerCourtCodeCaseNumberRelatedTransactionsPost**](QueryApi.md#casesPacerCourtCodeCaseNumberRelatedTransactionsPost) | **POST** /cases/pacer/{court_code}/{case_number}/related_transactions | PACER Query Case Related Transactions
[**casesPacerCourtCodeCaseNumberSchedulePost**](QueryApi.md#casesPacerCourtCodeCaseNumberSchedulePost) | **POST** /cases/pacer/{court_code}/{case_number}/schedule | PACER Query Case Schedule
[**casesPacerCourtCodeCaseNumberStatusPendingPost**](QueryApi.md#casesPacerCourtCodeCaseNumberStatusPendingPost) | **POST** /cases/pacer/{court_code}/{case_number}/status_pending | PACER Query Case Status Pending
[**casesPacerCourtCodeCaseNumberTrusteesPost**](QueryApi.md#casesPacerCourtCodeCaseNumberTrusteesPost) | **POST** /cases/pacer/{court_code}/{case_number}/trustees | PACER Query Case Trustees
[**updateClaimParts**](QueryApi.md#updateClaimParts) | **POST** /cases/pacer/{court_code}/{case_number}/claims/{claim_no}/documents/{claim_seq_no} | Purchase Claim Entry Document Parts from PACER
[**updateClaims**](QueryApi.md#updateClaims) | **POST** /cases/pacer/{court_code}/{case_number}/claims/update | PACER Query Case Claims
[**updateDocketDocuments**](QueryApi.md#updateDocketDocuments) | **POST** /cases/pacer/{court_code}/{case_number}/dockets/{docket_no}/documents | DocumentSelect Documents
[**updateDockets**](QueryApi.md#updateDockets) | **POST** /cases/pacer/{court_code}/{case_number}/dockets/update | PACER Query Case Dockets


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

<a name="casesPacerCourtCodeCaseNumberAliasPost"></a>
# **casesPacerCourtCodeCaseNumberAliasPost**
> InlineResponse20011 casesPacerCourtCodeCaseNumberAliasPost(courtCode, caseNumber)

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
apiInstance.casesPacerCourtCodeCaseNumberAliasPost(courtCode, caseNumber, callback);
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

<a name="casesPacerCourtCodeCaseNumberAssociatedCasesPost"></a>
# **casesPacerCourtCodeCaseNumberAssociatedCasesPost**
> InlineResponse2003 casesPacerCourtCodeCaseNumberAssociatedCasesPost(courtCode, caseNumber)

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
apiInstance.casesPacerCourtCodeCaseNumberAssociatedCasesPost(courtCode, caseNumber, callback);
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

<a name="casesPacerCourtCodeCaseNumberAttorneysPost"></a>
# **casesPacerCourtCodeCaseNumberAttorneysPost**
> InlineResponse2004 casesPacerCourtCodeCaseNumberAttorneysPost(courtCode, caseNumber)

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
apiInstance.casesPacerCourtCodeCaseNumberAttorneysPost(courtCode, caseNumber, callback);
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

<a name="casesPacerCourtCodeCaseNumberCaseFileLocationPost"></a>
# **casesPacerCourtCodeCaseNumberCaseFileLocationPost**
> InlineResponse20016 casesPacerCourtCodeCaseNumberCaseFileLocationPost(courtCode, caseNumber)

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
apiInstance.casesPacerCourtCodeCaseNumberCaseFileLocationPost(courtCode, caseNumber, callback);
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

<a name="casesPacerCourtCodeCaseNumberCaseSummaryPost"></a>
# **casesPacerCourtCodeCaseNumberCaseSummaryPost**
> InlineResponse20012 casesPacerCourtCodeCaseNumberCaseSummaryPost(courtCode, caseNumber)

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
apiInstance.casesPacerCourtCodeCaseNumberCaseSummaryPost(courtCode, caseNumber, callback);
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

<a name="casesPacerCourtCodeCaseNumberCreditorMailingPost"></a>
# **casesPacerCourtCodeCaseNumberCreditorMailingPost**
> InlineResponse20013 casesPacerCourtCodeCaseNumberCreditorMailingPost(courtCode, caseNumber, opts)

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
apiInstance.casesPacerCourtCodeCaseNumberCreditorMailingPost(courtCode, caseNumber, opts, callback);
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

<a name="casesPacerCourtCodeCaseNumberCreditorsPost"></a>
# **casesPacerCourtCodeCaseNumberCreditorsPost**
> InlineResponse2005 casesPacerCourtCodeCaseNumberCreditorsPost(courtCode, caseNumber, opts)

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
apiInstance.casesPacerCourtCodeCaseNumberCreditorsPost(courtCode, caseNumber, opts, callback);
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

<a name="casesPacerCourtCodeCaseNumberFilersPost"></a>
# **casesPacerCourtCodeCaseNumberFilersPost**
> InlineResponse2007 casesPacerCourtCodeCaseNumberFilersPost(courtCode, caseNumber)

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
apiInstance.casesPacerCourtCodeCaseNumberFilersPost(courtCode, caseNumber, callback);
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

<a name="casesPacerCourtCodeCaseNumberHistoryPost"></a>
# **casesPacerCourtCodeCaseNumberHistoryPost**
> InlineResponse20014 casesPacerCourtCodeCaseNumberHistoryPost(courtCode, caseNumber, opts)

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
apiInstance.casesPacerCourtCodeCaseNumberHistoryPost(courtCode, caseNumber, opts, callback);
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

<a name="casesPacerCourtCodeCaseNumberMenuPost"></a>
# **casesPacerCourtCodeCaseNumberMenuPost**
> InlineResponse2001 casesPacerCourtCodeCaseNumberMenuPost(courtCode, caseNumber)

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
apiInstance.casesPacerCourtCodeCaseNumberMenuPost(courtCode, caseNumber, callback);
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

<a name="casesPacerCourtCodeCaseNumberNoticePost"></a>
# **casesPacerCourtCodeCaseNumberNoticePost**
> InlineResponse2002 casesPacerCourtCodeCaseNumberNoticePost(courtCode, caseNumber)

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
apiInstance.casesPacerCourtCodeCaseNumberNoticePost(courtCode, caseNumber, callback);
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

<a name="casesPacerCourtCodeCaseNumberPartiesPost"></a>
# **casesPacerCourtCodeCaseNumberPartiesPost**
> InlineResponse2006 casesPacerCourtCodeCaseNumberPartiesPost(courtCode, caseNumber)

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
apiInstance.casesPacerCourtCodeCaseNumberPartiesPost(courtCode, caseNumber, callback);
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

<a name="casesPacerCourtCodeCaseNumberRelatedTransactionsPost"></a>
# **casesPacerCourtCodeCaseNumberRelatedTransactionsPost**
> InlineResponse20015 casesPacerCourtCodeCaseNumberRelatedTransactionsPost(courtCode, caseNumber, opts)

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
apiInstance.casesPacerCourtCodeCaseNumberRelatedTransactionsPost(courtCode, caseNumber, opts, callback);
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

<a name="casesPacerCourtCodeCaseNumberSchedulePost"></a>
# **casesPacerCourtCodeCaseNumberSchedulePost**
> InlineResponse2008 casesPacerCourtCodeCaseNumberSchedulePost(courtCode, caseNumber)

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
apiInstance.casesPacerCourtCodeCaseNumberSchedulePost(courtCode, caseNumber, callback);
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

<a name="casesPacerCourtCodeCaseNumberStatusPendingPost"></a>
# **casesPacerCourtCodeCaseNumberStatusPendingPost**
> InlineResponse2009 casesPacerCourtCodeCaseNumberStatusPendingPost(courtCode, caseNumber)

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
apiInstance.casesPacerCourtCodeCaseNumberStatusPendingPost(courtCode, caseNumber, callback);
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

<a name="casesPacerCourtCodeCaseNumberTrusteesPost"></a>
# **casesPacerCourtCodeCaseNumberTrusteesPost**
> InlineResponse20010 casesPacerCourtCodeCaseNumberTrusteesPost(courtCode, caseNumber)

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
apiInstance.casesPacerCourtCodeCaseNumberTrusteesPost(courtCode, caseNumber, callback);
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

