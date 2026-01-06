
# CatalogsStrikethroughNotificationPolicy


## Properties

Name | Type
------------ | -------------
`name` | string
`aheadOfDaysTrigger` | number
`batchSize` | number

## Example

```typescript
import type { CatalogsStrikethroughNotificationPolicy } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Christmas Sale,
  "aheadOfDaysTrigger": null,
  "batchSize": 1000,
} satisfies CatalogsStrikethroughNotificationPolicy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CatalogsStrikethroughNotificationPolicy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


