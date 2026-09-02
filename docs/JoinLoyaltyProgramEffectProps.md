
# JoinLoyaltyProgramEffectProps

This effect indicates that a customer profile was joined to a profile-based loyalty program with the specified join date.  > [!note] **Note** > - This effect requires a customer profile. It does not work for anonymous sessions. > - The effect fails if the customer profile has already joined the loyalty program. 

## Properties

Name | Type
------------ | -------------
`programId` | number
`joinDate` | Date

## Example

```typescript
import type { JoinLoyaltyProgramEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "programId": 5,
  "joinDate": 2026-01-02T03:04:05Z,
} satisfies JoinLoyaltyProgramEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JoinLoyaltyProgramEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


