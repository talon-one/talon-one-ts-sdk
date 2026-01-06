
# StrikethroughLabelingNotification

The strikethrough labels notification for an application.

## Properties

Name | Type
------------ | -------------
`version` | string
`validFrom` | Date
`applicationId` | number
`currentBatch` | number
`totalBatches` | number
`trigger` | [StrikethroughTrigger](StrikethroughTrigger.md)
`changedItems` | [Array&lt;StrikethroughChangedItem&gt;](StrikethroughChangedItem.md)
`notificationType` | string

## Example

```typescript
import type { StrikethroughLabelingNotification } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "validFrom": 2021-07-20T22:00:00Z,
  "applicationId": 322,
  "currentBatch": 1,
  "totalBatches": 10,
  "trigger": null,
  "changedItems": null,
  "notificationType": null,
} satisfies StrikethroughLabelingNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StrikethroughLabelingNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


