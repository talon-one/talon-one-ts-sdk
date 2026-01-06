
# MultipleAudiences


## Properties

Name | Type
------------ | -------------
`accountId` | number
`audiences` | [Array&lt;MultipleAudiencesItem&gt;](MultipleAudiencesItem.md)

## Example

```typescript
import type { MultipleAudiences } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "accountId": 3886,
  "audiences": null,
} satisfies MultipleAudiences

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MultipleAudiences
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


