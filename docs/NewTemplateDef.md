
# NewTemplateDef


## Properties

Name | Type
------------ | -------------
`title` | string
`description` | string
`help` | string
`category` | string
`expr` | Array&lt;any&gt;
`args` | [Array&lt;TemplateArgDef&gt;](TemplateArgDef.md)
`expose` | boolean

## Example

```typescript
import type { NewTemplateDef } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "description": null,
  "help": null,
  "category": null,
  "expr": null,
  "args": null,
  "expose": null,
} satisfies NewTemplateDef

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewTemplateDef
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


