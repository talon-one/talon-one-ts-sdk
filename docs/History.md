
# History


## Properties

Name | Type
------------ | -------------
`id` | number
`observedAt` | Date
`contextIds` | Array&lt;string&gt;
`price` | number
`metadata` | [BestPriorPriceMetadata](BestPriorPriceMetadata.md)
`target` | [LabelTarget](LabelTarget.md)
`excludedAt` | Date
`exclusionReason` | string

## Example

```typescript
import type { History } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1,
  "observedAt": 2025-11-10T23:00:00Z,
  "contextIds": [SpringSale, SummerSale2025],
  "price": 99.99,
  "metadata": null,
  "target": null,
  "excludedAt": 2025-11-10T23:00:00Z,
  "exclusionReason": Incorrect contextID value,
} satisfies History

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as History
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


