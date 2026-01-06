
# UpdateCustomerSessionV2409Response


## Properties

Name | Type
------------ | -------------
`message` | string
`errors` | Array&lt;any&gt;
`statusCode` | number

## Example

```typescript
import type { UpdateCustomerSessionV2409Response } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "message": Too many requests are updating this session at the same time,
  "errors": null,
  "statusCode": 409,
} satisfies UpdateCustomerSessionV2409Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateCustomerSessionV2409Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


