
# UpdateReward


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`status` | string
`rule` | [Array&lt;Rule&gt;](Rule.md)
`bindings` | [Array&lt;Binding&gt;](Binding.md)

## Example

```typescript
import type { UpdateReward } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Free Coffee,
  "description": This reward gets you one free coffee.,
  "status": active,
  "rule": null,
  "bindings": [],
} satisfies UpdateReward

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateReward
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


