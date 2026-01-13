
# PrismaticConfig

Config used for accessing integrations in Prismatic

## Properties

Name | Type
------------ | -------------
`prismaticUrl` | string
`accessToken` | string

## Example

```typescript
import type { PrismaticConfig } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "prismaticUrl": https://app.eu-west-1.prismatic.io/,
  "accessToken": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9,
} satisfies PrismaticConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PrismaticConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


