# CourtApi.CourtsApi

All URIs are relative to *https://train.v1.courtapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCourtDetails**](CourtsApi.md#getCourtDetails) | **GET** /courts/pacer/{court_code} | PACER Court Details
[**getCourts**](CourtsApi.md#getCourts) | **GET** /courts/pacer | All PACER Courts


<a name="getCourtDetails"></a>
# **getCourtDetails**
> getCourtDetails(courtCode)

PACER Court Details

PACER Court Details

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CourtsApi();

var courtCode = "courtCode_example"; // String | Court Code


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCourtDetails(courtCode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getCourts"></a>
# **getCourts**
> getCourts(opts)

All PACER Courts

All PACER Courts

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.CourtsApi();

var opts = { 
  'type': "type_example", // String | Court Type
  'test': true // Boolean | Filter Test Courts
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCourts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Court Type | [optional] 
 **test** | **Boolean**| Filter Test Courts | [optional] 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

