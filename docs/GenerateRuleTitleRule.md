
# GenerateRuleTitleRule


## Properties

Name | Type
------------ | -------------
`effects` | Array&lt;object&gt;
`condition` | Array&lt;any&gt;

## Example

```typescript
import type { GenerateRuleTitleRule } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "effects": [catch, [noop], [setDiscount, 10% off, [*, [., Session, Total], [/, 10, 100]]]],
  "condition": [and, [couponValid]],
} satisfies GenerateRuleTitleRule

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GenerateRuleTitleRule
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


