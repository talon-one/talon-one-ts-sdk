
# Revision


## Properties

Name | Type
------------ | -------------
`id` | number
`activateAt` | Date
`accountId` | number
`applicationId` | number
`campaignId` | number
`created` | Date
`createdBy` | number
`activatedAt` | Date
`activatedBy` | number
`currentVersion` | [RevisionVersion](RevisionVersion.md)

## Example

```typescript
import type { Revision } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "activateAt": null,
  "accountId": null,
  "applicationId": null,
  "campaignId": null,
  "created": null,
  "createdBy": null,
  "activatedAt": null,
  "activatedBy": null,
  "currentVersion": null,
} satisfies Revision

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Revision
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


