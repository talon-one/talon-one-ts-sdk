
# CampaignTemplateParams


## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`description` | string
`attributeId` | number

## Example

```typescript
import type { CampaignTemplateParams } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "name": discount_value,
  "type": number,
  "description": This is a template parameter of type `number`.,
  "attributeId": 42,
} satisfies CampaignTemplateParams

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CampaignTemplateParams
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


