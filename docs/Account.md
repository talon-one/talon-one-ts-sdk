
# Account


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`modified` | Date
`companyName` | string
`domainName` | string
`state` | string
`billingEmail` | string
`planName` | string
`planExpires` | Date
`applicationLimit` | number
`userLimit` | number
`campaignLimit` | number
`apiLimit` | number
`applicationCount` | number
`userCount` | number
`campaignsActiveCount` | number
`campaignsInactiveCount` | number
`attributes` | object

## Example

```typescript
import type { Account } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "modified": 2021-09-12T10:12:42Z,
  "companyName": null,
  "domainName": null,
  "state": null,
  "billingEmail": null,
  "planName": null,
  "planExpires": null,
  "applicationLimit": null,
  "userLimit": null,
  "campaignLimit": null,
  "apiLimit": null,
  "applicationCount": null,
  "userCount": null,
  "campaignsActiveCount": null,
  "campaignsInactiveCount": null,
  "attributes": null,
} satisfies Account

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Account
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


