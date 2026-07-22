
# NewDigitalPass


## Properties

Name | Type
------------ | -------------
`loyaltyProgramId` | number
`passTemplateId` | string
`profileId` | string
`loyaltyCardId` | string
`platform` | string
`attributes` | { [key: string]: string; }

## Example

```typescript
import type { NewDigitalPass } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "loyaltyProgramId": 42,
  "passTemplateId": tmpl_summer_loyalty,
  "profileId": 12412412421,
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


