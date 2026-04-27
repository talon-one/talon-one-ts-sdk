
# CampaignEligibility


## Properties

Name | Type
------------ | -------------
`id` | number
`applicationId` | number
`name` | string
`description` | string
`startTime` | Date
`endTime` | Date
`attributes` | object
`state` | string
`tags` | Array&lt;string&gt;
`features` | Array&lt;string&gt;
`rules` | [Array&lt;RuleMetadata&gt;](RuleMetadata.md)

## Example

```typescript
import type { CampaignEligibility } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 4,
  "applicationId": 322,
  "name": Summer promotions,
  "description": Campaign for all summer 2021 promotions,
  "startTime": 2021-07-20T22:00:00Z,
  "endTime": 2021-09-22T22:00:00Z,
  "attributes": null,
  "state": enabled,
  "tags": [summer],
  "features": [coupons, referrals],
  "rules": null,
} satisfies CampaignEligibility

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignEligibility
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


