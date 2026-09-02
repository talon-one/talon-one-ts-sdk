
# RedeemLoyaltyPointsBlock


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`tags` | Array&lt;string&gt;
`program` | [RedeemLoyaltyPointsBlock1Program](RedeemLoyaltyPointsBlock1Program.md)
`subledger` | string
`value` | [RedeemLoyaltyPointsBlock1Value](RedeemLoyaltyPointsBlock1Value.md)
`name` | string
`onFailure` | [Array&lt;Block&gt;](Block.md)

## Example

```typescript
import type { RedeemLoyaltyPointsBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "program": null,
  "subledger": main,
  "value": null,
  "name": Purchase Deduction,
  "onFailure": null,
} satisfies RedeemLoyaltyPointsBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RedeemLoyaltyPointsBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


