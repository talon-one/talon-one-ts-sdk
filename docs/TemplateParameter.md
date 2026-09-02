
# TemplateParameter

A named parameter definition that exposes a configurable value in a campaign template. Replaces `templateParameter` [bindings](https://docs.talon.one/management-api#tag/Campaigns/operation/getRuleset.responses.200.bindings) in V1 rulesets.

## Properties

Name | Type
------------ | -------------
`name` | string
`value` | any
`valueType` | string
`minValue` | number
`maxValue` | number
`description` | string
`attribute` | number

## Example

```typescript
import type { TemplateParameter } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": minCartTotal,
  "value": 50,
  "valueType": number,
  "minValue": 0,
  "maxValue": 10000,
  "description": Minimum cart total to trigger the campaign.,
  "attribute": 42,
} satisfies TemplateParameter

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TemplateParameter
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


