
# ReturnedCartItem


## Properties

Name | Type
------------ | -------------
`position` | number
`quantity` | number

## Example

```typescript
import type { ReturnedCartItem } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "position": 2,
  "quantity": 1,
} satisfies ReturnedCartItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReturnedCartItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


