
# MultipleCustomerProfileIntegrationRequestItem


## Properties

Name | Type
------------ | -------------
`attributes` | object
`integrationId` | string

## Example

```typescript
import type { MultipleCustomerProfileIntegrationRequestItem } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "attributes": {Language=english, ShippingCountry=DE},
  "integrationId": R195412,
} satisfies MultipleCustomerProfileIntegrationRequestItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MultipleCustomerProfileIntegrationRequestItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


