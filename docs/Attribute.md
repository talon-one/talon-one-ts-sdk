
# Attribute


## Properties

Name | Type
------------ | -------------
`id` | number
`created` | Date
`accountId` | number
`entity` | string
`eventType` | string
`name` | string
`title` | string
`type` | string
`description` | string
`suggestions` | Array&lt;string&gt;
`hasAllowedList` | boolean
`restrictedBySuggestions` | boolean
`editable` | boolean
`subscribedApplicationsIds` | Array&lt;number&gt;
`subscribedCatalogsIds` | Array&lt;number&gt;
`allowedSubscriptions` | Array&lt;string&gt;
`eventTypeId` | number

## Example

```typescript
import type { Attribute } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "created": 2020-06-10T09:05:27.993483Z,
  "accountId": 3886,
  "entity": Event,
  "eventType": pageViewed,
  "name": pageViewed,
  "title": Page view event,
  "type": string,
  "description": Event triggered when a customer displays a page.,
  "suggestions": null,
  "hasAllowedList": false,
  "restrictedBySuggestions": false,
  "editable": true,
  "subscribedApplicationsIds": [1, 4, 9],
  "subscribedCatalogsIds": [2, 5],
  "allowedSubscriptions": [application, catalog],
  "eventTypeId": 22,
} satisfies Attribute

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Attribute
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


