
# Bundle

A named bundle definition consisting of selector sources with matching constraints. Replaces `bundle` [bindings](https://docs.talon.one/management-api#tag/Campaigns/operation/getRuleset.responses.200.bindings) in V1 rulesets.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`type` | string
`sources` | Array&lt;string&gt;
`counts` | Array&lt;number&gt;
`matchers` | Array&lt;string&gt;

## Example

```typescript
import type { Bundle } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 1b671a64-40d5-491e-99b0-da01ff1f3341,
  "name": meal_deal,
  "type": bundle,
  "sources": [{{$mains}}, {{$drinks}}],
  "counts": [1, 2],
  "matchers": [color],
} satisfies Bundle

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Bundle
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


