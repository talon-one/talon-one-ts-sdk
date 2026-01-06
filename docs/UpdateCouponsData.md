
# UpdateCouponsData


## Properties

Name | Type
------------ | -------------
`batchID` | string
`applicationID` | number
`campaignID` | number
`typeOfChange` | string
`operation` | string
`employeeName` | string
`notificationType` | string

## Example

```typescript
import type { UpdateCouponsData } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "batchID": null,
  "applicationID": null,
  "campaignID": null,
  "typeOfChange": null,
  "operation": null,
  "employeeName": null,
  "notificationType": null,
} satisfies UpdateCouponsData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCouponsData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


