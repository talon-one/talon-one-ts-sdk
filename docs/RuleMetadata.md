
# RuleMetadata


## Properties

Name | Type
------------ | -------------
`title` | string
`displayName` | string
`displayDescription` | string
`relatedData` | string
`eligibility` | [Array&lt;RuleEligibility&gt;](RuleEligibility.md)

## Example

```typescript
import type { RuleMetadata } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "title": Give discount via coupon,
  "displayName": 20% off all shoes!,
  "displayDescription": Get a 20% discount on all shoes during Thanksgiving! Offer valid till Dec 5 only.,
  "relatedData": https://example.com/discounts/20-off-shoes.png,
  "eligibility": null,
} satisfies RuleMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuleMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


