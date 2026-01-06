
# Effect


## Properties

Name | Type
------------ | -------------
`campaignId` | number
`rulesetId` | number
`ruleIndex` | number
`ruleName` | string
`effectType` | string
`triggeredByCoupon` | number
`triggeredForCatalogItem` | number
`conditionIndex` | number
`evaluationGroupID` | number
`evaluationGroupMode` | string
`campaignRevisionId` | number
`campaignRevisionVersionId` | number
`selectedPriceType` | string
`selectedPrice` | number
`adjustmentReferenceId` | string
`props` | any

## Example

```typescript
import type { Effect } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "campaignId": 244,
  "rulesetId": 73,
  "ruleIndex": 2,
  "ruleName": Give 20% discount,
  "effectType": rejectCoupon,
  "triggeredByCoupon": 4928,
  "triggeredForCatalogItem": 786,
  "conditionIndex": 786,
  "evaluationGroupID": 3,
  "evaluationGroupMode": stackable,
  "campaignRevisionId": 1,
  "campaignRevisionVersionId": 5,
  "selectedPriceType": member,
  "selectedPrice": 100,
  "adjustmentReferenceId": 68851723-e6fa-488f-ace9-112581e6c19b,
  "props": null,
} satisfies Effect

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Effect
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


