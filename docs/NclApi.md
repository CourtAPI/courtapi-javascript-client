# CourtApi.NclApi

All URIs are relative to *https://train.v1.courtapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAppellateSearchResults**](NclApi.md#getAppellateSearchResults) | **GET** /pacer/ncl/appellate/{search_id} | PACER NCL Appellate Case Search Result Navigation
[**getBankruptcySearchResults**](NclApi.md#getBankruptcySearchResults) | **GET** /pacer/ncl/bankruptcy/{search_id} | PACER NCL Bankruptcy Case Search Result Navigation
[**getCivilSearchResults**](NclApi.md#getCivilSearchResults) | **GET** /pacer/ncl/civil/{search_id} | PACER NCL Civil Case Search Result Navigation
[**getCriminalSearchResults**](NclApi.md#getCriminalSearchResults) | **GET** /pacer/ncl/criminal/{search_id} | PACER NCL Criminal Case Search Result Navigation
[**getMDLSearchResults**](NclApi.md#getMDLSearchResults) | **GET** /pacer/ncl/mdl/{search_id} | PACER NCL MDL Case Search Result Navigation
[**searchAppellateCases**](NclApi.md#searchAppellateCases) | **POST** /pacer/ncl/appellate | PACER NCL Appellate Case Search
[**searchBankruptcyCases**](NclApi.md#searchBankruptcyCases) | **POST** /pacer/ncl/bankruptcy | PACER NCL Bankruptcy Case Search
[**searchCivilCases**](NclApi.md#searchCivilCases) | **POST** /pacer/ncl/civil | PACER NCL Civil Case Search
[**searchCriminalCases**](NclApi.md#searchCriminalCases) | **POST** /pacer/ncl/criminal | PACER NCL Criminal Case Search
[**searchMDLCases**](NclApi.md#searchMDLCases) | **POST** /pacer/ncl/mdl | PACER NCL MDL Case Search


<a name="getAppellateSearchResults"></a>
# **getAppellateSearchResults**
> InlineResponse200 getAppellateSearchResults(searchId, pageNo, opts)

PACER NCL Appellate Case Search Result Navigation

PACER limits NCL results to about 50 cases per page. Use this endpoint to navigate search results by paging and sorting.

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.NclApi();

var searchId = "searchId_example"; // String | 

var pageNo = "pageNo_example"; // String | 

var opts = { 
  'sortField': "sortField_example", // String | 
  'sortReverse': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppellateSearchResults(searchId, pageNo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchId** | **String**|  | 
 **pageNo** | **String**|  | 
 **sortField** | **String**|  | [optional] 
 **sortReverse** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getBankruptcySearchResults"></a>
# **getBankruptcySearchResults**
> InlineResponse200 getBankruptcySearchResults(searchId, pageNo, opts)

PACER NCL Bankruptcy Case Search Result Navigation

PACER limits NCL results to about 50 cases per page. Use this endpoint to navigate search results by paging and sorting.

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.NclApi();

var searchId = "searchId_example"; // String | 

var pageNo = "pageNo_example"; // String | 

var opts = { 
  'sortField': "sortField_example", // String | 
  'sortReverse': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBankruptcySearchResults(searchId, pageNo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchId** | **String**|  | 
 **pageNo** | **String**|  | 
 **sortField** | **String**|  | [optional] 
 **sortReverse** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getCivilSearchResults"></a>
# **getCivilSearchResults**
> InlineResponse200 getCivilSearchResults(searchId, pageNo, opts)

PACER NCL Civil Case Search Result Navigation

PACER limits NCL results to about 50 cases per page. Use this endpoint to navigate search results by paging and sorting.

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.NclApi();

var searchId = "searchId_example"; // String | 

var pageNo = "pageNo_example"; // String | 

var opts = { 
  'sortField': "sortField_example", // String | 
  'sortReverse': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCivilSearchResults(searchId, pageNo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchId** | **String**|  | 
 **pageNo** | **String**|  | 
 **sortField** | **String**|  | [optional] 
 **sortReverse** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getCriminalSearchResults"></a>
# **getCriminalSearchResults**
> InlineResponse200 getCriminalSearchResults(searchId, pageNo, opts)

PACER NCL Criminal Case Search Result Navigation

PACER limits NCL results to about 50 cases per page. Use this endpoint to navigate search results by paging and sorting.

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.NclApi();

var searchId = "searchId_example"; // String | 

var pageNo = "pageNo_example"; // String | 

var opts = { 
  'sortField': "sortField_example", // String | 
  'sortReverse': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCriminalSearchResults(searchId, pageNo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchId** | **String**|  | 
 **pageNo** | **String**|  | 
 **sortField** | **String**|  | [optional] 
 **sortReverse** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getMDLSearchResults"></a>
# **getMDLSearchResults**
> InlineResponse200 getMDLSearchResults(searchId, pageNo, opts)

PACER NCL MDL Case Search Result Navigation

PACER limits NCL results to about 50 cases per page. Use this endpoint to navigate search results by paging and sorting.

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.NclApi();

var searchId = "searchId_example"; // String | 

var pageNo = "pageNo_example"; // String | 

var opts = { 
  'sortField': "sortField_example", // String | 
  'sortReverse': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMDLSearchResults(searchId, pageNo, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchId** | **String**|  | 
 **pageNo** | **String**|  | 
 **sortField** | **String**|  | [optional] 
 **sortReverse** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="searchAppellateCases"></a>
# **searchAppellateCases**
> InlineResponse200 searchAppellateCases(opts)

PACER NCL Appellate Case Search

PACER NCL Appellate Case Search

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.NclApi();

var opts = { 
  'courtId': "courtId_example", // String | 
  'caseNo': "caseNo_example", // String | 
  'caseTitle': "caseTitle_example", // String | 
  'nos': "nos_example", // String | 
  'filedFrom': "filedFrom_example", // String | 
  'filedTo': "filedTo_example", // String | 
  'closedFrom': "closedFrom_example", // String | 
  'closedTo': "closedTo_example", // String | 
  'partyName': "partyName_example", // String | 
  'partyExact': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchAppellateCases(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtId** | **String**|  | [optional] 
 **caseNo** | **String**|  | [optional] 
 **caseTitle** | **String**|  | [optional] 
 **nos** | **String**|  | [optional] 
 **filedFrom** | **String**|  | [optional] 
 **filedTo** | **String**|  | [optional] 
 **closedFrom** | **String**|  | [optional] 
 **closedTo** | **String**|  | [optional] 
 **partyName** | **String**|  | [optional] 
 **partyExact** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="searchBankruptcyCases"></a>
# **searchBankruptcyCases**
> InlineResponse200 searchBankruptcyCases(opts)

PACER NCL Bankruptcy Case Search

PACER NCL Bankruptcy Case Search

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.NclApi();

var opts = { 
  'courtId': "courtId_example", // String | 
  'chapter': ["chapter_example"], // [String] | 
  'caseNo': "caseNo_example", // String | 
  'caseTitle': "caseTitle_example", // String | 
  'filedFrom': "filedFrom_example", // String | 
  'filedTo': "filedTo_example", // String | 
  'closedFrom': "closedFrom_example", // String | 
  'closedTo': "closedTo_example", // String | 
  'dismissedFrom': "dismissedFrom_example", // String | 
  'dismissedTo': "dismissedTo_example", // String | 
  'dischargedFrom': "dischargedFrom_example", // String | 
  'dischargedTo': "dischargedTo_example", // String | 
  'partyName': "partyName_example", // String | 
  'partyExact': true, // Boolean | 
  'ssn4': "ssn4_example", // String | 
  'ssntin': "ssntin_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchBankruptcyCases(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtId** | **String**|  | [optional] 
 **chapter** | [**[String]**](String.md)|  | [optional] 
 **caseNo** | **String**|  | [optional] 
 **caseTitle** | **String**|  | [optional] 
 **filedFrom** | **String**|  | [optional] 
 **filedTo** | **String**|  | [optional] 
 **closedFrom** | **String**|  | [optional] 
 **closedTo** | **String**|  | [optional] 
 **dismissedFrom** | **String**|  | [optional] 
 **dismissedTo** | **String**|  | [optional] 
 **dischargedFrom** | **String**|  | [optional] 
 **dischargedTo** | **String**|  | [optional] 
 **partyName** | **String**|  | [optional] 
 **partyExact** | **Boolean**|  | [optional] 
 **ssn4** | **String**|  | [optional] 
 **ssntin** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="searchCivilCases"></a>
# **searchCivilCases**
> InlineResponse200 searchCivilCases(opts)

PACER NCL Civil Case Search

PACER NCL Civil Case Search

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.NclApi();

var opts = { 
  'courtId': "courtId_example", // String | 
  'caseNo': "caseNo_example", // String | 
  'caseTitle': "caseTitle_example", // String | 
  'nos': "nos_example", // String | 
  'filedFrom': "filedFrom_example", // String | 
  'filedTo': "filedTo_example", // String | 
  'closedFrom': "closedFrom_example", // String | 
  'closedTo': "closedTo_example", // String | 
  'partyName': "partyName_example", // String | 
  'partyExact': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchCivilCases(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtId** | **String**|  | [optional] 
 **caseNo** | **String**|  | [optional] 
 **caseTitle** | **String**|  | [optional] 
 **nos** | **String**|  | [optional] 
 **filedFrom** | **String**|  | [optional] 
 **filedTo** | **String**|  | [optional] 
 **closedFrom** | **String**|  | [optional] 
 **closedTo** | **String**|  | [optional] 
 **partyName** | **String**|  | [optional] 
 **partyExact** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="searchCriminalCases"></a>
# **searchCriminalCases**
> InlineResponse200 searchCriminalCases(opts)

PACER NCL Criminal Case Search

PACER NCL Criminal Case Search

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.NclApi();

var opts = { 
  'courtId': "courtId_example", // String | 
  'caseNo': "caseNo_example", // String | 
  'caseTitle': "caseTitle_example", // String | 
  'filedFrom': "filedFrom_example", // String | 
  'filedTo': "filedTo_example", // String | 
  'closedFrom': "closedFrom_example", // String | 
  'closedTo': "closedTo_example", // String | 
  'partyName': "partyName_example", // String | 
  'partyExact': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchCriminalCases(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtId** | **String**|  | [optional] 
 **caseNo** | **String**|  | [optional] 
 **caseTitle** | **String**|  | [optional] 
 **filedFrom** | **String**|  | [optional] 
 **filedTo** | **String**|  | [optional] 
 **closedFrom** | **String**|  | [optional] 
 **closedTo** | **String**|  | [optional] 
 **partyName** | **String**|  | [optional] 
 **partyExact** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="searchMDLCases"></a>
# **searchMDLCases**
> InlineResponse200 searchMDLCases(opts)

PACER NCL MDL Case Search

PACER NCL MDL Case Search

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.NclApi();

var opts = { 
  'courtId': "courtId_example", // String | 
  'mdlId': "mdlId_example", // String | 
  'caseNo': "caseNo_example", // String | 
  'caseTitle': "caseTitle_example", // String | 
  'filedFrom': "filedFrom_example", // String | 
  'filedTo': "filedTo_example", // String | 
  'closedFrom': "closedFrom_example", // String | 
  'closedTo': "closedTo_example", // String | 
  'partyName': "partyName_example", // String | 
  'partyExact': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchMDLCases(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtId** | **String**|  | [optional] 
 **mdlId** | **String**|  | [optional] 
 **caseNo** | **String**|  | [optional] 
 **caseTitle** | **String**|  | [optional] 
 **filedFrom** | **String**|  | [optional] 
 **filedTo** | **String**|  | [optional] 
 **closedFrom** | **String**|  | [optional] 
 **closedTo** | **String**|  | [optional] 
 **partyName** | **String**|  | [optional] 
 **partyExact** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

