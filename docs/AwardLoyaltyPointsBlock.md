
# AwardLoyaltyPointsBlock


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`tags` | Array&lt;string&gt;
`name` | string
`program` | [AwardLoyaltyPointsBlock1Program](AwardLoyaltyPointsBlock1Program.md)
`recipient` | string
`subledger` | string
`target` | [AwardLoyaltyPointsTarget](AwardLoyaltyPointsTarget.md)
`value` | [AwardLoyaltyPointsBlock1Value](AwardLoyaltyPointsBlock1Value.md)
`partial` | boolean
`awaitsActivation` | boolean
`startDate` | any
`validityDuration` | string
`expiryDate` | any
`pendingDuration` | string
`onFailure` | [Array&lt;Block&gt;](Block.md)

## Example

```typescript
import type { AwardLoyaltyPointsBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "name": Bonus,
  "program": null,
  "recipient": Current,
  "subledger": main,
  "target": null,
  "value": null,
  "partial": false,
  "awaitsActivation": false,
  "startDate": 2026-12-24T14:15:22Z,
  "validityDuration": 30D,
  "expiryDate": 2026-12-31T00:00:00Z,
  "pendingDuration": 3D,
  "onFailure": null,
} satisfies AwardLoyaltyPointsBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AwardLoyaltyPointsBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


