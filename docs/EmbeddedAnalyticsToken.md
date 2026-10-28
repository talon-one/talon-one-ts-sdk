
# EmbeddedAnalyticsToken

Contains a JWT for authentication and the hostname of the embedded analytics instance.

## Properties

Name | Type
------------ | -------------
`token` | string
`hostname` | string

## Example

```typescript
import type { EmbeddedAnalyticsToken } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "token": eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJleGFtcGxlLXVzZXIiLCJpc3MiOiJ0YWxvbi5vbmUiLCJpYXQiOjE3NjcyMjU2MDAsImV4cCI6MTc2NzIyOTIwMH0.ZXhhbXBsZS1zaWduYXR1cmUtbm90LXZhbGlk,
  "hostname": https://talon-sg.cloud.analyticsprovider.com,
} satisfies EmbeddedAnalyticsToken

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddedAnalyticsToken
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


