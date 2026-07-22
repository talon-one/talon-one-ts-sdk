
# StrikethroughGroupBlock


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

## Example

```typescript
import type { StrikethroughGroupBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "operator": null,
  "blocks": null,
  "onFailure": null,
  "onError": null,
} satisfies StrikethroughGroupBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StrikethroughGroupBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


