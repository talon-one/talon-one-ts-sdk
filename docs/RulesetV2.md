
# RulesetV2

Ruleset in the V2 JSON block format.

## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`userId` | number
`campaignId` | number
`templateId` | number
`activatedAt` | Date
`promotionRules` | [Array&lt;PromotionRuleV2&gt;](PromotionRuleV2.md)
`strikethroughRules` | [Array&lt;StrikethroughRuleV2&gt;](StrikethroughRuleV2.md)
`selectors` | [Array&lt;Selector&gt;](Selector.md)
`bundles` | [Array&lt;Bundle&gt;](Bundle.md)
`parameters` | [Array&lt;TemplateParameter&gt;](TemplateParameter.md)

## Example

```typescript
import type { RulesetV2 } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": null,
  "userId": 385,
  "campaignId": 320,
  "templateId": 3,
  "activatedAt": null,
  "promotionRules": null,
  "strikethroughRules": null,
  "selectors": null,
  "bundles": null,
  "parameters": null,
} satisfies RulesetV2

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RulesetV2
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


