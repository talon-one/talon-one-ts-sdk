
# CheckLoyaltyBalanceBlock


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`tags` | Array&lt;string&gt;
`operator` | string
`program` | [CheckLoyaltyBalanceBlock1Program](CheckLoyaltyBalanceBlock1Program.md)
`subledger` | string
`balance` | string
`value` | number
`onFailure` | [Array&lt;Block&gt;](Block.md)

## Example

```typescript
import type { CheckLoyaltyBalanceBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "operator": greaterThanOrEqual,
  "program": null,
  "subledger": ,
  "balance": current,
  "value": 500,
  "onFailure": null,
} satisfies CheckLoyaltyBalanceBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CheckLoyaltyBalanceBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


