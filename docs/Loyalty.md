
# Loyalty

Customer-specific information about loyalty points.

## Properties

Name | Type
------------ | -------------
`cards` | [Array&lt;LoyaltyCard&gt;](LoyaltyCard.md)
`programs` | [{ [key: string]: LoyaltyProgramLedgers; }](LoyaltyProgramLedgers.md)

## Example

```typescript
import type { Loyalty } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "cards": null,
  "programs": null,
} satisfies Loyalty

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Loyalty
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


