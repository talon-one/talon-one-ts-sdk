
# FunctionDef


## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`description` | string
`help` | string
`args` | [Array&lt;FuncArgDef&gt;](FuncArgDef.md)

## Example

```typescript
import type { FunctionDef } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "type": null,
  "description": null,
  "help": null,
  "args": null,
} satisfies FunctionDef

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FunctionDef
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


