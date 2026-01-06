
# LoyaltyProgramEntity


## Properties

Name | Type
------------ | -------------
`programID` | number
`programName` | string
`programTitle` | string

## Example

```typescript
import type { LoyaltyProgramEntity } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "programID": 125,
  "programName": Loyalty_program,
  "programTitle": Loyalty program,
} satisfies LoyaltyProgramEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltyProgramEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


