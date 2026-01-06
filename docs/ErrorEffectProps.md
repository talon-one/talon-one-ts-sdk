
# ErrorEffectProps

Whenever an error occurred during evaluation, we return an error effect. This should never happen for rules created in the rule builder.

## Properties

Name | Type
------------ | -------------
`message` | string

## Example

```typescript
import type { ErrorEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "message": null,
} satisfies ErrorEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ErrorEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


