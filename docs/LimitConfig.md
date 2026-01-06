
# LimitConfig


## Properties

Name | Type
------------ | -------------
`action` | string
`limit` | number
`period` | string
`entities` | Array&lt;string&gt;

## Example

```typescript
import type { LimitConfig } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "action": createCoupon,
  "limit": 1000,
  "period": yearly,
  "entities": [Coupon],
} satisfies LimitConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LimitConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


