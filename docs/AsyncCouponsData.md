
# AsyncCouponsData


## Properties

Name | Type
------------ | -------------
`batchID` | string
`typeOfChange` | string
`operation` | string
`employeeName` | string
`notificationType` | string

## Example

```typescript
import type { AsyncCouponsData } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "batchID": haanlypn,
  "typeOfChange": campaign_manager,
  "operation": AsyncCouponsCreated,
  "employeeName": Franziska Schneider,
  "notificationType": null,
} satisfies AsyncCouponsData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AsyncCouponsData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


