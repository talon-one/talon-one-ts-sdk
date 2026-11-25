
# NewExportJob


## Properties

Name | Type
------------ | -------------
`type` | [ExportJobType](ExportJobType.md)
`args` | { [key: string]: any; }
`destination` | [Array&lt;ExportJobDestination&gt;](ExportJobDestination.md)
`cronSchedule` | string
`timezone` | string
`enabled` | boolean
`allowConcurrentRuns` | boolean
`overrideFilename` | string

## Example

```typescript
import type { NewExportJob } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "args": {loyaltyProgramID=6},
  "destination": [{type=gcs, bucket=acme-exports, compression=gzip}],
  "cronSchedule": 0 3 * * *,
  "timezone": Europe/Berlin,
  "enabled": true,
  "allowConcurrentRuns": null,
  "overrideFilename": acme-exports,
} satisfies NewExportJob

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NewExportJob
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


