
# NewDigitalPass


## Properties

Name | Type
------------ | -------------
`loyaltyProgramId` | number
`passTemplateId` | string
`profileIntegrationId` | string
`loyaltyCardId` | string
`platform` | string
`attributes` | { [key: string]: string; }

## Example

```typescript
import type { NewDigitalPass } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "loyaltyProgramId": 42,
  "passTemplateId": 3fa85f64-5717-4562-b3fc-2c963f66afa6,
  "profileIntegrationId": 12412412421,
  "loyaltyCardId": summer-loyalty-0e2f,
  "platform": google,
  "attributes": {hm_member_name=Jane Doe},
} satisfies NewDigitalPass

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewDigitalPass
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


