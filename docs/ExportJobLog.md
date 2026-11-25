
# ExportJobLog


## Properties

Name | Type
------------ | -------------
`id` | number
`exportJobId` | number
`type` | [ExportJobType](ExportJobType.md)
`result` | [ExportJobLogResult](ExportJobLogResult.md)
`filename` | string
`log` | string
`startedAt` | Date
`finishedAt` | Date

## Example

```typescript
import type { ExportJobLog } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 6,
  "exportJobId": 6,
  "type": null,
  "result": null,
  "filename": 6_loyalty_ledger_entries_2026-11-10,
  "log": 1 rows exported to 1 destinations,
  "startedAt": 2020-06-10T09:05:27.993483Z,
  "finishedAt": 2020-06-10T09:05:27.993483Z,
} satisfies ExportJobLog

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportJobLog
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


