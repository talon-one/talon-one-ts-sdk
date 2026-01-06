
# TierDowngradeNotificationPolicy


## Properties

Name | Type
------------ | -------------
`name` | string
`batchingEnabled` | boolean
`batchSize` | number

## Example

```typescript
import type { TierDowngradeNotificationPolicy } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Christmas Sale,
  "batchingEnabled": false,
  "batchSize": 1000,
} satisfies TierDowngradeNotificationPolicy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TierDowngradeNotificationPolicy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


