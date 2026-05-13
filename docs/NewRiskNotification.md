
# NewRiskNotification

Data for creating a new risk notification.

## Properties

Name | Type
------------ | -------------
`entity` | string
`activity` | string
`timeFrame` | string

## Example

```typescript
import type { NewRiskNotification } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "entity": customer_profile,
  "activity": loyalty_points_earned,
  "timeFrame": 1_week,
} satisfies NewRiskNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewRiskNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


