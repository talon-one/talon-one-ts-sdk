
# ShowBundleMetadataEffectProps

This effect is **deprecated**. The properties specific to the \"ShowBundleMetadata\" effect. This effect contains information that allows you to associate the discounts from a rule in a bundle campaign with specific cart items. This way you can distinguish from \"normal\" discounts that were not the result of a product bundle. 

## Properties

Name | Type
------------ | -------------
`description` | string
`bundleAttributes` | Array&lt;string&gt;
`itemsIndices` | Array&lt;number&gt;

## Example

```typescript
import type { ShowBundleMetadataEffectProps } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "bundleAttributes": null,
  "itemsIndices": null,
} satisfies ShowBundleMetadataEffectProps

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ShowBundleMetadataEffectProps
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


