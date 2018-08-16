# CourtApi.CaseApi

All URIs are relative to *https://v1.courtapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**casesPacerCourtCodeCaseNumberAliasGet**](CaseApi.md#casesPacerCourtCodeCaseNumberAliasGet) | **GET** /cases/pacer/{court_code}/{case_number}/alias | Parties with alias for case
[**casesPacerCourtCodeCaseNumberAssociatedCasesGet**](CaseApi.md#casesPacerCourtCodeCaseNumberAssociatedCasesGet) | **GET** /cases/pacer/{court_code}/{case_number}/associated_cases | Cases related to the case or lead case
[**casesPacerCourtCodeCaseNumberAttorneysGet**](CaseApi.md#casesPacerCourtCodeCaseNumberAttorneysGet) | **GET** /cases/pacer/{court_code}/{case_number}/attorneys | Attorney personal info as well as the party(s) they represent
[**casesPacerCourtCodeCaseNumberCaseSummaryGet**](CaseApi.md#casesPacerCourtCodeCaseNumberCaseSummaryGet) | **GET** /cases/pacer/{court_code}/{case_number}/case_summary | Case summary for case
[**casesPacerCourtCodeCaseNumberCreditorMailingGet**](CaseApi.md#casesPacerCourtCodeCaseNumberCreditorMailingGet) | **GET** /cases/pacer/{court_code}/{case_number}/creditor_mailing | Creditor mailing matrix for case
[**casesPacerCourtCodeCaseNumberCreditorsGet**](CaseApi.md#casesPacerCourtCodeCaseNumberCreditorsGet) | **GET** /cases/pacer/{court_code}/{case_number}/creditors | All creditors for case
[**casesPacerCourtCodeCaseNumberFilersGet**](CaseApi.md#casesPacerCourtCodeCaseNumberFilersGet) | **GET** /cases/pacer/{court_code}/{case_number}/filers | All filers for case
[**casesPacerCourtCodeCaseNumberMenuGet**](CaseApi.md#casesPacerCourtCodeCaseNumberMenuGet) | **GET** /cases/pacer/{court_code}/{case_number}/menu | Available menus in PACER for case
[**casesPacerCourtCodeCaseNumberNoticeGet**](CaseApi.md#casesPacerCourtCodeCaseNumberNoticeGet) | **GET** /cases/pacer/{court_code}/{case_number}/notice | Case Notice of Bankruptcy Filings
[**casesPacerCourtCodeCaseNumberPartiesGet**](CaseApi.md#casesPacerCourtCodeCaseNumberPartiesGet) | **GET** /cases/pacer/{court_code}/{case_number}/parties | All parties for case
[**casesPacerCourtCodeCaseNumberScheduleGet**](CaseApi.md#casesPacerCourtCodeCaseNumberScheduleGet) | **GET** /cases/pacer/{court_code}/{case_number}/schedule | Schedule for case
[**casesPacerCourtCodeCaseNumberStatusPendingGet**](CaseApi.md#casesPacerCourtCodeCaseNumberStatusPendingGet) | **GET** /cases/pacer/{court_code}/{case_number}/status_pending | Pending status for case
[**casesPacerCourtCodeCaseNumberTrusteesGet**](CaseApi.md#casesPacerCourtCodeCaseNumberTrusteesGet) | **GET** /cases/pacer/{court_code}/{case_number}/trustees | Trustees for case
[**getCaseMenu**](CaseApi.md#getCaseMenu) | **GET** /cases/pacer/{court_code}/{case_number} | Case Root Menu
[**getClaim**](CaseApi.md#getClaim) | **GET** /cases/pacer/{court_code}/{case_number}/claims/{claim_no} | Case Claim Entry
[**getClaimDocument**](CaseApi.md#getClaimDocument) | **GET** /cases/pacer/{court_code}/{case_number}/claims/{claim_no}/documents/{claim_seq_no}/{part_no} | ClaimSelect Order PDF
[**getClaimParts**](CaseApi.md#getClaimParts) | **GET** /cases/pacer/{court_code}/{case_number}/claims/{claim_no}/documents/{claim_seq_no} | Claim Entry Document Parts
[**getClaims**](CaseApi.md#getClaims) | **GET** /cases/pacer/{court_code}/{case_number}/claims | Case Claims from Local DB
[**getClaimsHeader**](CaseApi.md#getClaimsHeader) | **GET** /cases/pacer/{court_code}/{case_number}/claims/header | Case Claims Header
[**getDocketDocument**](CaseApi.md#getDocketDocument) | **GET** /cases/pacer/{court_code}/{case_number}/dockets/{docket_no}/documents/{part_no} | DocketSelect Order PDF
[**getDocketDocuments**](CaseApi.md#getDocketDocuments) | **GET** /cases/pacer/{court_code}/{case_number}/dockets/{docket_no}/documents | DocumentSelect Documents
[**getDocketEntry**](CaseApi.md#getDocketEntry) | **GET** /cases/pacer/{court_code}/{case_number}/dockets/{docket_no} | Case Dockets Entry
[**getDocketHeader**](CaseApi.md#getDocketHeader) | **GET** /cases/pacer/{court_code}/{case_number}/dockets/header | Case Dockets Header
[**getDockets**](CaseApi.md#getDockets) | **GET** /cases/pacer/{court_code}/{case_number}/dockets | Case Dockets from Local DB
[**getHeaders**](CaseApi.md#getHeaders) | **GET** /cases/pacer/{court_code}/{case_number}/headers | Case Headers


<a name="casesPacerCourtCodeCaseNumberAliasGet"></a>
# **casesPacerCourtCodeCaseNumberAliasGet**
> casesPacerCourtCodeCaseNumberAliasGet(courtCode, caseNumber)

Parties with alias for case

Parties with alias for case

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerCourtCodeCaseNumberAliasGet(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="casesPacerCourtCodeCaseNumberAssociatedCasesGet"></a>
# **casesPacerCourtCodeCaseNumberAssociatedCasesGet**
> casesPacerCourtCodeCaseNumberAssociatedCasesGet(courtCode, caseNumber)

Cases related to the case or lead case

Cases related to the case or lead case

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerCourtCodeCaseNumberAssociatedCasesGet(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="casesPacerCourtCodeCaseNumberAttorneysGet"></a>
# **casesPacerCourtCodeCaseNumberAttorneysGet**
> casesPacerCourtCodeCaseNumberAttorneysGet(courtCode, caseNumber)

Attorney personal info as well as the party(s) they represent

Attorney personal info as well as the party(s) they represent

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerCourtCodeCaseNumberAttorneysGet(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="casesPacerCourtCodeCaseNumberCaseSummaryGet"></a>
# **casesPacerCourtCodeCaseNumberCaseSummaryGet**
> casesPacerCourtCodeCaseNumberCaseSummaryGet(courtCode, caseNumber)

Case summary for case

Case summary for case

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerCourtCodeCaseNumberCaseSummaryGet(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="casesPacerCourtCodeCaseNumberCreditorMailingGet"></a>
# **casesPacerCourtCodeCaseNumberCreditorMailingGet**
> casesPacerCourtCodeCaseNumberCreditorMailingGet(courtCode, caseNumber)

Creditor mailing matrix for case

Creditor mailing matrix for case

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerCourtCodeCaseNumberCreditorMailingGet(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="casesPacerCourtCodeCaseNumberCreditorsGet"></a>
# **casesPacerCourtCodeCaseNumberCreditorsGet**
> casesPacerCourtCodeCaseNumberCreditorsGet(courtCode, caseNumber)

All creditors for case

All creditors for case

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerCourtCodeCaseNumberCreditorsGet(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="casesPacerCourtCodeCaseNumberFilersGet"></a>
# **casesPacerCourtCodeCaseNumberFilersGet**
> casesPacerCourtCodeCaseNumberFilersGet(courtCode, caseNumber)

All filers for case

All filers for case

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerCourtCodeCaseNumberFilersGet(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="casesPacerCourtCodeCaseNumberMenuGet"></a>
# **casesPacerCourtCodeCaseNumberMenuGet**
> casesPacerCourtCodeCaseNumberMenuGet(courtCode, caseNumber)

Available menus in PACER for case

Available menus in PACER for case

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerCourtCodeCaseNumberMenuGet(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="casesPacerCourtCodeCaseNumberNoticeGet"></a>
# **casesPacerCourtCodeCaseNumberNoticeGet**
> casesPacerCourtCodeCaseNumberNoticeGet(courtCode, caseNumber)

Case Notice of Bankruptcy Filings

Case Notice of Bankruptcy Filings

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerCourtCodeCaseNumberNoticeGet(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="casesPacerCourtCodeCaseNumberPartiesGet"></a>
# **casesPacerCourtCodeCaseNumberPartiesGet**
> casesPacerCourtCodeCaseNumberPartiesGet(courtCode, caseNumber)

All parties for case

All parties for case

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerCourtCodeCaseNumberPartiesGet(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="casesPacerCourtCodeCaseNumberScheduleGet"></a>
# **casesPacerCourtCodeCaseNumberScheduleGet**
> casesPacerCourtCodeCaseNumberScheduleGet(courtCode, caseNumber)

Schedule for case

Schedule for case

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerCourtCodeCaseNumberScheduleGet(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="casesPacerCourtCodeCaseNumberStatusPendingGet"></a>
# **casesPacerCourtCodeCaseNumberStatusPendingGet**
> casesPacerCourtCodeCaseNumberStatusPendingGet(courtCode, caseNumber)

Pending status for case

Pending status for case

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerCourtCodeCaseNumberStatusPendingGet(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="casesPacerCourtCodeCaseNumberTrusteesGet"></a>
# **casesPacerCourtCodeCaseNumberTrusteesGet**
> casesPacerCourtCodeCaseNumberTrusteesGet(courtCode, caseNumber)

Trustees for case

Trustees for case

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerCourtCodeCaseNumberTrusteesGet(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getCaseMenu"></a>
# **getCaseMenu**
> getCaseMenu(courtCode, caseNumber)

Case Root Menu

Case Root Menu

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCaseMenu(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getClaim"></a>
# **getClaim**
> getClaim(courtCode, caseNumber, claimNo)

Case Claim Entry

Case Claim Entry

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number

var claimNo = "claimNo_example"; // String | Claim Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getClaim(courtCode, caseNumber, claimNo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 
 **claimNo** | **String**| Claim Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getClaimDocument"></a>
# **getClaimDocument**
> getClaimDocument(courtCode, caseNumber, claimNo, claimSeqNo, partNo)

ClaimSelect Order PDF

Order Claim Entry documents;

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

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
apiInstance.getClaimDocument(courtCode, caseNumber, claimNo, claimSeqNo, partNo, callback);
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

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="getClaimParts"></a>
# **getClaimParts**
> getClaimParts(courtCode, caseNumber, claimNo, claimSeqNo)

Claim Entry Document Parts

Claim Entry Document Parts

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

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
apiInstance.getClaimParts(courtCode, caseNumber, claimNo, claimSeqNo, callback);
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

<a name="getClaims"></a>
# **getClaims**
> InlineResponse20020 getClaims(courtCode, caseNumber, opts)

Case Claims from Local DB

Search Case Claim from Local DB

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number

var opts = { 
  'searchKeyword': "searchKeyword_example", // String | 
  'dateFiledFrom': "dateFiledFrom_example", // String | 
  'dateFiledTo': "dateFiledTo_example", // String | 
  'numberFrom': 56, // Number | 
  'numberTo': 56, // Number | 
  'numberRange': "numberRange_example", // String | 
  'sortColumn': "sortColumn_example", // String | 
  'sortOrder': "sortOrder_example", // String | 
  'pageSize': 56, // Number | 
  'pageNumber': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClaims(courtCode, caseNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 
 **searchKeyword** | **String**|  | [optional] 
 **dateFiledFrom** | **String**|  | [optional] 
 **dateFiledTo** | **String**|  | [optional] 
 **numberFrom** | **Number**|  | [optional] 
 **numberTo** | **Number**|  | [optional] 
 **numberRange** | **String**|  | [optional] 
 **sortColumn** | **String**|  | [optional] 
 **sortOrder** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **pageNumber** | **Number**|  | [optional] 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getClaimsHeader"></a>
# **getClaimsHeader**
> getClaimsHeader(courtCode, caseNumber)

Case Claims Header

Case Claims Header

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getClaimsHeader(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getDocketDocument"></a>
# **getDocketDocument**
> getDocketDocument(courtCode, caseNumber, docketNo, partNo)

DocketSelect Order PDF

Order Docket Entry documents;

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

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
apiInstance.getDocketDocument(courtCode, caseNumber, docketNo, partNo, callback);
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

<a name="getDocketDocuments"></a>
# **getDocketDocuments**
> getDocketDocuments(courtCode, caseNumber, docketNo)

DocumentSelect Documents

Docket Entry Document Parts;

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

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
apiInstance.getDocketDocuments(courtCode, caseNumber, docketNo, callback);
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

<a name="getDocketEntry"></a>
# **getDocketEntry**
> getDocketEntry(courtCode, caseNumber, docketNo)

Case Dockets Entry

Case Dockets Entry

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number

var docketNo = "docketNo_example"; // String | Docket Sequence Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDocketEntry(courtCode, caseNumber, docketNo, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 
 **docketNo** | **String**| Docket Sequence Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getDocketHeader"></a>
# **getDocketHeader**
> getDocketHeader(courtCode, caseNumber)

Case Dockets Header

Case Dockets Header

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDocketHeader(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getDockets"></a>
# **getDockets**
> InlineResponse20018 getDockets(courtCode, caseNumber, opts)

Case Dockets from Local DB

Case Dockets from Local DB

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number

var opts = { 
  'searchKeyword': "searchKeyword_example", // String | 
  'dateFiledFrom': "dateFiledFrom_example", // String | 
  'dateFiledTo': "dateFiledTo_example", // String | 
  'docketNumberFrom': 56, // Number | 
  'docketNumberTo': 56, // Number | 
  'docketNumberRange': "docketNumberRange_example", // String | 
  'sortColumn': "sortColumn_example", // String | 
  'sortOrder': "sortOrder_example", // String | 
  'pageSize': 56, // Number | 
  'pageNumber': 56 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDockets(courtCode, caseNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 
 **searchKeyword** | **String**|  | [optional] 
 **dateFiledFrom** | **String**|  | [optional] 
 **dateFiledTo** | **String**|  | [optional] 
 **docketNumberFrom** | **Number**|  | [optional] 
 **docketNumberTo** | **Number**|  | [optional] 
 **docketNumberRange** | **String**|  | [optional] 
 **sortColumn** | **String**|  | [optional] 
 **sortOrder** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **pageNumber** | **Number**|  | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getHeaders"></a>
# **getHeaders**
> getHeaders(courtCode, caseNumber)

Case Headers

Case Headers

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseApi();

var courtCode = "courtCode_example"; // String | Court Code

var caseNumber = "caseNumber_example"; // String | Case Number


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getHeaders(courtCode, caseNumber, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **caseNumber** | **String**| Case Number | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

