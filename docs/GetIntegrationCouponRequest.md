
# GetIntegrationCouponRequest


## Properties

Name | Type
------------ | -------------
`campaignIds` | Array&lt;number&gt;
`limit` | number

## Example

```typescript
import type { GetIntegrationCouponRequest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "campaignIds": [1,2,3],
  "limit": null,
} satisfies GetIntegrationCouponRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetIntegrationCouponRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


