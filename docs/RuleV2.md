
# RuleV2

Shared fields common to all V2 rule types.

## Properties

Name | Type
------------ | -------------
`id` | string
`parentId` | string
`title` | string
`description` | string

## Example

```typescript
import type { RuleV2 } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "parentId": null,
  "title": 10% off for loyalty members,
  "description": null,
} satisfies RuleV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RuleV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


