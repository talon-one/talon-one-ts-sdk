
# RewardCatalogItem

A reward returned by the rewards catalog Integration API endpoint.

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`description` | string
`pointsRequired` | [Array&lt;RewardPointsRequired&gt;](RewardPointsRequired.md)
`rule` | [RuleMetadata](RuleMetadata.md)
`eligibility` | [RewardEligibility](RewardEligibility.md)

## Example

```typescript
import type { RewardCatalogItem } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 42,
  "name": 10% Off Coupon,
  "description": Applies to next order,
  "pointsRequired": null,
  "rule": null,
  "eligibility": null,
} satisfies RewardCatalogItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RewardCatalogItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


