
# DigitalPass


## Properties

Name | Type
------------ | -------------
`passId` | string
`passTemplateId` | string
`status` | string
`passUrl` | string

## Example

```typescript
import type { DigitalPass } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "passId": pass_9c3f1a2b,
  "passTemplateId": tmpl_summer_loyalty,
  "status": created,
  "passUrl": https://wallet.example.com/passes/pass_9c3f1a2b,
} satisfies DigitalPass

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DigitalPass
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


