
# TierDowngradeNotification


## Properties

Name | Type
------------ | -------------
`totalResultSize` | number
`data` | [Array&lt;TierDowngradeData&gt;](TierDowngradeData.md)
`notificationType` | string

## Example

```typescript
import type { TierDowngradeNotification } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "totalResultSize": 1,
  "data": null,
  "notificationType": null,
} satisfies TierDowngradeNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TierDowngradeNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


