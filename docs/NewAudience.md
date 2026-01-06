
# NewAudience


## Properties

Name | Type
------------ | -------------
`name` | string
`sandbox` | boolean
`description` | string
`integration` | string
`integrationId` | string
`createdIn3rdParty` | boolean
`lastUpdate` | Date

## Example

```typescript
import type { NewAudience } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Travel audience,
  "sandbox": true,
  "description": Travel audience 18-27,
  "integration": mparticle,
  "integrationId": 382370BKDB946,
  "createdIn3rdParty": false,
  "lastUpdate": 2022-04-26T11:02:38Z,
} satisfies NewAudience

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewAudience
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


