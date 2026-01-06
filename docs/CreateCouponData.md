
# CreateCouponData


## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;ExtendedCoupon&gt;](ExtendedCoupon.md)
`totalResultSize` | number
`batchID` | string
`typeOfChange` | string
`operation` | string
`employeeName` | string
`notificationType` | string

## Example

```typescript
import type { CreateCouponData } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "data": [{"id":1,"created":"2023-01-31T15:19:25.18417+01:00","campaignId":1,"value":"73KXKKFP","usageLimit":1,"reservationLimit":0,"usageCounter":0,"attributes":{},"reservation":true,"batchId":"nqylhnni"},{"id":2,"created":"2023-01-31T15:19:25.18417+01:00","campaignId":1,"value":"BH3CXXLW","usageLimit":1,"reservationLimit":0,"usageCounter":0,"attributes":{},"reservation":true,"batchId":"nqylhnni"}],
  "totalResultSize": 1,
  "batchID": haanlypn,
  "typeOfChange": campaign_manager,
  "operation": AsyncCouponsCreated,
  "employeeName": Franziska Schneider,
  "notificationType": null,
} satisfies CreateCouponData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateCouponData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


