
# TemplateArgDef


## Properties

Name | Type
------------ | -------------
`type` | string
`description` | string
`title` | string
`ui` | object
`key` | string
`picklistID` | number
`restrictedByPicklist` | boolean

## Example

```typescript
import type { TemplateArgDef } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "description": null,
  "title": null,
  "ui": null,
  "key": null,
  "picklistID": null,
  "restrictedByPicklist": null,
} satisfies TemplateArgDef

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TemplateArgDef
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


