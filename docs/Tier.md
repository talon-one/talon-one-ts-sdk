
# Tier


## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`startDate` | Date
`expiryDate` | Date
`downgradePolicy` | string

## Example

```typescript
import type { Tier } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 11,
  "name": bronze,
  "startDate": 2021-05-03T12:32:00Z07:00,
  "expiryDate": 2022-08-02T15:04:05Z07:00,
  "downgradePolicy": null,
} satisfies Tier

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Tier
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


