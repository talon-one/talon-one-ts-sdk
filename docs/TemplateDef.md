
# TemplateDef


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`applicationId` | number
`title` | string
`description` | string
`help` | string
`category` | string
`expr` | Array&lt;any&gt;
`args` | [Array&lt;TemplateArgDef&gt;](TemplateArgDef.md)
`expose` | boolean
`name` | string

## Example

```typescript
import type { TemplateDef } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "applicationId": 322,
  "title": null,
  "description": null,
  "help": null,
  "category": null,
  "expr": null,
  "args": null,
  "expose": null,
  "name": null,
} satisfies TemplateDef

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TemplateDef
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


