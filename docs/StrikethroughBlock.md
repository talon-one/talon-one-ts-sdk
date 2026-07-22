
# StrikethroughBlock

A block valid in a strikethrough rule. The `type` field identifies the concrete block type.

## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`tags` | Array&lt;string&gt;
`operator` | string
`blocks` | [Array&lt;StrikethroughBlock&gt;](StrikethroughBlock.md)
`onFailure` | [Array&lt;StrikethroughBlock&gt;](StrikethroughBlock.md)
`onError` | { [key: string]: Array&lt;StrikethroughBlock&gt;; }
`expression` | Array&lt;any&gt;
`attribute` | string
`value` | any
`min` | any
`max` | any
`values` | any
`count` | any

## Example

```typescript
import type { StrikethroughBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "operator": greaterThan,
  "blocks": null,
  "onFailure": null,
  "onError": null,
  "expression": null,
  "attribute": $Session.Total,
  "value": null,
  "min": null,
  "max": null,
  "values": null,
  "count": null,
} satisfies StrikethroughBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StrikethroughBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


