
# CouponsNotificationPolicy


## Properties

Name | Type
------------ | -------------
`name` | string
`scopes` | Array&lt;string&gt;
`batchingEnabled` | boolean
`includeData` | boolean
`batchSize` | number

## Example

```typescript
import type { CouponsNotificationPolicy } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Christmas Sale,
  "scopes": null,
  "batchingEnabled": true,
  "includeData": true,
  "batchSize": 1000,
} satisfies CouponsNotificationPolicy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CouponsNotificationPolicy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


