
# ErrorSource

The source of the current error, exactly one of `pointer`, `parameter` or `line` will be defined. 

## Properties

Name | Type
------------ | -------------
`pointer` | string
`parameter` | string
`line` | string
`resource` | string

## Example

```typescript
import type { ErrorSource } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "pointer": null,
  "parameter": null,
  "line": null,
  "resource": null,
} satisfies ErrorSource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ErrorSource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


