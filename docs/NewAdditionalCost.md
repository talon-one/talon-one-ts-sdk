
# NewAdditionalCost


## Properties

Name | Type
------------ | -------------
`name` | string
`title` | string
`description` | string
`subscribedApplicationsIds` | Array&lt;number&gt;
`type` | string

## Example

```typescript
import type { NewAdditionalCost } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": shippingFee,
  "title": Shipping fee,
  "description": A shipping fee,
  "subscribedApplicationsIds": [3, 13],
  "type": session,
} satisfies NewAdditionalCost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewAdditionalCost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


