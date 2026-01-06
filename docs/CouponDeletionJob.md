
# CouponDeletionJob


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`applicationId` | number
`accountId` | number
`filters` | [CouponDeletionFilters](CouponDeletionFilters.md)
`status` | string
`deletedAmount` | number
`failCount` | number
`errors` | Array&lt;string&gt;
`createdBy` | number
`communicated` | boolean
`campaignIDs` | Array&lt;number&gt;

## Example

```typescript
import type { CouponDeletionJob } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "applicationId": 322,
  "accountId": 3886,
  "filters": null,
  "status": pending,
  "deletedAmount": 1000000,
  "failCount": 10,
  "errors": ["Connection to database was reset","failed to delete codes"],
  "createdBy": 1,
  "communicated": false,
  "campaignIDs": null,
} satisfies CouponDeletionJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CouponDeletionJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


