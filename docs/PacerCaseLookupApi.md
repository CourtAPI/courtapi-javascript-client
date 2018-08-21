# CourtApi.PacerCaseLookupApi

All URIs are relative to *https://train.v1.courtapi.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchBankruptcyCases**](PacerCaseLookupApi.md#searchBankruptcyCases) | **POST** /courts/pacer/{court_code}/cases/report/bankruptcy | Local Court Bankruptcy Cases Report
[**searchCivilCases**](PacerCaseLookupApi.md#searchCivilCases) | **POST** /courts/pacer/{court_code}/cases/report/civil | Local Court Civil Cases Report
[**searchCourtCases**](PacerCaseLookupApi.md#searchCourtCases) | **POST** /courts/pacer/{court_code}/cases/search | Local Court Case Search
[**searchCriminalCases**](PacerCaseLookupApi.md#searchCriminalCases) | **POST** /courts/pacer/{court_code}/cases/report/criminal | Local Court Criminal Cases Report


<a name="searchBankruptcyCases"></a>
# **searchBankruptcyCases**
> searchBankruptcyCases(courtCode, opts)

Local Court Bankruptcy Cases Report

Returns detailed information on matching cases.

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.PacerCaseLookupApi();

var courtCode = "courtCode_example"; // String | Court Code (must be a Bankruptcy Court)

var opts = { 
  'chapter': "chapter_example", // String | Chapter
  'caseType': "caseType_example", // String | Case Type
  'dateType': "dateType_example", // String | Date Type
  'dateFrom': "dateFrom_example", // String | Date From
  'dateTo': "dateTo_example", // String | Date To
  'partyInfo': true, // Boolean | Party information
  'assetNotice': "assetNotice_example", // String | Asset Notice
  'natureOfDebt': "natureOfDebt_example", // String | Nature of Debt
  'typeOfDebtor': "typeOfDebtor_example", // String | Type of Debtor
  'natureOfBusiness': "natureOfBusiness_example", // String | Nature of Business
  'openCases': true, // Boolean | Open cases
  'closedCases': true, // Boolean | Closed cases
  'voluntary': true, // Boolean | Voluntary
  'involuntary': true, // Boolean | Involuntary
  'smallbusiness': true, // Boolean | Small Business Cases
  'proseonly': true, // Boolean | Pro se cases only
  'maxCostCents': "maxCostCents_example" // String | Max Cost Cents
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.searchBankruptcyCases(courtCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code (must be a Bankruptcy Court) | 
 **chapter** | **String**| Chapter | [optional] 
 **caseType** | **String**| Case Type | [optional] 
 **dateType** | **String**| Date Type | [optional] 
 **dateFrom** | **String**| Date From | [optional] 
 **dateTo** | **String**| Date To | [optional] 
 **partyInfo** | **Boolean**| Party information | [optional] 
 **assetNotice** | **String**| Asset Notice | [optional] 
 **natureOfDebt** | **String**| Nature of Debt | [optional] 
 **typeOfDebtor** | **String**| Type of Debtor | [optional] 
 **natureOfBusiness** | **String**| Nature of Business | [optional] 
 **openCases** | **Boolean**| Open cases | [optional] 
 **closedCases** | **Boolean**| Closed cases | [optional] 
 **voluntary** | **Boolean**| Voluntary | [optional] 
 **involuntary** | **Boolean**| Involuntary | [optional] 
 **smallbusiness** | **Boolean**| Small Business Cases | [optional] 
 **proseonly** | **Boolean**| Pro se cases only | [optional] 
 **maxCostCents** | **String**| Max Cost Cents | [optional] 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="searchCivilCases"></a>
# **searchCivilCases**
> searchCivilCases(courtCode, opts)

Local Court Civil Cases Report

Local Court Civil Cases Report

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.PacerCaseLookupApi();

var courtCode = "courtCode_example"; // String | Court Code

var opts = { 
  'office': "office_example", // String | Office
  'caseType': "caseType_example", // String | Case Type
  'natureOfSuit': "natureOfSuit_example", // String | Nature of Suit
  'cause': "cause_example", // String | Cause of Action
  'jurisdic': "jurisdic_example", // String | jurisdiction
  'caseFlags': "caseFlags_example", // String | Case flags
  'terminalDigit': "terminalDigit_example", // String | Terminal digit(s)
  'openCases': true, // Boolean | Open cases
  'closedCases': true, // Boolean | Closed cases
  'dateFrom': "dateFrom_example", // String | Date From
  'dateTo': "dateTo_example", // String | Date To
  'maxCostCents': "maxCostCents_example" // String | Max Cost Cents
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.searchCivilCases(courtCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **office** | **String**| Office | [optional] 
 **caseType** | **String**| Case Type | [optional] 
 **natureOfSuit** | **String**| Nature of Suit | [optional] 
 **cause** | **String**| Cause of Action | [optional] 
 **jurisdic** | **String**| jurisdiction | [optional] 
 **caseFlags** | **String**| Case flags | [optional] 
 **terminalDigit** | **String**| Terminal digit(s) | [optional] 
 **openCases** | **Boolean**| Open cases | [optional] 
 **closedCases** | **Boolean**| Closed cases | [optional] 
 **dateFrom** | **String**| Date From | [optional] 
 **dateTo** | **String**| Date To | [optional] 
 **maxCostCents** | **String**| Max Cost Cents | [optional] 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="searchCourtCases"></a>
# **searchCourtCases**
> searchCourtCases(courtCode, opts)

Local Court Case Search

Query Court for cases that match the specified filters.

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.PacerCaseLookupApi();

var courtCode = "courtCode_example"; // String | Court Code

var opts = { 
  'office': "office_example", // String | Office
  'caseNo': "caseNo_example", // String | Case Number
  'lastBusinessName': "lastBusinessName_example", // String | Last / Business Name
  'firstName': "firstName_example", // String | First Name
  'middleName': "middleName_example", // String | Middle Name
  'partyExact': true, // Boolean | Exact matches only
  'personType': "personType_example", // String | Person Type
  'ssntin': "ssntin_example", // String | SSN / ITIN
  'taxIdEin': 56, // Number | Tax ID / EIN
  'openCases': true, // Boolean | Open cases
  'closedCases': true, // Boolean | Closed cases
  'filedFrom': "filedFrom_example", // String | Filed From Date
  'filedTo': "filedTo_example", // String | Filed To Date
  'lastEntryFrom': "lastEntryFrom_example", // String | Last Entry From Date
  'lastEntryTo': "lastEntryTo_example", // String | Last Entry To Date
  'nos': "nos_example", // String | Nature of Suit
  'causeOfAction': "causeOfAction_example" // String | Cause of Action
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.searchCourtCases(courtCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **office** | **String**| Office | [optional] 
 **caseNo** | **String**| Case Number | [optional] 
 **lastBusinessName** | **String**| Last / Business Name | [optional] 
 **firstName** | **String**| First Name | [optional] 
 **middleName** | **String**| Middle Name | [optional] 
 **partyExact** | **Boolean**| Exact matches only | [optional] 
 **personType** | **String**| Person Type | [optional] 
 **ssntin** | **String**| SSN / ITIN | [optional] 
 **taxIdEin** | **Number**| Tax ID / EIN | [optional] 
 **openCases** | **Boolean**| Open cases | [optional] 
 **closedCases** | **Boolean**| Closed cases | [optional] 
 **filedFrom** | **String**| Filed From Date | [optional] 
 **filedTo** | **String**| Filed To Date | [optional] 
 **lastEntryFrom** | **String**| Last Entry From Date | [optional] 
 **lastEntryTo** | **String**| Last Entry To Date | [optional] 
 **nos** | **String**| Nature of Suit | [optional] 
 **causeOfAction** | **String**| Cause of Action | [optional] 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="searchCriminalCases"></a>
# **searchCriminalCases**
> searchCriminalCases(courtCode, opts)

Local Court Criminal Cases Report

Local Court Criminal Cases Report

### Example
```javascript
var CourtApi = require('court_api');
var defaultClient = CourtApi.ApiClient.instance;

// Configure HTTP basic authorization: www-authenticate
var www-authenticate = defaultClient.authentications['www-authenticate'];
www-authenticate.username = 'YOUR USERNAME';
www-authenticate.password = 'YOUR PASSWORD';

var apiInstance = new CourtApi.PacerCaseLookupApi();

var courtCode = "courtCode_example"; // String | Court Code

var opts = { 
  'office': "office_example", // String | Office
  'caseType': "caseType_example", // String | Case Type
  'caseFlags': "caseFlags_example", // String | Case flags
  'citation': "citation_example", // String | Citation
  'pendingCitations': true, // Boolean | Pending Citations
  'terminatedCitations': true, // Boolean | Disposed Citations
  'dateFrom': "dateFrom_example", // String | Date From
  'dateTo': "dateTo_example", // String | Date To
  'terminalDigit': 56, // Number | Terminal digit(s)
  'pendingDefendants': true, // Boolean | Pending defendants
  'terminatedDefendants': true, // Boolean | Terminated defendants
  'maxCostCents': "maxCostCents_example" // String | Max Cost Cents
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.searchCriminalCases(courtCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtCode** | **String**| Court Code | 
 **office** | **String**| Office | [optional] 
 **caseType** | **String**| Case Type | [optional] 
 **caseFlags** | **String**| Case flags | [optional] 
 **citation** | **String**| Citation | [optional] 
 **pendingCitations** | **Boolean**| Pending Citations | [optional] 
 **terminatedCitations** | **Boolean**| Disposed Citations | [optional] 
 **dateFrom** | **String**| Date From | [optional] 
 **dateTo** | **String**| Date To | [optional] 
 **terminalDigit** | **Number**| Terminal digit(s) | [optional] 
 **pendingDefendants** | **Boolean**| Pending defendants | [optional] 
 **terminatedDefendants** | **Boolean**| Terminated defendants | [optional] 
 **maxCostCents** | **String**| Max Cost Cents | [optional] 

### Return type

null (empty response body)

### Authorization

[www-authenticate](../README.md#www-authenticate)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

