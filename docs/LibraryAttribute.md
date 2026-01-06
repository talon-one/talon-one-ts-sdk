
# LibraryAttribute


## Properties

Name | Type
------------ | -------------
`entity` | string
`name` | string
`title` | string
`type` | string
`description` | string
`presets` | Array&lt;string&gt;
`suggestions` | Array&lt;string&gt;

## Example

```typescript
import type { LibraryAttribute } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "entity": null,
  "name": null,
  "title": null,
  "type": null,
  "description": null,
  "presets": null,
  "suggestions": null,
} satisfies LibraryAttribute

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LibraryAttribute
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


