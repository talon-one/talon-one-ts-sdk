
# DeleteCouponsData


## Properties

Name | Type
------------ | -------------
`typeOfChange` | string
`operation` | string
`employeeName` | string
`batchID` | string
`applicationID` | number
`campaignID` | number
`totalResultSize` | number
`notificationType` | string

## Example

```typescript
import type { DeleteCouponsData } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "typeOfChange": null,
  "operation": null,
  "employeeName": null,
  "batchID": null,
  "applicationID": null,
  "campaignID": null,
  "totalResultSize": null,
  "notificationType": null,
} satisfies DeleteCouponsData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeleteCouponsData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


