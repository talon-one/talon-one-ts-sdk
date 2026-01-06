
# StrikethroughEffect

The effect produced for the catalog item.

## Properties

Name | Type
------------ | -------------
`campaignId` | number
`rulesetId` | number
`ruleIndex` | number
`ruleName` | string
`type` | string
`props` | object
`startTime` | Date
`endTime` | Date
`selectedPriceType` | string
`selectedPrice` | number
`adjustmentReferenceId` | string
`targets` | Array&lt;object&gt;

## Example

```typescript
import type { StrikethroughEffect } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "campaignId": 3,
  "rulesetId": 11,
  "ruleIndex": 2,
  "ruleName": Add 2 points,
  "type": setDiscountPerItem,
  "props": null,
  "startTime": 2021-07-20T22:00:00Z,
  "endTime": 2021-10-01T02:00:00Z,
  "selectedPriceType": member,
  "selectedPrice": 100,
  "adjustmentReferenceId": 68851723-e6fa-488f-ace9-112581e6c19b,
  "targets": null,
} satisfies StrikethroughEffect

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StrikethroughEffect
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


