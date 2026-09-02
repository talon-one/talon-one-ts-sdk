
# GeoJSONPoint

A single point on a map, defined by its longitude and latitude coordinates, following the GeoJSON format.

## Properties

Name | Type
------------ | -------------
`type` | string
`coordinates` | Array&lt;number&gt;

## Example

```typescript
import type { GeoJSONPoint } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "coordinates": [13.405, 52.52],
} satisfies GeoJSONPoint

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeoJSONPoint
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


