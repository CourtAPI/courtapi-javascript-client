# CourtApi.NclApi

All URIs are relative to *https://v1.courtapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pacerNclAppellatePost**](NclApi.md#pacerNclAppellatePost) | **POST** /pacer/ncl/appellate | PACER NCL Appellate Case Search
[**pacerNclAppellateSearchIdGet**](NclApi.md#pacerNclAppellateSearchIdGet) | **GET** /pacer/ncl/appellate/{search_id} | PACER NCL Appellate Case Search Result Navigation
[**pacerNclBankruptcyPost**](NclApi.md#pacerNclBankruptcyPost) | **POST** /pacer/ncl/bankruptcy | PACER NCL Bankruptcy Case Search
[**pacerNclBankruptcySearchIdGet**](NclApi.md#pacerNclBankruptcySearchIdGet) | **GET** /pacer/ncl/bankruptcy/{search_id} | PACER NCL Bankruptcy Case Search Result Navigation
[**pacerNclCivilPost**](NclApi.md#pacerNclCivilPost) | **POST** /pacer/ncl/civil | PACER NCL Civil Case Search
[**pacerNclCivilSearchIdGet**](NclApi.md#pacerNclCivilSearchIdGet) | **GET** /pacer/ncl/civil/{search_id} | PACER NCL Civil Case Search Result Navigation
[**pacerNclCriminalPost**](NclApi.md#pacerNclCriminalPost) | **POST** /pacer/ncl/criminal | PACER NCL Criminal Case Search
[**pacerNclCriminalSearchIdGet**](NclApi.md#pacerNclCriminalSearchIdGet) | **GET** /pacer/ncl/criminal/{search_id} | PACER NCL Criminal Case Search Result Navigation
[**pacerNclMdlPost**](NclApi.md#pacerNclMdlPost) | **POST** /pacer/ncl/mdl | PACER NCL MDL Case Search
[**pacerNclMdlSearchIdGet**](NclApi.md#pacerNclMdlSearchIdGet) | **GET** /pacer/ncl/mdl/{search_id} | PACER NCL MDL Case Search Result Navigation


<a name="pacerNclAppellatePost"></a>
# **pacerNclAppellatePost**
> InlineResponse200 pacerNclAppellatePost(opts)

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
apiInstance.pacerNclAppellatePost(opts, callback);
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

<a name="pacerNclAppellateSearchIdGet"></a>
# **pacerNclAppellateSearchIdGet**
> InlineResponse200 pacerNclAppellateSearchIdGet(searchId, pageNo, opts)

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
apiInstance.pacerNclAppellateSearchIdGet(searchId, pageNo, opts, callback);
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

<a name="pacerNclBankruptcyPost"></a>
# **pacerNclBankruptcyPost**
> InlineResponse200 pacerNclBankruptcyPost(opts)

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
apiInstance.pacerNclBankruptcyPost(opts, callback);
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

<a name="pacerNclBankruptcySearchIdGet"></a>
# **pacerNclBankruptcySearchIdGet**
> InlineResponse200 pacerNclBankruptcySearchIdGet(searchId, pageNo, opts)

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
apiInstance.pacerNclBankruptcySearchIdGet(searchId, pageNo, opts, callback);
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

<a name="pacerNclCivilPost"></a>
# **pacerNclCivilPost**
> InlineResponse200 pacerNclCivilPost(opts)

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
apiInstance.pacerNclCivilPost(opts, callback);
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

<a name="pacerNclCivilSearchIdGet"></a>
# **pacerNclCivilSearchIdGet**
> InlineResponse200 pacerNclCivilSearchIdGet(searchId, pageNo, opts)

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
apiInstance.pacerNclCivilSearchIdGet(searchId, pageNo, opts, callback);
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

<a name="pacerNclCriminalPost"></a>
# **pacerNclCriminalPost**
> InlineResponse200 pacerNclCriminalPost(opts)

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
apiInstance.pacerNclCriminalPost(opts, callback);
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

<a name="pacerNclCriminalSearchIdGet"></a>
# **pacerNclCriminalSearchIdGet**
> InlineResponse200 pacerNclCriminalSearchIdGet(searchId, pageNo, opts)

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
apiInstance.pacerNclCriminalSearchIdGet(searchId, pageNo, opts, callback);
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

<a name="pacerNclMdlPost"></a>
# **pacerNclMdlPost**
> InlineResponse200 pacerNclMdlPost(opts)

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
apiInstance.pacerNclMdlPost(opts, callback);
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

<a name="pacerNclMdlSearchIdGet"></a>
# **pacerNclMdlSearchIdGet**
> InlineResponse200 pacerNclMdlSearchIdGet(searchId, pageNo, opts)

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
apiInstance.pacerNclMdlSearchIdGet(searchId, pageNo, opts, callback);
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

