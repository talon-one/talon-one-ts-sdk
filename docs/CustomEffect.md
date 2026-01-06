
# CustomEffect


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`accountId` | number
`modified` | Date
`applicationIds` | Array&lt;number&gt;
`isPerItem` | boolean
`name` | string
`title` | string
`payload` | string
`description` | string
`enabled` | boolean
`params` | [Array&lt;TemplateArgDef&gt;](TemplateArgDef.md)
`modifiedBy` | number
`createdBy` | number

## Example

```typescript
import type { CustomEffect } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "accountId": 3886,
  "modified": 2021-09-12T10:12:42Z,
  "applicationIds": null,
  "isPerItem": null,
  "name": null,
  "title": null,
  "payload": null,
  "description": null,
  "enabled": null,
  "params": null,
  "modifiedBy": 334,
  "createdBy": 216,
} satisfies CustomEffect

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomEffect
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


