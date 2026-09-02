
# IntegrationRewardsCatalog200Response


## Properties

Name | Type
------------ | -------------
`catalog` | [IntegrationRewardsCatalog200ResponseCatalog](IntegrationRewardsCatalog200ResponseCatalog.md)
`loyalty` | [{ [key: string]: LoyaltyBalances; }](LoyaltyBalances.md)

## Example

```typescript
import type { IntegrationRewardsCatalog200Response } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "catalog": null,
  "loyalty": null,
} satisfies IntegrationRewardsCatalog200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationRewardsCatalog200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


