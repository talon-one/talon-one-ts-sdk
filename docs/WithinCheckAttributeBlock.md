
# WithinCheckAttributeBlock

Variant of `CheckAttributeBlock` for the `within` operator, which requires both a start and end value.

## Properties

Name | Type
------------ | -------------
`operator` | string
`start` | any
`end` | any
`startInclusive` | boolean
`endInclusive` | boolean
`timezoneInsensitive` | boolean

## Example

```typescript
import type { WithinCheckAttributeBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "operator": null,
  "start": null,
  "end": null,
  "startInclusive": true,
  "endInclusive": true,
  "timezoneInsensitive": false,
} satisfies WithinCheckAttributeBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WithinCheckAttributeBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


