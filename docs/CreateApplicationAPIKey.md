
# CreateApplicationAPIKey


## Properties

Name | Type
------------ | -------------
`title` | string
`expires` | Date
`platform` | string
`type` | string
`timeOffset` | number

## Example

```typescript
import type { CreateApplicationAPIKey } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "title": My generated key,
  "expires": 2023-08-24T14:00:00Z,
  "platform": none,
  "type": staging,
  "timeOffset": 100000,
} satisfies CreateApplicationAPIKey

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateApplicationAPIKey
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


