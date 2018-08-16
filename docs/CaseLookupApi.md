# CourtApi.CaseLookupApi

All URIs are relative to *https://v1.courtapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**casesPacerSearchCaseNoCaseNumberGet**](CaseLookupApi.md#casesPacerSearchCaseNoCaseNumberGet) | **GET** /cases/pacer/search/case_no/{case_number} | Case Search by Case Number
[**casesPacerSearchPartyTitleGet**](CaseLookupApi.md#casesPacerSearchPartyTitleGet) | **GET** /cases/pacer/search/party_title | Case Search by Case Title or Party Name


<a name="casesPacerSearchCaseNoCaseNumberGet"></a>
# **casesPacerSearchCaseNoCaseNumberGet**
> casesPacerSearchCaseNoCaseNumberGet(caseNumber, opts)

Case Search by Case Number

Case Search by Case Number

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseLookupApi();

var caseNumber = "caseNumber_example"; // String | Case Number

var opts = { 
  'pageSize': 56, // Number | Page Size
  'pageNumber': 56 // Number | Page Number
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerSearchCaseNoCaseNumberGet(caseNumber, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseNumber** | **String**| Case Number | 
 **pageSize** | **Number**| Page Size | [optional] 
 **pageNumber** | **Number**| Page Number | [optional] 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="casesPacerSearchPartyTitleGet"></a>
# **casesPacerSearchPartyTitleGet**
> casesPacerSearchPartyTitleGet(_in, searchTerms, opts)

Case Search by Case Title or Party Name

Case Search by Case Title or Party Name

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CaseLookupApi();

var _in = "either"; // String | Party name and/or Case title

var searchTerms = "searchTerms_example"; // String | Search Terms

var opts = { 
  'dateFiled': "dateFiled_example", // String | Date Filed
  'chapter': 56, // Number | Chapter
  'pageSize': 56, // Number | Page Size
  'pageNumber': 56, // Number | Page Number
  'sortColumn': "sortColumn_example", // String | Sort Column
  'sortOrder': "sortOrder_example" // String | Sort Order
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.casesPacerSearchPartyTitleGet(_in, searchTerms, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_in** | **String**| Party name and/or Case title | [default to either]
 **searchTerms** | **String**| Search Terms | 
 **dateFiled** | **String**| Date Filed | [optional] 
 **chapter** | **Number**| Chapter | [optional] 
 **pageSize** | **Number**| Page Size | [optional] 
 **pageNumber** | **Number**| Page Number | [optional] 
 **sortColumn** | **String**| Sort Column | [optional] 
 **sortOrder** | **String**| Sort Order | [optional] 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

