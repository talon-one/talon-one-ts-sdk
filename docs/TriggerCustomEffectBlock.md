
# TriggerCustomEffectBlock


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`tags` | Array&lt;string&gt;
`customEffect` | [TriggerCustomEffectBlock1CustomEffect](TriggerCustomEffectBlock1CustomEffect.md)
`params` | { [key: string]: any; }
`target` | [TriggerCustomEffectBlock1Target](TriggerCustomEffectBlock1Target.md)
`onError` | { [key: string]: Array&lt;Block&gt;; }

## Example

```typescript
import type { TriggerCustomEffectBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "customEffect": null,
  "params": {template_id=TPL-10293},
  "target": null,
  "onError": null,
} satisfies TriggerCustomEffectBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TriggerCustomEffectBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


