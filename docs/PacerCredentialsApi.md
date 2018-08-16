# CourtApi.PacerCredentialsApi

All URIs are relative to *https://v1.courtapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCredentials**](PacerCredentialsApi.md#deleteCredentials) | **DELETE** /pacer/credentials | Delete Credentials
[**getCredentials**](PacerCredentialsApi.md#getCredentials) | **GET** /pacer/credentials | Get Credentials
[**saveCredentials**](PacerCredentialsApi.md#saveCredentials) | **POST** /pacer/credentials | Create/Update Credentials
[**validatePacerCredentials**](PacerCredentialsApi.md#validatePacerCredentials) | **POST** /pacer/credentials/validate | Validate Credentials


<a name="deleteCredentials"></a>
# **deleteCredentials**
> deleteCredentials()

Delete Credentials

Delete Credentials

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.PacerCredentialsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCredentials(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getCredentials"></a>
# **getCredentials**
> getCredentials()

Get Credentials

Get Credentials

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.PacerCredentialsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getCredentials(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="saveCredentials"></a>
# **saveCredentials**
> saveCredentials(opts)

Create/Update Credentials

Create/Update Credentials

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.PacerCredentialsApi();

var opts = { 
  'pacerUser': "pacerUser_example", // String | PACER User Name
  'pacerPass': "pacerPass_example" // String | PACER Password
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveCredentials(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUser** | **String**| PACER User Name | [optional] 
 **pacerPass** | **String**| PACER Password | [optional] 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="validatePacerCredentials"></a>
# **validatePacerCredentials**
> validatePacerCredentials(opts)

Validate Credentials

Validate Credentials

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.PacerCredentialsApi();

var opts = { 
  'pacerUser': "pacerUser_example", // String | PACER User Name
  'pacerPass': "pacerPass_example" // String | PACER Password
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.validatePacerCredentials(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUser** | **String**| PACER User Name | [optional] 
 **pacerPass** | **String**| PACER Password | [optional] 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

