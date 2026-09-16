
# UpdateLoyaltyPointsExpiryBlock


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`tags` | Array&lt;string&gt;
`operator` | string
`program` | [UpdateLoyaltyPointsExpiryBlock1Program](UpdateLoyaltyPointsExpiryBlock1Program.md)
`recipient` | string
`subledger` | string
`value` | any
`onFailure` | [Array&lt;Block&gt;](Block.md)

## Example

```typescript
import type { UpdateLoyaltyPointsExpiryBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "operator": setTo,
  "program": null,
  "recipient": Current,
  "subledger": main,
  "value": 2026-12-31T00:00:00Z,
  "onFailure": null,
} satisfies UpdateLoyaltyPointsExpiryBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateLoyaltyPointsExpiryBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


