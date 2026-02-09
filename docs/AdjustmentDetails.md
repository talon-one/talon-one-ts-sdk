
# AdjustmentDetails

Details about an applied price adjustment.

## Properties

Name | Type
------------ | -------------
`referenceId` | string
`selectedPriceType` | string
`value` | number

## Example

```typescript
import type { AdjustmentDetails } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "referenceId": 68851723-e6fa-488f-ace9-112581e6c19b,
  "selectedPriceType": member,
  "value": null,
} satisfies AdjustmentDetails

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdjustmentDetails
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


