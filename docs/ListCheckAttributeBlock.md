
# ListCheckAttributeBlock


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
import type { ListCheckAttributeBlock } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": a1b2c3d4-e5f6-7890-abcd-ef1234567890,
  "type": checkAttribute,
  "tags": null,
  "operator": null,
  "attribute": $Session.Total,
  "value": 100,
  "min": 10,
  "max": 100,
  "start": 2021-09-22T22:00:00Z,
  "end": 2021-09-22T22:00:00Z,
  "startInclusive": true,
  "endInclusive": true,
  "timezoneInsensitive": false,
  "values": null,
  "count": 2,
  "onFailure": null,
} satisfies ListCheckAttributeBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListCheckAttributeBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


