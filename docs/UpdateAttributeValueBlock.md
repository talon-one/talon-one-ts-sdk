
# UpdateAttributeValueBlock


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`tags` | Array&lt;string&gt;
`operator` | string
`attribute` | [UpdateAttributeValueBlock1Attribute](UpdateAttributeValueBlock1Attribute.md)
`value` | any
`target` | [UpdateAttributeValueBlock1Target](UpdateAttributeValueBlock1Target.md)

## Example

```typescript
import type { UpdateAttributeValueBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "operator": setTo,
  "attribute": null,
  "value": 10,
  "target": null,
} satisfies UpdateAttributeValueBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateAttributeValueBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


