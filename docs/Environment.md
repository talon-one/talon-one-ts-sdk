
# Environment


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`applicationId` | number
`slots` | [Array&lt;SlotDef&gt;](SlotDef.md)
`functions` | [Array&lt;FunctionDef&gt;](FunctionDef.md)
`templates` | [Array&lt;TemplateDef&gt;](TemplateDef.md)
`variables` | string
`giveawaysPools` | [Array&lt;GiveawaysPool&gt;](GiveawaysPool.md)
`loyaltyPrograms` | [Array&lt;LoyaltyProgram&gt;](LoyaltyProgram.md)
`achievements` | [Array&lt;Achievement&gt;](Achievement.md)
`attributes` | [Array&lt;Attribute&gt;](Attribute.md)
`additionalCosts` | [Array&lt;AccountAdditionalCost&gt;](AccountAdditionalCost.md)
`audiences` | [Array&lt;Audience&gt;](Audience.md)
`collections` | [Array&lt;Collection&gt;](Collection.md)
`applicationCartItemFilters` | [Array&lt;ApplicationCIF&gt;](ApplicationCIF.md)
`priceTypes` | [Array&lt;PriceType&gt;](PriceType.md)

## Example

```typescript
import type { Environment } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "applicationId": 322,
  "slots": null,
  "functions": null,
  "templates": null,
  "variables": null,
  "giveawaysPools": null,
  "loyaltyPrograms": null,
  "achievements": null,
  "attributes": null,
  "additionalCosts": null,
  "audiences": null,
  "collections": null,
  "applicationCartItemFilters": null,
  "priceTypes": null,
} satisfies Environment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Environment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


