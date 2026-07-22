
# UpdateAudienceMembershipBlock1Audience

The audience to add the customer to or remove them from.

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`integration` | string
`integrationId` | string

## Example

```typescript
import type { UpdateAudienceMembershipBlock1Audience } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 42,
  "name": Travel audience,
  "integration": mparticle,
  "integrationId": 382370BKDB946,
} satisfies UpdateAudienceMembershipBlock1Audience

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAudienceMembershipBlock1Audience
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


