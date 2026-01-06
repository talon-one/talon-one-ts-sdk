
# SlotDef


## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`title` | string
`description` | string
`help` | string
`writable` | boolean

## Example

```typescript
import type { SlotDef } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "type": null,
  "title": null,
  "description": null,
  "help": null,
  "writable": null,
} satisfies SlotDef

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SlotDef
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


