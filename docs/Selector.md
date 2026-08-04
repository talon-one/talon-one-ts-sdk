
# Selector

A named pipeline of steps (filter, sort, map, etc.) that filters or transforms a list of cart items. Replaces `cartItemFilter` [bindings](https://docs.talon.one/management-api#tag/Campaigns/operation/getRuleset.responses.200.bindings) in V1 rulesets.

## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`source` | string
`steps` | [Array&lt;SelectorStep&gt;](SelectorStep.md)

## Example

```typescript
import type { Selector } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": discountedCartItems,
  "type": selector,
  "source": $Session.CartItems,
  "steps": null,
} satisfies Selector

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Selector
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


