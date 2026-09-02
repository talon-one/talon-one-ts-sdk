
# CheckAttributeBlockBase


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`tags` | Array&lt;string&gt;
`operator` | string
`attribute` | any
`value` | any
`min` | any
`max` | any
`start` | any
`end` | any
`startInclusive` | boolean
`endInclusive` | boolean
`timezoneInsensitive` | boolean
`values` | any
`count` | any
`onFailure` | [Array&lt;Block&gt;](Block.md)

## Example

```typescript
import type { CheckAttributeBlockBase } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": null,
  "tags": null,
  "operator": greaterThan,
  "attribute": $Session.Total,
  "value": 100,
  "min": 10,
  "max": 100,
  "start": 2021-09-22T22:00:00Z,
  "end": 2021-09-22T22:00:00Z,
  "startInclusive": true,
  "endInclusive": true,
  "timezoneInsensitive": false,
  "values": [{name=Berlin district, geometry={type=Point, coordinates=[13.405, 52.52]}}],
  "count": 2,
  "onFailure": null,
} satisfies CheckAttributeBlockBase

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CheckAttributeBlockBase
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


