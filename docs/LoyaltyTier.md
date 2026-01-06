
# LoyaltyTier


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`programID` | number
`programName` | string
`programTitle` | string
`name` | string
`minPoints` | number

## Example

```typescript
import type { LoyaltyTier } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "programID": 125,
  "programName": Loyalty_program,
  "programTitle": Loyalty program,
  "name": Gold,
  "minPoints": 300,
} satisfies LoyaltyTier

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LoyaltyTier
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


