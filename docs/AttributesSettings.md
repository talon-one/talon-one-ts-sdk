
# AttributesSettings

Arbitrary settings associated with attributes.

## Properties

Name | Type
------------ | -------------
`mandatory` | [AttributesMandatory](AttributesMandatory.md)

## Example

```typescript
import type { AttributesSettings } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "mandatory": null,
} satisfies AttributesSettings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AttributesSettings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


