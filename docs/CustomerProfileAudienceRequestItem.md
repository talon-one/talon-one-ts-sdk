
# CustomerProfileAudienceRequestItem


## Properties

Name | Type
------------ | -------------
`action` | string
`profileIntegrationId` | string
`audienceId` | number

## Example

```typescript
import type { CustomerProfileAudienceRequestItem } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "action": add,
  "profileIntegrationId": R195412,
  "audienceId": 748,
} satisfies CustomerProfileAudienceRequestItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerProfileAudienceRequestItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


