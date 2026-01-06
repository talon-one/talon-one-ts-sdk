
# CustomerProfileUpdateV2Response

Contains the updated customer profiles entities. This is the response type returned by the V2 PUT customer_profiles endpoint 

## Properties

Name | Type
------------ | -------------
`customerProfile` | [CustomerProfile](CustomerProfile.md)

## Example

```typescript
import type { CustomerProfileUpdateV2Response } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "customerProfile": null,
} satisfies CustomerProfileUpdateV2Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerProfileUpdateV2Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


