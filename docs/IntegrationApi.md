# IntegrationApi

All URIs are relative to *https://yourbaseurl.talon.one*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**activateLoyaltyPoints**](IntegrationApi.md#activateloyaltypoints) | **POST** /v1/loyalty_programs/{loyaltyProgramId}/activate_points | Activate loyalty points |
| [**bestPriorPrice**](IntegrationApi.md#bestpriorpriceoperation) | **POST** /v1/best_prior_price | Fetch best prior price |
| [**createAudienceV2**](IntegrationApi.md#createaudiencev2) | **POST** /v2/audiences | Create audience |
| [**createCouponReservation**](IntegrationApi.md#createcouponreservation) | **POST** /v1/coupon_reservations/{couponValue} | Create coupon reservation |
| [**createReferral**](IntegrationApi.md#createreferral) | **POST** /v1/referrals | Create referral code for an advocate |
| [**createReferralsForMultipleAdvocates**](IntegrationApi.md#createreferralsformultipleadvocates) | **POST** /v1/referrals_for_multiple_advocates | Create referral codes for multiple advocates |
| [**deleteAudienceMembershipsV2**](IntegrationApi.md#deleteaudiencemembershipsv2) | **DELETE** /v2/audiences/{audienceId}/memberships | Delete audience memberships |
| [**deleteAudienceV2**](IntegrationApi.md#deleteaudiencev2) | **DELETE** /v2/audiences/{audienceId} | Delete audience |
| [**deleteCouponReservation**](IntegrationApi.md#deletecouponreservation) | **DELETE** /v1/coupon_reservations/{couponValue} | Delete coupon reservations |
| [**deleteCustomerData**](IntegrationApi.md#deletecustomerdata) | **DELETE** /v1/customer_data/{integrationId} | Delete customer\&#39;s personal data |
| [**deleteLoyaltyTransactionsFromLedgers**](IntegrationApi.md#deleteloyaltytransactionsfromledgers) | **POST** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/delete_transactions | Delete customer\&#39;s transactions from loyalty ledgers |
| [**generateLoyaltyCard**](IntegrationApi.md#generateloyaltycard) | **POST** /v1/loyalty_programs/{loyaltyProgramId}/cards | Generate loyalty card |
| [**getCustomerAchievementHistory**](IntegrationApi.md#getcustomerachievementhistory) | **GET** /v1/customer_profiles/{integrationId}/achievements/{achievementId} | List customer\&#39;s achievement history |
| [**getCustomerAchievements**](IntegrationApi.md#getcustomerachievements) | **GET** /v1/customer_profiles/{integrationId}/achievements | List customer\&#39;s available achievements |
| [**getCustomerInventory**](IntegrationApi.md#getcustomerinventory) | **GET** /v1/customer_profiles/{integrationId}/inventory | List customer data |
| [**getCustomerSession**](IntegrationApi.md#getcustomersession) | **GET** /v2/customer_sessions/{customerSessionId} | Get customer session |
| [**getLoyaltyBalances**](IntegrationApi.md#getloyaltybalances) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/balances | Get customer\&#39;s loyalty balances |
| [**getLoyaltyCardBalances**](IntegrationApi.md#getloyaltycardbalances) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/balances | Get card\&#39;s point balances |
| [**getLoyaltyCardPoints**](IntegrationApi.md#getloyaltycardpoints) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/points | List card\&#39;s unused loyalty points |
| [**getLoyaltyCardTransactions**](IntegrationApi.md#getloyaltycardtransactions) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/transactions | List card\&#39;s transactions |
| [**getLoyaltyProgramProfilePoints**](IntegrationApi.md#getloyaltyprogramprofilepoints) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/points | List customer\&#39;s unused loyalty points |
| [**getLoyaltyProgramProfileTransactions**](IntegrationApi.md#getloyaltyprogramprofiletransactions) | **GET** /v1/loyalty_programs/{loyaltyProgramId}/profile/{integrationId}/transactions | List customer\&#39;s loyalty transactions |
| [**getReservedCustomers**](IntegrationApi.md#getreservedcustomers) | **GET** /v1/coupon_reservations/customerprofiles/{couponValue} | List customers that have this coupon reserved |
| [**linkLoyaltyCardToProfile**](IntegrationApi.md#linkloyaltycardtoprofile) | **POST** /v2/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/link_profile | Link customer profile to card |
| [**reopenCustomerSession**](IntegrationApi.md#reopencustomersession) | **PUT** /v2/customer_sessions/{customerSessionId}/reopen | Reopen customer session |
| [**returnCartItems**](IntegrationApi.md#returncartitems) | **POST** /v2/customer_sessions/{customerSessionId}/returns | Return cart items |
| [**syncCatalog**](IntegrationApi.md#synccatalog) | **PUT** /v1/catalogs/{catalogId}/sync | Sync cart item catalog |
| [**trackEventV2**](IntegrationApi.md#trackeventv2) | **POST** /v2/events | Track event |
| [**unlinkLoyaltyCardFromProfile**](IntegrationApi.md#unlinkloyaltycardfromprofile) | **POST** /v2/loyalty_programs/{loyaltyProgramId}/cards/{loyaltyCardId}/unlink_profile | Unlink customer profile from a loyalty card |
| [**updateAudienceCustomersAttributes**](IntegrationApi.md#updateaudiencecustomersattributes) | **PUT** /v2/audience_customers/{audienceId}/attributes | Update profile attributes for all customers in audience |
| [**updateAudienceV2**](IntegrationApi.md#updateaudiencev2) | **PUT** /v2/audiences/{audienceId} | Update audience name |
| [**updateCustomerProfileAudiences**](IntegrationApi.md#updatecustomerprofileaudiences) | **POST** /v2/customer_audiences | Update multiple customer profiles\&#39; audiences |
| [**updateCustomerProfileV2**](IntegrationApi.md#updatecustomerprofilev2) | **PUT** /v2/customer_profiles/{integrationId} | Update customer profile |
| [**updateCustomerProfilesV2**](IntegrationApi.md#updatecustomerprofilesv2) | **PUT** /v2/customer_profiles | Update multiple customer profiles |
| [**updateCustomerSessionV2**](IntegrationApi.md#updatecustomersessionv2) | **PUT** /v2/customer_sessions/{customerSessionId} | Update customer session |



## activateLoyaltyPoints

> ActivateLoyaltyPointsResponse activateLoyaltyPoints(loyaltyProgramId, activateLoyaltyPoints)

Activate loyalty points

Activate points when a defined action occurs.  You can activate pending points using one of the following parameters: - &#x60;sessionId&#x60;: Activates all points earned in the specified session.  - &#x60;transactionUUIDs&#x60;: Activates points earned in the transactions specified by the  given UUIDs.  

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { ActivateLoyaltyPointsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | The identifier for the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // ActivateLoyaltyPoints | body
    activateLoyaltyPoints: {transactionUUIDs=[8f1a8d7c-9c3e-4a5e-9f0d-2c5f7a3b1cde, 12b3c456-78d9-4e0f-a1b2-3456789abcde]},
  } satisfies ActivateLoyaltyPointsRequest;

  try {
    const data = await api.activateLoyaltyPoints(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | The identifier for the loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **activateLoyaltyPoints** | [ActivateLoyaltyPoints](ActivateLoyaltyPoints.md) | body | |

### Return type

[**ActivateLoyaltyPointsResponse**](ActivateLoyaltyPointsResponse.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## bestPriorPrice

> Array&lt;BestPriorPrice&gt; bestPriorPrice(bestPriorPriceRequest)

Fetch best prior price

Returns the best prior price based on historical pricing data for the specified SKUs within a defined timeframe. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { BestPriorPriceOperationRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: management_key
    apiKey: "YOUR API KEY",
    // To configure API key authorization: manager_auth
    apiKey: "YOUR API KEY",
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // BestPriorPriceRequest | body
    bestPriorPriceRequest: ...,
  } satisfies BestPriorPriceOperationRequest;

  try {
    const data = await api.bestPriorPrice(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **bestPriorPriceRequest** | [BestPriorPriceRequest](BestPriorPriceRequest.md) | body | |

### Return type

[**Array&lt;BestPriorPrice&gt;**](BestPriorPrice.md)

### Authorization

[management_key](../README.md#management_key), [manager_auth](../README.md#manager_auth), [api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Ok |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createAudienceV2

> Audience createAudienceV2(newAudience)

Create audience

Create an audience. The audience can be created directly from scratch or can come from third party platforms.  **Note:** Audiences can also be created from scratch via the Campaign Manager. See the [docs](https://docs.talon.one/docs/product/audiences/creating-audiences).  To create an audience from an existing audience from a [technology partner](https://docs.talon.one/docs/dev/technology-partners/overview): 1. Set the &#x60;integration&#x60; property to &#x60;mparticle&#x60;, &#x60;segment&#x60; etc., depending on a third-party platform. 1. Set &#x60;integrationId&#x60; to the ID of this audience in a third-party platform.  To create an audience from an existing audience in another platform: 1. Do not use the &#x60;integration&#x60; property. 1. Set &#x60;integrationId&#x60; to the ID of this audience in the 3rd-party platform.  To create an audience from scratch: 1. Only set the &#x60;name&#x60; property.  Once you create your first audience, audience-specific rule conditions are enabled in the Rule Builder. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { CreateAudienceV2Request } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // NewAudience | body
    newAudience: ...,
  } satisfies CreateAudienceV2Request;

  try {
    const data = await api.createAudienceV2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newAudience** | [NewAudience](NewAudience.md) | body | |

### Return type

[**Audience**](Audience.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **409** | Conflict. An Audience with this ID already exists for this integration. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createCouponReservation

> Coupon createCouponReservation(couponValue, couponReservations)

Create coupon reservation

Create a coupon reservation for the specified customer profiles on the specified coupon.  You can also create a reservation via the Campaign Manager using the [Create coupon code reservation](https://docs.talon.one/docs/product/rules/effects/using-effects#reserving-a-coupon-code) effect.  **Note:**  - If the **Reservation mandatory** option was selected when creating the   specified coupon, the endpoint creates a **hard** reservation, meaning only users who have   this coupon code reserved can redeem it.   Otherwise, the endpoint creates a **soft** reservation, meaning the coupon   is associated with the specified customer profiles (they show up when using   the [List customer data](https://docs.talon.one/integration-api#operation/getCustomerInventory)   endpoint), but any user can redeem it.   This can be useful, for example, to display a _coupon wallet_ for customers   when they visit your store.  - If the **Coupon visibility** option was selected when creating the   specified coupon, the coupon code is implicitly soft-reserved for all customers, and the code   will be returned for all customer profiles in the [List customer   data](https://docs.talon.one/integration-api#operation/getCustomerInventory) endpoint.  - This endpoint overrides the coupon reservation limit set when   [the coupon is created](https://docs.talon.one/docs/product/campaigns/coupons/creating-coupons).  To ensure that coupons cannot be reserved after the reservation limit is reached, use the [Create coupon code reservation](https://docs.talon.one/docs/product/rules/effects/using-effects#reserving-a-coupon-code) effect in the Rule Builder and the [Update customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2) endpoint.  To delete a reservation, use the [Delete reservation](https://docs.talon.one/integration-api#tag/Coupons/operation/deleteCouponReservation) endpoint. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { CreateCouponReservationRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The code of the coupon.  **Important:** The coupon code requires [URL encoding](https://www.w3schools.com/tags//ref_urlencode.asp)  if it contains special characters. For example, you must encode `SUMMER25%OFF` as `SUMMER25%25OFF`. 
    couponValue: couponValue_example,
    // CouponReservations | body
    couponReservations: ...,
  } satisfies CreateCouponReservationRequest;

  try {
    const data = await api.createCouponReservation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **couponValue** | `string` | The code of the coupon.  **Important:** The coupon code requires [URL encoding](https://www.w3schools.com/tags//ref_urlencode.asp)  if it contains special characters. For example, you must encode &#x60;SUMMER25%OFF&#x60; as &#x60;SUMMER25%25OFF&#x60;.  | [Defaults to `undefined`] |
| **couponReservations** | [CouponReservations](CouponReservations.md) | body | |

### Return type

[**Coupon**](Coupon.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createReferral

> Referral createReferral(newReferral)

Create referral code for an advocate

Creates a referral code for an advocate. The code will be valid for the referral campaign for which is created, indicated in the &#x60;campaignId&#x60; parameter, and will be associated with the profile specified in the &#x60;advocateProfileIntegrationId&#x60; parameter as the advocate\&#39;s profile.  **Note:** Any [referral limits](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets#referral-limits) set are ignored when you use this endpoint. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { CreateReferralRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // NewReferral | body
    newReferral: ...,
  } satisfies CreateReferralRequest;

  try {
    const data = await api.createReferral(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newReferral** | [NewReferral](NewReferral.md) | body | |

### Return type

[**Referral**](Referral.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createReferralsForMultipleAdvocates

> CreateReferralsForMultipleAdvocates201Response createReferralsForMultipleAdvocates(newReferralsForMultipleAdvocates, silent)

Create referral codes for multiple advocates

Creates unique referral codes for multiple advocates. The code will be valid for the referral campaign for which it is created, indicated in the &#x60;campaignId&#x60; parameter, and one referral code will be associated with one advocate using the profile specified in the &#x60;advocateProfileIntegrationId&#x60; parameter as the advocate\&#39;s profile.  **Note:** Any [referral limits](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-budgets#referral-limits) set are ignored when you use this endpoint. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { CreateReferralsForMultipleAdvocatesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // NewReferralsForMultipleAdvocates | body
    newReferralsForMultipleAdvocates: ...,
    // string | Possible values: `yes` or `no`. - `yes`: Increases the performance of the API call by returning a 204 response. - `no`: Returns a 200 response that contains the updated customer profiles.  (optional)
    silent: silent_example,
  } satisfies CreateReferralsForMultipleAdvocatesRequest;

  try {
    const data = await api.createReferralsForMultipleAdvocates(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newReferralsForMultipleAdvocates** | [NewReferralsForMultipleAdvocates](NewReferralsForMultipleAdvocates.md) | body | |
| **silent** | `string` | Possible values: &#x60;yes&#x60; or &#x60;no&#x60;. - &#x60;yes&#x60;: Increases the performance of the API call by returning a 204 response. - &#x60;no&#x60;: Returns a 200 response that contains the updated customer profiles.  | [Optional] [Defaults to `&#39;yes&#39;`] |

### Return type

[**CreateReferralsForMultipleAdvocates201Response**](CreateReferralsForMultipleAdvocates201Response.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **204** | No Content |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAudienceMembershipsV2

> deleteAudienceMembershipsV2(audienceId)

Delete audience memberships

Remove all members from this audience. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { DeleteAudienceMembershipsV2Request } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | The ID of the audience.
    audienceId: 789,
  } satisfies DeleteAudienceMembershipsV2Request;

  try {
    const data = await api.deleteAudienceMembershipsV2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **audienceId** | `number` | The ID of the audience. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteAudienceV2

> deleteAudienceV2(audienceId)

Delete audience

Delete an audience created by a third-party integration.  **Warning:** This endpoint also removes any associations recorded between a customer profile and this audience.  **Note:** Audiences can also be deleted via the Campaign Manager. See the [docs](https://docs.talon.one/docs/product/audiences/managing-audiences#deleting-an-audience). 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { DeleteAudienceV2Request } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | The ID of the audience.
    audienceId: 789,
  } satisfies DeleteAudienceV2Request;

  try {
    const data = await api.deleteAudienceV2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **audienceId** | `number` | The ID of the audience. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCouponReservation

> deleteCouponReservation(couponValue, couponReservations)

Delete coupon reservations

Remove all the coupon reservations from the provided customer profile integration IDs and the provided coupon code. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { DeleteCouponReservationRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The code of the coupon.  **Important:** The coupon code requires [URL encoding](https://www.w3schools.com/tags//ref_urlencode.asp)  if it contains special characters. For example, you must encode `SUMMER25%OFF` as `SUMMER25%25OFF`. 
    couponValue: couponValue_example,
    // CouponReservations | body
    couponReservations: ...,
  } satisfies DeleteCouponReservationRequest;

  try {
    const data = await api.deleteCouponReservation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **couponValue** | `string` | The code of the coupon.  **Important:** The coupon code requires [URL encoding](https://www.w3schools.com/tags//ref_urlencode.asp)  if it contains special characters. For example, you must encode &#x60;SUMMER25%OFF&#x60; as &#x60;SUMMER25%25OFF&#x60;.  | [Defaults to `undefined`] |
| **couponReservations** | [CouponReservations](CouponReservations.md) | body | |

### Return type

`void` (Empty response body)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteCustomerData

> deleteCustomerData(integrationId)

Delete customer\&#39;s personal data

Delete all attributes on the customer profile and on entities that reference this customer profile.  **Important:** - Customer data is deleted from all Applications in the [environment](https://docs.talon.one/docs/product/applications/overview#application-environments)   that the API key belongs to. For example, if you use this endpoint with an API key that belongs to a sandbox Application,   customer data will be deleted from all sandbox Applications. This is because customer data is shared   between Applications from the same environment. - To preserve performance, we recommend avoiding deleting customer data during peak-traffic hours. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { DeleteCustomerDataRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The integration ID of the customer profile. You can get the `integrationId` of a profile using: - A customer session integration ID with the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint. - The Management API with the [List application\'s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint. 
    integrationId: integrationId_example,
  } satisfies DeleteCustomerDataRequest;

  try {
    const data = await api.deleteCustomerData(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **integrationId** | `string` | The integration ID of the customer profile. You can get the &#x60;integrationId&#x60; of a profile using: - A customer session integration ID with the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint. - The Management API with the [List application\&#39;s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint.  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteLoyaltyTransactionsFromLedgers

> deleteLoyaltyTransactionsFromLedgers(loyaltyProgramId, integrationId, deleteLoyaltyTransactionsRequest)

Delete customer\&#39;s transactions from loyalty ledgers

Delete a customer\&#39;s transactions in all loyalty ledgers or a specified ledger.  **Note:** To retrieve loyalty transaction logs for a specific customer in a given loyalty program, use the [List customer\&#39;s loyalty transactions](https://docs.talon.one/integration-api#tag/Loyalty/operation/getLoyaltyProgramProfileTransactions) endpoint. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { DeleteLoyaltyTransactionsFromLedgersRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | Identifier of the profile-based loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | The integration ID of the customer profile. You can get the `integrationId` of a profile using: - A customer session integration ID with the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint. - The Management API with the [List application\'s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint. 
    integrationId: integrationId_example,
    // DeleteLoyaltyTransactionsRequest
    deleteLoyaltyTransactionsRequest: ...,
  } satisfies DeleteLoyaltyTransactionsFromLedgersRequest;

  try {
    const data = await api.deleteLoyaltyTransactionsFromLedgers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the profile-based loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **integrationId** | `string` | The integration ID of the customer profile. You can get the &#x60;integrationId&#x60; of a profile using: - A customer session integration ID with the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint. - The Management API with the [List application\&#39;s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint.  | [Defaults to `undefined`] |
| **deleteLoyaltyTransactionsRequest** | [DeleteLoyaltyTransactionsRequest](DeleteLoyaltyTransactionsRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## generateLoyaltyCard

> LoyaltyCard generateLoyaltyCard(loyaltyProgramId, generateLoyaltyCard)

Generate loyalty card

Generate a loyalty card in a specified [card-based loyalty program](https://docs.talon.one/docs/product/loyalty-programs/card-based/card-based-overview).  To link the card to one or more customer profiles, use the &#x60;customerProfileIds&#x60; parameter in the request body.  **Note:** - The number of customer profiles linked to the loyalty card cannot exceed the loyalty program\&#39;s &#x60;usersPerCardLimit&#x60;. To find the program\&#39;s limit, use the [Get loyalty program](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyProgram) endpoint. - If the loyalty program has a defined code format, it will be used for the loyalty card identifier. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { GenerateLoyaltyCardRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // GenerateLoyaltyCard | body
    generateLoyaltyCard: ...,
  } satisfies GenerateLoyaltyCardRequest;

  try {
    const data = await api.generateLoyaltyCard(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **generateLoyaltyCard** | [GenerateLoyaltyCard](GenerateLoyaltyCard.md) | body | |

### Return type

[**LoyaltyCard**](LoyaltyCard.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerAchievementHistory

> GetCustomerAchievementHistory200Response getCustomerAchievementHistory(integrationId, achievementId, progressStatus, startDate, endDate, pageSize, skip)

List customer\&#39;s achievement history

Retrieve all progress history of a given customer in the given achievement. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { GetCustomerAchievementHistoryRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
    integrationId: integrationId_example,
    // number | The achievement identifier. 
    achievementId: 789,
    // Array<'inprogress' | 'completed' | 'expired'> | Filter by customer progress status in the achievement.  (optional)
    progressStatus: ...,
    // Date | Timestamp that filters the results to only contain achievements created on or after the start date. (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Timestamp that filters the results to only contain achievements created before or on the end date. (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
  } satisfies GetCustomerAchievementHistoryRequest;

  try {
    const data = await api.getCustomerAchievementHistory(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **integrationId** | `string` | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | [Defaults to `undefined`] |
| **achievementId** | `number` | The achievement identifier.  | [Defaults to `undefined`] |
| **progressStatus** | `inprogress`, `completed`, `expired` | Filter by customer progress status in the achievement.  | [Optional] [Enum: inprogress, completed, expired] |
| **startDate** | `Date` | Timestamp that filters the results to only contain achievements created on or after the start date. | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` | Timestamp that filters the results to only contain achievements created before or on the end date. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetCustomerAchievementHistory200Response**](GetCustomerAchievementHistory200Response.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerAchievements

> GetCustomerAchievements200Response getCustomerAchievements(integrationId, campaignIds, achievementIds, achievementStatus, currentProgressStatus, pageSize, skip)

List customer\&#39;s available achievements

Retrieve all the achievements available to a given customer and their progress in them. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { GetCustomerAchievementsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
    integrationId: integrationId_example,
    // Array<string> | Filter by one or more Campaign IDs, separated by a comma.  **Note:** If no campaigns are specified, data for all the campaigns in the Application is returned.  (optional)
    campaignIds: ...,
    // Array<string> | Filter by one or more Achievement IDs, separated by a comma.  **Note:** If no achievements are specified, data for all the achievements in the Application is returned.  (optional)
    achievementIds: ...,
    // Array<'active' | 'scheduled'> | Filter by status of the achievement.  **Note:** If the achievement status is not specified, only data for all active achievements in the Application is returned.  (optional)
    achievementStatus: ...,
    // Array<'inprogress' | 'completed' | 'not_started'> | Filter by customer progress status in the achievement.  (optional)
    currentProgressStatus: ...,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
  } satisfies GetCustomerAchievementsRequest;

  try {
    const data = await api.getCustomerAchievements(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **integrationId** | `string` | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | [Defaults to `undefined`] |
| **campaignIds** | `Array<string>` | Filter by one or more Campaign IDs, separated by a comma.  **Note:** If no campaigns are specified, data for all the campaigns in the Application is returned.  | [Optional] |
| **achievementIds** | `Array<string>` | Filter by one or more Achievement IDs, separated by a comma.  **Note:** If no achievements are specified, data for all the achievements in the Application is returned.  | [Optional] |
| **achievementStatus** | `active`, `scheduled` | Filter by status of the achievement.  **Note:** If the achievement status is not specified, only data for all active achievements in the Application is returned.  | [Optional] [Enum: active, scheduled] |
| **currentProgressStatus** | `inprogress`, `completed`, `not_started` | Filter by customer progress status in the achievement.  | [Optional] [Enum: inprogress, completed, not_started] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `1000`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |

### Return type

[**GetCustomerAchievements200Response**](GetCustomerAchievements200Response.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerInventory

> CustomerInventory getCustomerInventory(integrationId, profile, referrals, coupons, loyalty, giveaways, achievements)

List customer data

Return the customer inventory regarding entities referencing this customer profile\&#39;s &#x60;integrationId&#x60;.  Typical entities returned are: customer profile information, referral codes, loyalty points, loyalty cards and reserved coupons. Reserved coupons also include redeemed coupons. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { GetCustomerInventoryRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The integration ID of the customer profile. You can get the `integrationId` of a profile using: - A customer session integration ID with the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint. - The Management API with the [List application\'s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint. 
    integrationId: integrationId_example,
    // boolean | Set to `true` to include customer profile information in the response. (optional)
    profile: true,
    // boolean | Set to `true` to include referral information in the response. (optional)
    referrals: true,
    // boolean | Set to `true` to include coupon information in the response. (optional)
    coupons: true,
    // boolean | Set to `true` to include loyalty information in the response. (optional)
    loyalty: true,
    // boolean | Set to `true` to include giveaways information in the response. (optional)
    giveaways: true,
    // boolean | Set to `true` to include achievement information in the response. (optional)
    achievements: true,
  } satisfies GetCustomerInventoryRequest;

  try {
    const data = await api.getCustomerInventory(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **integrationId** | `string` | The integration ID of the customer profile. You can get the &#x60;integrationId&#x60; of a profile using: - A customer session integration ID with the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint. - The Management API with the [List application\&#39;s customers](https://docs.talon.one/management-api#operation/getApplicationCustomers) endpoint.  | [Defaults to `undefined`] |
| **profile** | `boolean` | Set to &#x60;true&#x60; to include customer profile information in the response. | [Optional] [Defaults to `undefined`] |
| **referrals** | `boolean` | Set to &#x60;true&#x60; to include referral information in the response. | [Optional] [Defaults to `undefined`] |
| **coupons** | `boolean` | Set to &#x60;true&#x60; to include coupon information in the response. | [Optional] [Defaults to `undefined`] |
| **loyalty** | `boolean` | Set to &#x60;true&#x60; to include loyalty information in the response. | [Optional] [Defaults to `undefined`] |
| **giveaways** | `boolean` | Set to &#x60;true&#x60; to include giveaways information in the response. | [Optional] [Defaults to `undefined`] |
| **achievements** | `boolean` | Set to &#x60;true&#x60; to include achievement information in the response. | [Optional] [Defaults to `undefined`] |

### Return type

[**CustomerInventory**](CustomerInventory.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCustomerSession

> IntegrationCustomerSessionResponse getCustomerSession(customerSessionId)

Get customer session

Get the details of the given customer session.  You can get the same data via other endpoints that also apply changes, which can help you save requests and increase performance. See:  - [Update customer session](#tag/Customer-sessions/operation/updateCustomerSessionV2) - [Update customer profile](#tag/Customer-profiles/operation/updateCustomerProfileV2) 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { GetCustomerSessionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The `integration ID` of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager\'s **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint. 
    customerSessionId: customerSessionId_example,
  } satisfies GetCustomerSessionRequest;

  try {
    const data = await api.getCustomerSession(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customerSessionId** | `string` | The &#x60;integration ID&#x60; of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager\&#39;s **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint.  | [Defaults to `undefined`] |

### Return type

[**IntegrationCustomerSessionResponse**](IntegrationCustomerSessionResponse.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyBalances

> LoyaltyBalancesWithTiers getLoyaltyBalances(loyaltyProgramId, integrationId, endDate, subledgerId, includeTiers, includeProjectedTier)

Get customer\&#39;s loyalty balances

Retrieve loyalty ledger balances for the given Integration ID in the specified loyalty program. You can filter balances by date and subledger ID, and include tier-related information in the response.  **Note**: If no filtering options are applied, you retrieve all loyalty balances on the current date for the given integration ID.  Loyalty balances are calculated when Talon.One receives your request using the points stored in our database, so retrieving a large number of balances at once can impact performance.  For more information, see: - [Managing card-based loyalty program data](https://docs.talon.one/docs/product/loyalty-programs/card-based/managing-loyalty-cards) - [Managing profile-based loyalty program data](https://docs.talon.one/docs/product/loyalty-programs/profile-based/managing-pb-lp-data) 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { GetLoyaltyBalancesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | Identifier of the profile-based loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
    integrationId: integrationId_example,
    // Date | Used to return expired, active, and pending loyalty balances before this timestamp. You can enter any past, present, or future timestamp value.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // string | The ID of the subledger by which we filter the data. (optional)
    subledgerId: subledgerId_example,
    // boolean | Indicates whether tier information is included in the response.  When set to `true`, the response includes information about the current tier and the number of points required to move to next tier.  (optional)
    includeTiers: true,
    // boolean | Indicates whether the customer\'s projected tier information is included in the response.  When set to `true`, the response includes information about the customer\'s active points and the name of the projected tier.  **Note** We recommend filtering by `subledgerId` for better performance.  (optional)
    includeProjectedTier: true,
  } satisfies GetLoyaltyBalancesRequest;

  try {
    const data = await api.getLoyaltyBalances(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the profile-based loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **integrationId** | `string` | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | [Defaults to `undefined`] |
| **endDate** | `Date` | Used to return expired, active, and pending loyalty balances before this timestamp. You can enter any past, present, or future timestamp value.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |
| **subledgerId** | `string` | The ID of the subledger by which we filter the data. | [Optional] [Defaults to `undefined`] |
| **includeTiers** | `boolean` | Indicates whether tier information is included in the response.  When set to &#x60;true&#x60;, the response includes information about the current tier and the number of points required to move to next tier.  | [Optional] [Defaults to `false`] |
| **includeProjectedTier** | `boolean` | Indicates whether the customer\&#39;s projected tier information is included in the response.  When set to &#x60;true&#x60;, the response includes information about the customer\&#39;s active points and the name of the projected tier.  **Note** We recommend filtering by &#x60;subledgerId&#x60; for better performance.  | [Optional] [Defaults to `false`] |

### Return type

[**LoyaltyBalancesWithTiers**](LoyaltyBalancesWithTiers.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyCardBalances

> LoyaltyCardBalances getLoyaltyCardBalances(loyaltyProgramId, loyaltyCardId, endDate, subledgerId)

Get card\&#39;s point balances

Retrieve loyalty balances for the given loyalty card in the specified loyalty program with filtering options applied. If no filtering options are applied, all loyalty balances for the given loyalty card are returned. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { GetLoyaltyCardBalancesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
    loyaltyCardId: loyaltyCardId_example,
    // Date | Used to return expired, active, and pending loyalty balances before this timestamp. You can enter any past, present, or future timestamp value.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // Array<string> | Filter results by one or more subledger IDs. Must be exact match. (optional)
    subledgerId: ...,
  } satisfies GetLoyaltyCardBalancesRequest;

  try {
    const data = await api.getLoyaltyCardBalances(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardId** | `string` | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | [Defaults to `undefined`] |
| **endDate** | `Date` | Used to return expired, active, and pending loyalty balances before this timestamp. You can enter any past, present, or future timestamp value.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |
| **subledgerId** | `Array<string>` | Filter results by one or more subledger IDs. Must be exact match. | [Optional] |

### Return type

[**LoyaltyCardBalances**](LoyaltyCardBalances.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyCardPoints

> GetLoyaltyCardPoints200Response getLoyaltyCardPoints(loyaltyProgramId, loyaltyCardId, status, subledgerId, customerSessionIDs, transactionUUIDs, pageSize, skip, sort)

List card\&#39;s unused loyalty points

Get paginated results of loyalty points for a given loyalty card identifier in a card-based loyalty program. This endpoint returns only the balances of unused points on a loyalty card.  You can filter points by status: - &#x60;active&#x60;: Points ready to be redeemed. - &#x60;pending&#x60;: Points with a start date in the future. - &#x60;expired&#x60;: Points with an expiration date in the past. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { GetLoyaltyCardPointsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
    loyaltyCardId: loyaltyCardId_example,
    // 'active' | 'pending' | 'expired' | Filter points based on their status. (optional)
    status: status_example,
    // Array<string> | Filter results by one or more subledger IDs. Must be exact match. (optional)
    subledgerId: ...,
    // Array<string> | Filter the results by a list of customer session IDs.   To include multiple IDs, repeat the parameter for each one, for example,  `?customerSessionIDs=id1&customerSessionIDs=id2`.  The response contains only data associated with the specified sessions.  (optional)
    customerSessionIDs: ...,
    // Array<string> | Filter the results by a list of transaction UUIDs.  To include multiple IDs, repeat the parameter for each one, for example,  `?transactionUUIDs=uuid1&transactionUUIDs=uuid2`.  The response contains only data associated with the specified transactions.  (optional)
    transactionUUIDs: ...,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // 'startDate' | 'expiryDate' | The field by which results should be sorted. You can enter one of the following values:  - `startDate`: Sorts the results by the start date of the points. - `expiryDate`: Sorts the results by the expiry date of the points.  By default, results are sorted in ascending order.  To sort them in descending order, prefix the field name with `-`.  **Note:** You can only sort by one field at a time.  (optional)
    sort: sort_example,
  } satisfies GetLoyaltyCardPointsRequest;

  try {
    const data = await api.getLoyaltyCardPoints(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardId** | `string` | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | [Defaults to `undefined`] |
| **status** | `active`, `pending`, `expired` | Filter points based on their status. | [Optional] [Defaults to `&#39;active&#39;`] [Enum: active, pending, expired] |
| **subledgerId** | `Array<string>` | Filter results by one or more subledger IDs. Must be exact match. | [Optional] |
| **customerSessionIDs** | `Array<string>` | Filter the results by a list of customer session IDs.   To include multiple IDs, repeat the parameter for each one, for example,  &#x60;?customerSessionIDs&#x3D;id1&amp;customerSessionIDs&#x3D;id2&#x60;.  The response contains only data associated with the specified sessions.  | [Optional] |
| **transactionUUIDs** | `Array<string>` | Filter the results by a list of transaction UUIDs.  To include multiple IDs, repeat the parameter for each one, for example,  &#x60;?transactionUUIDs&#x3D;uuid1&amp;transactionUUIDs&#x3D;uuid2&#x60;.  The response contains only data associated with the specified transactions.  | [Optional] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `50`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `startDate`, `expiryDate` | The field by which results should be sorted. You can enter one of the following values:  - &#x60;startDate&#x60;: Sorts the results by the start date of the points. - &#x60;expiryDate&#x60;: Sorts the results by the expiry date of the points.  By default, results are sorted in ascending order.  To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You can only sort by one field at a time.  | [Optional] [Defaults to `undefined`] [Enum: startDate, expiryDate] |

### Return type

[**GetLoyaltyCardPoints200Response**](GetLoyaltyCardPoints200Response.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyCardTransactions

> GetLoyaltyCardTransactions200Response getLoyaltyCardTransactions(loyaltyProgramId, loyaltyCardId, subledgerId, loyaltyTransactionType, startDate, endDate, customerSessionIDs, transactionUUIDs, pageSize, skip, awaitsActivation)

List card\&#39;s transactions

Retrieve loyalty transaction logs for the given loyalty card in the specified loyalty program with filtering options applied. If no filtering options are applied, the last 50 loyalty transactions for the given loyalty card are returned. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { GetLoyaltyCardTransactionsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
    loyaltyCardId: loyaltyCardId_example,
    // Array<string> | Filter results by one or more subledger IDs. Must be exact match. (optional)
    subledgerId: ...,
    // 'manual' | 'session' | 'import' | Filter results by loyalty transaction type: - `manual`: Loyalty transaction that was done manually. - `session`: Loyalty transaction that resulted from a customer session. - `import`: Loyalty transaction that was imported from a CSV file.  (optional)
    loyaltyTransactionType: loyaltyTransactionType_example,
    // Date | Date and time from which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Date and time by which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // Array<string> | Filter the results by a list of customer session IDs.   To include multiple IDs, repeat the parameter for each one, for example,  `?customerSessionIDs=id1&customerSessionIDs=id2`.  The response contains only data associated with the specified sessions.  (optional)
    customerSessionIDs: ...,
    // Array<string> | Filter the results by a list of transaction UUIDs.  To include multiple IDs, repeat the parameter for each one, for example,  `?transactionUUIDs=uuid1&transactionUUIDs=uuid2`.  The response contains only data associated with the specified transactions.  (optional)
    transactionUUIDs: ...,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // boolean | If `true`: Filters results to include only point transactions that have action-based activation and have not expired.  If `false`: Returns a `400` response.  (optional)
    awaitsActivation: true,
  } satisfies GetLoyaltyCardTransactionsRequest;

  try {
    const data = await api.getLoyaltyCardTransactions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardId** | `string` | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | [Defaults to `undefined`] |
| **subledgerId** | `Array<string>` | Filter results by one or more subledger IDs. Must be exact match. | [Optional] |
| **loyaltyTransactionType** | `manual`, `session`, `import` | Filter results by loyalty transaction type: - &#x60;manual&#x60;: Loyalty transaction that was done manually. - &#x60;session&#x60;: Loyalty transaction that resulted from a customer session. - &#x60;import&#x60;: Loyalty transaction that was imported from a CSV file.  | [Optional] [Defaults to `undefined`] [Enum: manual, session, import] |
| **startDate** | `Date` | Date and time from which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` | Date and time by which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |
| **customerSessionIDs** | `Array<string>` | Filter the results by a list of customer session IDs.   To include multiple IDs, repeat the parameter for each one, for example,  &#x60;?customerSessionIDs&#x3D;id1&amp;customerSessionIDs&#x3D;id2&#x60;.  The response contains only data associated with the specified sessions.  | [Optional] |
| **transactionUUIDs** | `Array<string>` | Filter the results by a list of transaction UUIDs.  To include multiple IDs, repeat the parameter for each one, for example,  &#x60;?transactionUUIDs&#x3D;uuid1&amp;transactionUUIDs&#x3D;uuid2&#x60;.  The response contains only data associated with the specified transactions.  | [Optional] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `50`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **awaitsActivation** | `boolean` | If &#x60;true&#x60;: Filters results to include only point transactions that have action-based activation and have not expired.  If &#x60;false&#x60;: Returns a &#x60;400&#x60; response.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetLoyaltyCardTransactions200Response**](GetLoyaltyCardTransactions200Response.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyProgramProfilePoints

> GetLoyaltyProgramProfilePoints200Response getLoyaltyProgramProfilePoints(loyaltyProgramId, integrationId, status, subledgerId, customerSessionIDs, transactionUUIDs, pageSize, skip, sort)

List customer\&#39;s unused loyalty points

Get paginated results of loyalty points for a given Integration ID in the specified profile-based loyalty program. This endpoint returns only the balances of unused points linked to a customer profile.  You can filter points by status: - &#x60;active&#x60;: Points ready to be redeemed. - &#x60;pending&#x60;: Points with a start date in the future. - &#x60;expired&#x60;: Points with an expiration date in the past. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { GetLoyaltyProgramProfilePointsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | Identifier of the profile-based loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
    integrationId: integrationId_example,
    // 'active' | 'pending' | 'expired' | Filter points based on their status. (optional)
    status: status_example,
    // string | The ID of the subledger by which we filter the data. (optional)
    subledgerId: subledgerId_example,
    // Array<string> | Filter the results by a list of customer session IDs.   To include multiple IDs, repeat the parameter for each one, for example,  `?customerSessionIDs=id1&customerSessionIDs=id2`.  The response contains only data associated with the specified sessions.  (optional)
    customerSessionIDs: ...,
    // Array<string> | Filter the results by a list of transaction UUIDs.  To include multiple IDs, repeat the parameter for each one, for example,  `?transactionUUIDs=uuid1&transactionUUIDs=uuid2`.  The response contains only data associated with the specified transactions.  (optional)
    transactionUUIDs: ...,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // 'startDate' | 'expiryDate' | The field by which results should be sorted. You can enter one of the following values:  - `startDate`: Sorts the results by the start date of the points. - `expiryDate`: Sorts the results by the expiry date of the points.  By default, results are sorted in ascending order.  To sort them in descending order, prefix the field name with `-`.  **Note:** You can only sort by one field at a time.  (optional)
    sort: sort_example,
  } satisfies GetLoyaltyProgramProfilePointsRequest;

  try {
    const data = await api.getLoyaltyProgramProfilePoints(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the profile-based loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **integrationId** | `string` | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | [Defaults to `undefined`] |
| **status** | `active`, `pending`, `expired` | Filter points based on their status. | [Optional] [Defaults to `&#39;active&#39;`] [Enum: active, pending, expired] |
| **subledgerId** | `string` | The ID of the subledger by which we filter the data. | [Optional] [Defaults to `undefined`] |
| **customerSessionIDs** | `Array<string>` | Filter the results by a list of customer session IDs.   To include multiple IDs, repeat the parameter for each one, for example,  &#x60;?customerSessionIDs&#x3D;id1&amp;customerSessionIDs&#x3D;id2&#x60;.  The response contains only data associated with the specified sessions.  | [Optional] |
| **transactionUUIDs** | `Array<string>` | Filter the results by a list of transaction UUIDs.  To include multiple IDs, repeat the parameter for each one, for example,  &#x60;?transactionUUIDs&#x3D;uuid1&amp;transactionUUIDs&#x3D;uuid2&#x60;.  The response contains only data associated with the specified transactions.  | [Optional] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `50`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **sort** | `startDate`, `expiryDate` | The field by which results should be sorted. You can enter one of the following values:  - &#x60;startDate&#x60;: Sorts the results by the start date of the points. - &#x60;expiryDate&#x60;: Sorts the results by the expiry date of the points.  By default, results are sorted in ascending order.  To sort them in descending order, prefix the field name with &#x60;-&#x60;.  **Note:** You can only sort by one field at a time.  | [Optional] [Defaults to `undefined`] [Enum: startDate, expiryDate] |

### Return type

[**GetLoyaltyProgramProfilePoints200Response**](GetLoyaltyProgramProfilePoints200Response.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLoyaltyProgramProfileTransactions

> GetLoyaltyProgramProfileTransactions200Response getLoyaltyProgramProfileTransactions(loyaltyProgramId, integrationId, customerSessionIDs, transactionUUIDs, subledgerId, loyaltyTransactionType, startDate, endDate, pageSize, skip, awaitsActivation)

List customer\&#39;s loyalty transactions

Retrieve paginated results of loyalty transaction logs for the given Integration ID in the specified loyalty program.  You can filter transactions by date. If no filters are applied, the last 50 loyalty transactions for the given integration ID are returned.  **Note:** To retrieve all loyalty program transaction logs in a given loyalty program, use the [List loyalty program transactions](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyProgramTransactions) endpoint. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { GetLoyaltyProgramProfileTransactionsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | Identifier of the profile-based loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
    integrationId: integrationId_example,
    // Array<string> | Filter the results by a list of customer session IDs.   To include multiple IDs, repeat the parameter for each one, for example,  `?customerSessionIDs=id1&customerSessionIDs=id2`.  The response contains only data associated with the specified sessions.  (optional)
    customerSessionIDs: ...,
    // Array<string> | Filter the results by a list of transaction UUIDs.  To include multiple IDs, repeat the parameter for each one, for example,  `?transactionUUIDs=uuid1&transactionUUIDs=uuid2`.  The response contains only data associated with the specified transactions.  (optional)
    transactionUUIDs: ...,
    // string | The ID of the subledger by which we filter the data. (optional)
    subledgerId: subledgerId_example,
    // 'manual' | 'session' | 'import' | Filter results by loyalty transaction type: - `manual`: Loyalty transaction that was done manually. - `session`: Loyalty transaction that resulted from a customer session. - `import`: Loyalty transaction that was imported from a CSV file.  (optional)
    loyaltyTransactionType: loyaltyTransactionType_example,
    // Date | Date and time from which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    startDate: 2013-10-20T19:20:30+01:00,
    // Date | Date and time by which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, `T23:59:59` to specify the end of the day. The time zone setting considered is `UTC`. If you do not include a time component, a default time value of `T00:00:00` (midnight) in `UTC` is considered.  (optional)
    endDate: 2013-10-20T19:20:30+01:00,
    // number | The number of items in the response. (optional)
    pageSize: 789,
    // number | The number of items to skip when paging through large result sets. (optional)
    skip: 789,
    // boolean | If `true`: Filters results to include only point transactions that have action-based activation and have not expired.  If `false`: Returns a `400` response.  (optional)
    awaitsActivation: true,
  } satisfies GetLoyaltyProgramProfileTransactionsRequest;

  try {
    const data = await api.getLoyaltyProgramProfileTransactions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the profile-based loyalty program. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **integrationId** | `string` | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | [Defaults to `undefined`] |
| **customerSessionIDs** | `Array<string>` | Filter the results by a list of customer session IDs.   To include multiple IDs, repeat the parameter for each one, for example,  &#x60;?customerSessionIDs&#x3D;id1&amp;customerSessionIDs&#x3D;id2&#x60;.  The response contains only data associated with the specified sessions.  | [Optional] |
| **transactionUUIDs** | `Array<string>` | Filter the results by a list of transaction UUIDs.  To include multiple IDs, repeat the parameter for each one, for example,  &#x60;?transactionUUIDs&#x3D;uuid1&amp;transactionUUIDs&#x3D;uuid2&#x60;.  The response contains only data associated with the specified transactions.  | [Optional] |
| **subledgerId** | `string` | The ID of the subledger by which we filter the data. | [Optional] [Defaults to `undefined`] |
| **loyaltyTransactionType** | `manual`, `session`, `import` | Filter results by loyalty transaction type: - &#x60;manual&#x60;: Loyalty transaction that was done manually. - &#x60;session&#x60;: Loyalty transaction that resulted from a customer session. - &#x60;import&#x60;: Loyalty transaction that was imported from a CSV file.  | [Optional] [Defaults to `undefined`] [Enum: manual, session, import] |
| **startDate** | `Date` | Date and time from which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |
| **endDate** | `Date` | Date and time by which results are returned. Results are filtered by transaction creation date.  **Note:**  - It must be an RFC3339 timestamp string. - You can include a time component in your string, for example, &#x60;T23:59:59&#x60; to specify the end of the day. The time zone setting considered is &#x60;UTC&#x60;. If you do not include a time component, a default time value of &#x60;T00:00:00&#x60; (midnight) in &#x60;UTC&#x60; is considered.  | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | The number of items in the response. | [Optional] [Defaults to `50`] |
| **skip** | `number` | The number of items to skip when paging through large result sets. | [Optional] [Defaults to `undefined`] |
| **awaitsActivation** | `boolean` | If &#x60;true&#x60;: Filters results to include only point transactions that have action-based activation and have not expired.  If &#x60;false&#x60;: Returns a &#x60;400&#x60; response.  | [Optional] [Defaults to `undefined`] |

### Return type

[**GetLoyaltyProgramProfileTransactions200Response**](GetLoyaltyProgramProfileTransactions200Response.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getReservedCustomers

> GetReservedCustomers200Response getReservedCustomers(couponValue)

List customers that have this coupon reserved

Return all customers that have this coupon marked as reserved. This includes hard and soft reservations. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { GetReservedCustomersRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The code of the coupon.  **Important:** The coupon code requires [URL encoding](https://www.w3schools.com/tags//ref_urlencode.asp)  if it contains special characters. For example, you must encode `SUMMER25%OFF` as `SUMMER25%25OFF`. 
    couponValue: couponValue_example,
  } satisfies GetReservedCustomersRequest;

  try {
    const data = await api.getReservedCustomers(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **couponValue** | `string` | The code of the coupon.  **Important:** The coupon code requires [URL encoding](https://www.w3schools.com/tags//ref_urlencode.asp)  if it contains special characters. For example, you must encode &#x60;SUMMER25%OFF&#x60; as &#x60;SUMMER25%25OFF&#x60;.  | [Defaults to `undefined`] |

### Return type

[**GetReservedCustomers200Response**](GetReservedCustomers200Response.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## linkLoyaltyCardToProfile

> LoyaltyCard linkLoyaltyCardToProfile(loyaltyProgramId, loyaltyCardId, loyaltyCardRegistration)

Link customer profile to card

[Loyalty cards](https://docs.talon.one/docs/product/loyalty-programs/card-based/card-based-overview) allow customers to collect and spend loyalty points within a [card-based loyalty program](https://docs.talon.one/docs/product/loyalty-programs/overview#loyalty-program-types). They are useful to gamify loyalty programs and can be used with or without customer profiles linked to them.  Link a customer profile to a given loyalty card for the card to be set as **Registered**. This affects how it can be used. See the [docs](https://docs.talon.one/docs/product/loyalty-programs/card-based/managing-loyalty-cards#linking-customer-profiles-to-a-loyalty-card).  **Note:** You can link as many customer profiles to a given loyalty card as the [**card user limit**](https://docs.talon.one/docs/product/loyalty-programs/card-based/creating-cb-programs) allows. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { LinkLoyaltyCardToProfileRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
    loyaltyCardId: loyaltyCardId_example,
    // LoyaltyCardRegistration | body
    loyaltyCardRegistration: ...,
  } satisfies LinkLoyaltyCardToProfileRequest;

  try {
    const data = await api.linkLoyaltyCardToProfile(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | Identifier of the card-based loyalty program containing the loyalty card. You can get the ID with the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardId** | `string` | Identifier of the loyalty card. You can get the identifier with the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardRegistration** | [LoyaltyCardRegistration](LoyaltyCardRegistration.md) | body | |

### Return type

[**LoyaltyCard**](LoyaltyCard.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## reopenCustomerSession

> ReopenSessionResponse reopenCustomerSession(customerSessionId)

Reopen customer session

Reopen a closed [customer session](https://docs.talon.one/docs/dev/concepts/entities/customer-sessions). For example, if a session has been completed but still needs to be edited, you can reopen it with this endpoint. A reopen session is treated like a standard open session.  When reopening a session: - The &#x60;talon_session_reopened&#x60; event is triggered. You can see it in the **Events** view in the Campaign Manager. - The session state is updated to &#x60;open&#x60;. - Any modified budgets and triggered effects are rolled back when the session closes. - Depending on the [return policy](https://docs.talon.one/docs/product/loyalty-programs/managing-loyalty-programs#return-policy)  in your loyalty programs, points are rolled back in the following ways:   - Pending points are rolled back automatically.   - If **Active points deduction** setting is enabled, any points that were earned and activated when the session closed    are rolled back.   - If **Negative balance** is enabled, the rollback can create a negative points balance.   &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Effects and budgets unimpacted by a session reopening&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;     &lt;p&gt;The following effects and budgets remain in the state they were in when the session closed:&lt;/p&gt;     &lt;ul&gt;       &lt;li&gt;Add free item effect&lt;/li&gt;       &lt;li&gt;Award giveaway&lt;/li&gt;       &lt;li&gt;Coupon and referral creation&lt;/li&gt;       &lt;li&gt;Coupon reservation&lt;/li&gt;       &lt;li&gt;Custom effect&lt;/li&gt;       &lt;li&gt;Update attribute value&lt;/li&gt;       &lt;li&gt;Update cart item attribute value&lt;/li&gt;     &lt;/ul&gt;   &lt;/div&gt;   &lt;/details&gt; &lt;p&gt;To see an example of a rollback, see the &lt;a href&#x3D;\&quot;https://docs.talon.one/docs/dev/tutorials/rolling-back-effects\&quot;&gt;Cancelling a session with campaign budgets&lt;/a&gt; tutorial.&lt;/p&gt;  **Note:** If your order workflow requires you to create a new session instead of reopening a session, use the [Update customer session](https://docs.talon.one/integration-api#tag/Customer-sessions/operation/updateCustomerSessionV2) endpoint to cancel a closed session and create a new one. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { ReopenCustomerSessionRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The `integration ID` of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager\'s **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint. 
    customerSessionId: customerSessionId_example,
  } satisfies ReopenCustomerSessionRequest;

  try {
    const data = await api.reopenCustomerSession(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customerSessionId** | `string` | The &#x60;integration ID&#x60; of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager\&#39;s **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint.  | [Defaults to `undefined`] |

### Return type

[**ReopenSessionResponse**](ReopenSessionResponse.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## returnCartItems

> IntegrationStateV2 returnCartItems(customerSessionId, returnIntegrationRequest, dry)

Return cart items

Create a new return request for the specified cart items.  This endpoint automatically changes the session state from &#x60;closed&#x60; to &#x60;partially_returned&#x60;.  **Note:** This will roll back any effects associated with these cart items. For more information, see [our documentation on session states](https://docs.talon.one/docs/dev/concepts/entities/customer-sessions#customer-session-states) and [this tutorial](https://docs.talon.one/docs/dev/tutorials/partially-returning-a-session). 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { ReturnCartItemsRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The `integration ID` of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager\'s **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint. 
    customerSessionId: customerSessionId_example,
    // ReturnIntegrationRequest | body
    returnIntegrationRequest: ...,
    // boolean | Indicates whether to persist the changes. Changes are ignored when `dry=true`.  (optional)
    dry: true,
  } satisfies ReturnCartItemsRequest;

  try {
    const data = await api.returnCartItems(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customerSessionId** | `string` | The &#x60;integration ID&#x60; of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager\&#39;s **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint.  | [Defaults to `undefined`] |
| **returnIntegrationRequest** | [ReturnIntegrationRequest](ReturnIntegrationRequest.md) | body | |
| **dry** | `boolean` | Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;.  | [Optional] [Defaults to `undefined`] |

### Return type

[**IntegrationStateV2**](IntegrationStateV2.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## syncCatalog

> Catalog syncCatalog(catalogId, catalogSyncRequest)

Sync cart item catalog

Perform the following actions for a given cart item catalog:  - Add an item to the catalog. - Add multiple items to the catalog. - Update the attributes of an item in the catalog. - Update the attributes of multiple items in the catalog. - Remove an item from the catalog. - Remove multiple items from the catalog.  You can either add, update, or delete up to 1000 cart items in a single request. Each item synced to a catalog must have a unique &#x60;SKU&#x60;.  **Important**: You can perform only one type of action in a single sync request. Syncing items with duplicate &#x60;SKU&#x60; values in a single request returns an error message with a &#x60;400&#x60; status code.  For more information, read [managing cart item catalogs](https://docs.talon.one/docs/product/account/dev-tools/managing-cart-item-catalogs).  ### Filtering cart items  Use [cart item attributes](https://docs.talon.one/docs/product/account/dev-tools/managing-attributes) to filter items and select the ones you want to edit or delete when editing or deleting more than one item at a time.  The &#x60;filters&#x60; array contains an object with the following properties:  - &#x60;attr&#x60;: A [cart item attribute](https://docs.talon.one/docs/product/account/dev-tools/managing-attributes)   connected to the catalog. It is applied to all items in the catalog. - &#x60;op&#x60;: The filtering operator indicating the relationship between the value of each   cart item in the catalog and the value of the &#x60;value&#x60; property for the attribute selected   in &#x60;attr&#x60;.    The value of &#x60;op&#x60; can be one of the following:    - &#x60;EQ&#x60;: Equal to &#x60;value&#x60;   - &#x60;LT&#x60;: Less than &#x60;value&#x60;   - &#x60;LE&#x60;: Less than or equal to &#x60;value&#x60;   - &#x60;GT&#x60;: Greater than &#x60;value&#x60;   - &#x60;GE&#x60;: Greater than or equal to &#x60;value&#x60;   - &#x60;IN&#x60;: One of the comma-separated values that &#x60;value&#x60; is set to.    **Note:** &#x60;GE&#x60;, &#x60;LE&#x60;, &#x60;GT&#x60;, &#x60;LT&#x60; are for numeric values only.  - &#x60;value&#x60;: The value of the attribute selected in &#x60;attr&#x60;.  ### Payload examples  Synchronization actions are sent as &#x60;PUT&#x60; requests. See the structure for each action:  &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Adding an item to the catalog&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;    &#x60;&#x60;&#x60;json   {     \&quot;actions\&quot;: [       {         \&quot;payload\&quot;: {           \&quot;attributes\&quot;: {             \&quot;color\&quot;: \&quot;Navy blue\&quot;,             \&quot;type\&quot;: \&quot;shoes\&quot;           },           \&quot;replaceIfExists\&quot;: true,           \&quot;sku\&quot;: \&quot;SKU1241028\&quot;,           \&quot;price\&quot;: 100,           \&quot;product\&quot;: {             \&quot;name\&quot;: \&quot;sneakers\&quot;           }         },         \&quot;type\&quot;: \&quot;ADD\&quot;       }     ]   }   &#x60;&#x60;&#x60;   &lt;/div&gt; &lt;/details&gt;  &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Adding multiple items to the catalog&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;    &#x60;&#x60;&#x60;json   {     \&quot;actions\&quot;: [       {         \&quot;payload\&quot;: {           \&quot;attributes\&quot;: {             \&quot;color\&quot;: \&quot;Navy blue\&quot;,             \&quot;type\&quot;: \&quot;shoes\&quot;           },           \&quot;replaceIfExists\&quot;: true,           \&quot;sku\&quot;: \&quot;SKU1241027\&quot;,           \&quot;price\&quot;: 100,           \&quot;product\&quot;: {             \&quot;name\&quot;: \&quot;sneakers\&quot;           }         },         \&quot;type\&quot;: \&quot;ADD\&quot;       },       {         \&quot;payload\&quot;: {           \&quot;attributes\&quot;: {             \&quot;color\&quot;: \&quot;Navy blue\&quot;,             \&quot;type\&quot;: \&quot;shoes\&quot;           },           \&quot;replaceIfExists\&quot;: true,           \&quot;sku\&quot;: \&quot;SKU1241028\&quot;,           \&quot;price\&quot;: 100,           \&quot;product\&quot;: {             \&quot;name\&quot;: \&quot;sneakers\&quot;           }         },         \&quot;type\&quot;: \&quot;ADD\&quot;       }     ]   }   &#x60;&#x60;&#x60;   &lt;/div&gt; &lt;/details&gt;  &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Updating the attributes of an item in the catalog&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;    &#x60;&#x60;&#x60;json   {     \&quot;actions\&quot;: [       {         \&quot;payload\&quot;: {           \&quot;attributes\&quot;: {             \&quot;age\&quot;: 11,             \&quot;origin\&quot;: \&quot;germany\&quot;           },           \&quot;createIfNotExists\&quot;: false,           \&quot;sku\&quot;: \&quot;SKU1241028\&quot;,           \&quot;product\&quot;: {             \&quot;name\&quot;: \&quot;sneakers\&quot;           }         },         \&quot;type\&quot;: \&quot;PATCH\&quot;       }     ]   }   &#x60;&#x60;&#x60;   &lt;/div&gt; &lt;/details&gt;  &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Updating the attributes of multiple items in the catalog&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;    &#x60;&#x60;&#x60;json   {     \&quot;actions\&quot;: [       {         \&quot;payload\&quot;: {           \&quot;attributes\&quot;: {             \&quot;color\&quot;: \&quot;red\&quot;           },           \&quot;filters\&quot;: [             {               \&quot;attr\&quot;: \&quot;color\&quot;,               \&quot;op\&quot;: \&quot;EQ\&quot;,               \&quot;value\&quot;: \&quot;blue\&quot;             }           ]         },         \&quot;type\&quot;: \&quot;PATCH_MANY\&quot;       }     ]   }   &#x60;&#x60;&#x60;    &lt;/div&gt; &lt;/details&gt;  &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Removing an item from the catalog&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;    &#x60;&#x60;&#x60;json   {     \&quot;actions\&quot;: [       {         \&quot;payload\&quot;: {           \&quot;sku\&quot;: \&quot;SKU1241028\&quot;         },         \&quot;type\&quot;: \&quot;REMOVE\&quot;       }     ]   }   &#x60;&#x60;&#x60;    &lt;/div&gt; &lt;/details&gt;  &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Removing multiple items from the catalog&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;    &#x60;&#x60;&#x60;json   {     \&quot;actions\&quot;: [       {         \&quot;payload\&quot;: {           \&quot;filters\&quot;: [             {               \&quot;attr\&quot;: \&quot;color\&quot;,               \&quot;op\&quot;: \&quot;EQ\&quot;,               \&quot;value\&quot;: \&quot;blue\&quot;             }           ]         },         \&quot;type\&quot;: \&quot;REMOVE_MANY\&quot;       }     ]   }   &#x60;&#x60;&#x60;   &lt;/div&gt; &lt;/details&gt;  &lt;details&gt;   &lt;summary&gt;&lt;strong&gt;Removing shoes of sizes above 45 from the catalog&lt;/strong&gt;&lt;/summary&gt;   &lt;div&gt;   &lt;p&gt;   Let\&#39;s imagine that we have a shoe store and we have decided to stop selling   shoes larger than size 45. We can remove from the catalog all the shoes of sizes above 45   with a single action:&lt;/p&gt;    &#x60;&#x60;&#x60;json   {     \&quot;actions\&quot;: [       {         \&quot;payload\&quot;: {           \&quot;filters\&quot;: [             {               \&quot;attr\&quot;: \&quot;size\&quot;,               \&quot;op\&quot;: \&quot;GT\&quot;,               \&quot;value\&quot;: \&quot;45\&quot;             }           ]         },         \&quot;type\&quot;: \&quot;REMOVE_MANY\&quot;       }     ]   }   &#x60;&#x60;&#x60;   &lt;/div&gt; &lt;/details&gt; 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { SyncCatalogRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | The ID of the catalog. You can find the ID in the Campaign Manager in **Account** > **Tools** > **Cart item catalogs**.
    catalogId: 789,
    // CatalogSyncRequest | body
    catalogSyncRequest: ...,
  } satisfies SyncCatalogRequest;

  try {
    const data = await api.syncCatalog(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **catalogId** | `number` | The ID of the catalog. You can find the ID in the Campaign Manager in **Account** &gt; **Tools** &gt; **Cart item catalogs**. | [Defaults to `undefined`] |
| **catalogSyncRequest** | [CatalogSyncRequest](CatalogSyncRequest.md) | body | |

### Return type

[**Catalog**](Catalog.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## trackEventV2

> TrackEventV2Response trackEventV2(integrationEventV2Request, silent, dry, forceCompleteEvaluation)

Track event

Triggers a custom event.  To use this endpoint: 1. Define a [custom event](https://docs.talon.one/docs/dev/concepts/entities/events#creating-a-custom-event) in the Campaign Manager. 1. Update or create a rule to check for this event. 1. Trigger the event with this endpoint. After you have successfully sent an event to Talon.One, you can list the received events in the **Events** view in the Campaign Manager.  Talon.One also offers a set of [built-in events](https://docs.talon.one/docs/dev/concepts/entities/events). Ensure you do not create a custom event when you can use a built-in event.  For example, use this endpoint to trigger an event when a customer shares a link to a product. See the [tutorial](https://docs.talon.one/docs/product/tutorials/referrals/incentivizing-product-link-sharing).  &lt;div class&#x3D;\&quot;redoc-section\&quot;&gt;    &lt;p class&#x3D;\&quot;title\&quot;&gt;Important&lt;/p&gt;    1. &#x60;profileId&#x60; is required even though the schema does not specify it.   1. If the customer profile ID is new, a new profile is automatically created but the &#x60;customer_profile_created&#x60; [built-in event ](https://docs.talon.one/docs/dev/concepts/entities/events) is **not** triggered.   1. We recommend sending requests sequentially. See [Managing parallel requests](https://docs.talon.one/docs/dev/getting-started/integration-tutorial#managing-parallel-requests).   1. [Archived campaigns](https://docs.talon.one/docs/product/campaigns/managing-campaigns#archiving-a-campaign) are not considered in rule evaluation.  &lt;/div&gt; 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { TrackEventV2Request } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // IntegrationEventV2Request | body
    integrationEventV2Request: ...,
    // string | Possible values: `yes` or `no`. - `yes`: Increases the performance of the API call by returning a 204 response. - `no`: Returns a 200 response that contains the updated customer profiles.  (optional)
    silent: silent_example,
    // boolean | Indicates whether to persist the changes. Changes are ignored when `dry=true`.  (optional)
    dry: true,
    // boolean | Forces evaluation for all matching campaigns regardless of the [campaign evaluation mode](https://docs.talon.one/docs/product/applications/managing-campaign-evaluation#setting-campaign-evaluation-mode). Requires `dry=true`.  (optional)
    forceCompleteEvaluation: true,
  } satisfies TrackEventV2Request;

  try {
    const data = await api.trackEventV2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **integrationEventV2Request** | [IntegrationEventV2Request](IntegrationEventV2Request.md) | body | |
| **silent** | `string` | Possible values: &#x60;yes&#x60; or &#x60;no&#x60;. - &#x60;yes&#x60;: Increases the performance of the API call by returning a 204 response. - &#x60;no&#x60;: Returns a 200 response that contains the updated customer profiles.  | [Optional] [Defaults to `&#39;yes&#39;`] |
| **dry** | `boolean` | Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;.  | [Optional] [Defaults to `undefined`] |
| **forceCompleteEvaluation** | `boolean` | Forces evaluation for all matching campaigns regardless of the [campaign evaluation mode](https://docs.talon.one/docs/product/applications/managing-campaign-evaluation#setting-campaign-evaluation-mode). Requires &#x60;dry&#x3D;true&#x60;.  | [Optional] [Defaults to `false`] |

### Return type

[**TrackEventV2Response**](TrackEventV2Response.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **409** | Too many requests or limit reached - Avoid parallel requests. See the [docs](https://docs.talon.one/docs/dev/tutorials/integrating-talon-one#managing-parallel-requests). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## unlinkLoyaltyCardFromProfile

> LoyaltyCard unlinkLoyaltyCardFromProfile(loyaltyProgramId, loyaltyCardId, loyaltyCardRegistration)

Unlink customer profile from a loyalty card

Unlink a customer profile from a [registered](https://docs.talon.one/docs/product/loyalty-programs/card-based/managing-loyalty-cards#linking-customer-profiles-to-a-loyalty-card) loyalty card.  To get the &#x60;integrationId&#x60; of a customer profile, you can use the [Update customer session](https://docs.talon.one/integration-api#operation/updateCustomerSessionV2) endpoint. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { UnlinkLoyaltyCardFromProfileRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | The identifier of the card-based loyalty program containing the loyalty card. You can get this ID using the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint. 
    loyaltyProgramId: 789,
    // string | The identifier of the loyalty card. You can get this ID using the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint. 
    loyaltyCardId: loyaltyCardId_example,
    // LoyaltyCardRegistration | body
    loyaltyCardRegistration: ...,
  } satisfies UnlinkLoyaltyCardFromProfileRequest;

  try {
    const data = await api.unlinkLoyaltyCardFromProfile(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loyaltyProgramId** | `number` | The identifier of the card-based loyalty program containing the loyalty card. You can get this ID using the [List loyalty programs](https://docs.talon.one/management-api#tag/Loyalty/operation/getLoyaltyPrograms) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardId** | `string` | The identifier of the loyalty card. You can get this ID using the [List loyalty cards](https://docs.talon.one/management-api#tag/Loyalty-cards/operation/getLoyaltyCards) endpoint.  | [Defaults to `undefined`] |
| **loyaltyCardRegistration** | [LoyaltyCardRegistration](LoyaltyCardRegistration.md) | body | |

### Return type

[**LoyaltyCard**](LoyaltyCard.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAudienceCustomersAttributes

> updateAudienceCustomersAttributes(audienceId, body)

Update profile attributes for all customers in audience

Update the specified profile attributes to the provided values for all customers in the specified audience. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { UpdateAudienceCustomersAttributesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | The ID of the audience.
    audienceId: 789,
    // object | body
    body: Object,
  } satisfies UpdateAudienceCustomersAttributesRequest;

  try {
    const data = await api.updateAudienceCustomersAttributes(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **audienceId** | `number` | The ID of the audience. | [Defaults to `undefined`] |
| **body** | `object` | body | |

### Return type

`void` (Empty response body)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateAudienceV2

> Audience updateAudienceV2(audienceId, updateAudience)

Update audience name

Update the name of the given audience created by a third-party integration. Sending a request to this endpoint does **not** trigger the Rule Engine.  To update the audience\&#39;s members, use the [Update customer profile](#tag/Customer-profiles/operation/updateCustomerProfileV2) endpoint. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { UpdateAudienceV2Request } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // number | The ID of the audience.
    audienceId: 789,
    // UpdateAudience | body
    updateAudience: ...,
  } satisfies UpdateAudienceV2Request;

  try {
    const data = await api.updateAudienceV2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **audienceId** | `number` | The ID of the audience. | [Defaults to `undefined`] |
| **updateAudience** | [UpdateAudience](UpdateAudience.md) | body | |

### Return type

[**Audience**](Audience.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCustomerProfileAudiences

> updateCustomerProfileAudiences(customerProfileAudienceRequest)

Update multiple customer profiles\&#39; audiences

Add customer profiles to or remove them from an audience.  The endpoint supports 1000 audience actions (&#x60;add&#x60; or &#x60;remove&#x60;) per request.  **Note:** You can also do this using the [Update audience](https://docs.talon.one/docs/product/rules/effects/using-effects#updating-an-audience) effect. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { UpdateCustomerProfileAudiencesRequest } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // CustomerProfileAudienceRequest | body
    customerProfileAudienceRequest: ...,
  } satisfies UpdateCustomerProfileAudiencesRequest;

  try {
    const data = await api.updateCustomerProfileAudiences(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customerProfileAudienceRequest** | [CustomerProfileAudienceRequest](CustomerProfileAudienceRequest.md) | body | |

### Return type

`void` (Empty response body)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCustomerProfileV2

> CustomerProfileIntegrationResponseV2 updateCustomerProfileV2(integrationId, customerProfileIntegrationRequestV2, runRuleEngine, dry)

Update customer profile

Update or create a [Customer Profile](https://docs.talon.one/docs/dev/concepts/entities/customer-profiles). This endpoint triggers the Rule Builder.  You can use this endpoint to: - Set attributes on the given customer profile. Ensure you create the attributes in the Campaign Manager, first. - Modify the audience the customer profile is a member of. **Note:** [Archived campaigns](https://docs.talon.one/docs/product/campaigns/managing-campaigns#archiving-a-campaign) are not considered in rule evaluation when &#x60;runRuleEngine&#x60; is &#x60;true&#x60;. &lt;div class&#x3D;\&quot;redoc-section\&quot;&gt;   &lt;p class&#x3D;\&quot;title\&quot;&gt;Performance tips&lt;/p&gt;    - Updating a customer profile returns a response with the requested integration state.   - You can use the &#x60;responseContent&#x60; property to save yourself extra API calls. For example, you can get     the customer profile details directly without extra requests.   - We recommend sending requests sequentially.     See [Managing parallel requests](https://docs.talon.one/docs/dev/getting-started/integration-tutorial#managing-parallel-requests). &lt;/div&gt; 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { UpdateCustomerProfileV2Request } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier. 
    integrationId: integrationId_example,
    // CustomerProfileIntegrationRequestV2 | body
    customerProfileIntegrationRequestV2: ...,
    // boolean | Indicates whether to run the Rule Engine.  If `true`, the response includes: - The effects generated by the triggered campaigns are returned in the `effects` property. - The created coupons and referral objects.  If `false`: - The rules are not executed and the `effects` property is always empty. - The response time improves. - You cannot use `responseContent` in the body.  (optional)
    runRuleEngine: true,
    // boolean | (Only works when `runRuleEngine=true`) Indicates whether to persist the changes. Changes are ignored when `dry=true`.  When set to `true`, you can use the `evaluableCampaignIds` body property to select specific campaigns to run.  (optional)
    dry: true,
  } satisfies UpdateCustomerProfileV2Request;

  try {
    const data = await api.updateCustomerProfileV2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **integrationId** | `string` | The integration identifier for this customer profile. Must be: - Unique within the deployment. - Stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  Once set, you cannot update this identifier.  | [Defaults to `undefined`] |
| **customerProfileIntegrationRequestV2** | [CustomerProfileIntegrationRequestV2](CustomerProfileIntegrationRequestV2.md) | body | |
| **runRuleEngine** | `boolean` | Indicates whether to run the Rule Engine.  If &#x60;true&#x60;, the response includes: - The effects generated by the triggered campaigns are returned in the &#x60;effects&#x60; property. - The created coupons and referral objects.  If &#x60;false&#x60;: - The rules are not executed and the &#x60;effects&#x60; property is always empty. - The response time improves. - You cannot use &#x60;responseContent&#x60; in the body.  | [Optional] [Defaults to `false`] |
| **dry** | `boolean` | (Only works when &#x60;runRuleEngine&#x3D;true&#x60;) Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;.  When set to &#x60;true&#x60;, you can use the &#x60;evaluableCampaignIds&#x60; body property to select specific campaigns to run.  | [Optional] [Defaults to `undefined`] |

### Return type

[**CustomerProfileIntegrationResponseV2**](CustomerProfileIntegrationResponseV2.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **409** | Too many requests or limit reached - Avoid parallel requests. See the [docs](https://docs.talon.one/docs/dev/tutorials/integrating-talon-one#managing-parallel-requests). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCustomerProfilesV2

> MultipleCustomerProfileIntegrationResponseV2 updateCustomerProfilesV2(multipleCustomerProfileIntegrationRequest, silent)

Update multiple customer profiles

Update (or create) up to 1000 [customer profiles](https://docs.talon.one/docs/dev/concepts/entities/customer-profiles) in 1 request.  The &#x60;integrationId&#x60; must be any identifier that remains stable for the customer. Do not use an ID that the customer can update themselves. For example, you can use a database ID.  A customer profile [can be linked to one or more sessions](https://docs.talon.one/integration-api#tag/Customer-sessions).  **Note:** This endpoint does not trigger the Rule Engine. To trigger the Rule Engine for customer profile updates, use the [Update customer profile](#tag/Customer-profiles/operation/updateCustomerProfileV2) endpoint. 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { UpdateCustomerProfilesV2Request } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // MultipleCustomerProfileIntegrationRequest | body
    multipleCustomerProfileIntegrationRequest: ...,
    // string | Possible values: `yes` or `no`. - `yes`: Increases the performance of the API call by returning a 204 response. - `no`: Returns a 200 response that contains the updated customer profiles.  (optional)
    silent: silent_example,
  } satisfies UpdateCustomerProfilesV2Request;

  try {
    const data = await api.updateCustomerProfilesV2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **multipleCustomerProfileIntegrationRequest** | [MultipleCustomerProfileIntegrationRequest](MultipleCustomerProfileIntegrationRequest.md) | body | |
| **silent** | `string` | Possible values: &#x60;yes&#x60; or &#x60;no&#x60;. - &#x60;yes&#x60;: Increases the performance of the API call by returning a 204 response. - &#x60;no&#x60;: Returns a 200 response that contains the updated customer profiles.  | [Optional] [Defaults to `&#39;yes&#39;`] |

### Return type

[**MultipleCustomerProfileIntegrationResponseV2**](MultipleCustomerProfileIntegrationResponseV2.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateCustomerSessionV2

> IntegrationStateV2 updateCustomerSessionV2(customerSessionId, integrationRequest, dry, now)

Update customer session

Update or create a [customer session](https://docs.talon.one/docs/dev/concepts/entities/customer-sessions). The endpoint responds with the potential promotion rule [effects](https://docs.talon.one/docs/dev/integration-api/api-effects) that match the current cart. For example, use this endpoint to share the contents of a customer\&#39;s cart with Talon.One.  **Note:**  - The currency for the session and the cart items in it is the currency set for the Application linked to this session. - [Archived campaigns](https://docs.talon.one/docs/product/campaigns/managing-campaigns#archiving-a-campaign) are not considered for rule evaluation.  ### Session management  To use this endpoint, start by learning about [customer sessions](https://docs.talon.one/docs/dev/concepts/entities/customer-sessions) and their states and refer to the &#x60;state&#x60; parameter documentation the request body schema docs below.  ### Sessions and customer profiles  - To link a session to a customer profile, set the &#x60;profileId&#x60; parameter in the request body to a customer profile\&#39;s &#x60;integrationId&#x60;. - While you can create an anonymous session with &#x60;profileId&#x3D;\&quot;\&quot;&#x60;, we recommend you use a guest ID instead. - A profile can be linked to simultaneous sessions in different Applications. Either:   - Use unique session integration IDs or,   - Use the same session integration ID across all of the Applications.  **Note:** If the specified profile does not exist, an empty profile is **created automatically**.   You can update it with [Update customer profile](https://docs.talon.one/integration-api#tag/Customer-profiles/operation/updateCustomerProfileV2).  &lt;div class&#x3D;\&quot;redoc-section\&quot;&gt;   &lt;p class&#x3D;\&quot;title\&quot;&gt;Performance tips&lt;/p&gt;    - Updating a customer session returns a response with the new integration state. Use the &#x60;responseContent&#x60; property to save yourself extra API calls.     For example, you can get the customer profile details directly without extra requests.   - We recommend sending requests sequentially. See [Managing parallel requests](https://docs.talon.one/docs/dev/getting-started/integration-tutorial#managing-parallel-requests). &lt;/div&gt;  For more information, see: - The introductory video in [Getting started](https://docs.talon.one/docs/dev/getting-started/overview). - The [integration tutorial](https://docs.talon.one/docs/dev/tutorials/integrating-talon-one). 

### Example

```ts
import {
  Configuration,
  IntegrationApi,
} from 'talon_one_sdk';
import type { UpdateCustomerSessionV2Request } from 'talon_one_sdk';

async function example() {
  console.log("🚀 Testing talon_one_sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: api_key_v1
    apiKey: "YOUR API KEY",
  });
  const api = new IntegrationApi(config);

  const body = {
    // string | The `integration ID` of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager\'s **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint. 
    customerSessionId: customerSessionId_example,
    // IntegrationRequest | body
    integrationRequest: ...,
    // boolean | Indicates whether to persist the changes. Changes are ignored when `dry=true`.  When set to `true`: - The endpoint considers **only** the payload that you pass when **closing** the session.   When you do not use the `dry` parameter, the endpoint behaves as a typical PUT endpoint. Each update builds upon the previous ones. - You can use the `evaluableCampaignIds` body property to select specific campaigns to run.  [See the docs](https://docs.talon.one/docs/dev/integration-api/dry-requests).  (optional)
    dry: true,
    // Date | A timestamp value of a future date that acts as a current date when included in the query.  Use this parameter, for example, to test campaigns that would be evaluated for this customer session in the future (say, [scheduled campaigns](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-schedule)).  **Note:**  - It must be an RFC3339 timestamp string. - It can **only** be a date in the future. - It can **only** be used if the `dry` parameter in the query is set to `true`.  (optional)
    now: 2013-10-20T19:20:30+01:00,
  } satisfies UpdateCustomerSessionV2Request;

  try {
    const data = await api.updateCustomerSessionV2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customerSessionId** | `string` | The &#x60;integration ID&#x60; of the customer session. You set this ID when you create a customer session.  You can see existing customer session integration IDs in the Campaign Manager\&#39;s **Sessions** menu, or via the [List Application session](https://docs.talon.one/management-api#operation/getApplicationSessions) endpoint.  | [Defaults to `undefined`] |
| **integrationRequest** | [IntegrationRequest](IntegrationRequest.md) | body | |
| **dry** | `boolean` | Indicates whether to persist the changes. Changes are ignored when &#x60;dry&#x3D;true&#x60;.  When set to &#x60;true&#x60;: - The endpoint considers **only** the payload that you pass when **closing** the session.   When you do not use the &#x60;dry&#x60; parameter, the endpoint behaves as a typical PUT endpoint. Each update builds upon the previous ones. - You can use the &#x60;evaluableCampaignIds&#x60; body property to select specific campaigns to run.  [See the docs](https://docs.talon.one/docs/dev/integration-api/dry-requests).  | [Optional] [Defaults to `undefined`] |
| **now** | `Date` | A timestamp value of a future date that acts as a current date when included in the query.  Use this parameter, for example, to test campaigns that would be evaluated for this customer session in the future (say, [scheduled campaigns](https://docs.talon.one/docs/product/campaigns/settings/managing-campaign-schedule)).  **Note:**  - It must be an RFC3339 timestamp string. - It can **only** be a date in the future. - It can **only** be used if the &#x60;dry&#x60; parameter in the query is set to &#x60;true&#x60;.  | [Optional] [Defaults to `undefined`] |

### Return type

[**IntegrationStateV2**](IntegrationStateV2.md)

### Authorization

[api_key_v1](../README.md#api_key_v1)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized - Invalid API key |  -  |
| **409** | Too many requests or limit reached - Avoid parallel requests. See the [docs](https://docs.talon.one/docs/dev/tutorials/integrating-talon-one#managing-parallel-requests). |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

