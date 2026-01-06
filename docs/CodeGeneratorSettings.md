
# CodeGeneratorSettings


## Properties

Name | Type
------------ | -------------
`validCharacters` | Array&lt;string&gt;
`couponPattern` | string

## Example

```typescript
import type { CodeGeneratorSettings } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "validCharacters": [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  "couponPattern": SUMMER-####-####,
} satisfies CodeGeneratorSettings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CodeGeneratorSettings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


