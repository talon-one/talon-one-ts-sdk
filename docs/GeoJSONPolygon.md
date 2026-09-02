
# GeoJSONPolygon

A shape formed by one or more boundaries, following the GeoJSON format. The first boundary defines the outer edge of the shape; any additional boundaries define holes within the shape.

## Properties

Name | Type
------------ | -------------
`type` | string
`coordinates` | Array&lt;Array&lt;Array&lt;number&gt;&gt;&gt;

## Example

```typescript
import type { GeoJSONPolygon } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "coordinates": [[[13, 52.3], [13.8, 52.3], [13.8, 52.7], [13, 52.7], [13, 52.3]]],
} satisfies GeoJSONPolygon

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeoJSONPolygon
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


