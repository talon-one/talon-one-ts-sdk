
# CreateTemplateCampaignResponse


## Properties

Name | Type
------------ | -------------
`campaign` | [Campaign](Campaign.md)
`ruleset` | [Ruleset](Ruleset.md)
`collections` | [Array&lt;Collection&gt;](Collection.md)

## Example

```typescript
import type { CreateTemplateCampaignResponse } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "campaign": null,
  "ruleset": null,
  "collections": null,
} satisfies CreateTemplateCampaignResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateTemplateCampaignResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


