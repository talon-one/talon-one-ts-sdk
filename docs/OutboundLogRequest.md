
# OutboundLogRequest

Details of the outbound HTTP request.

## Properties

Name | Type
------------ | -------------
`method` | string
`url` | string
`headers` | Array&lt;string&gt;
`body` | { [key: string]: any; }

## Example

```typescript
import type { OutboundLogRequest } from 'talon_one_sdk'

// TODO: Update the object below with actual values
const example = {
  "method": POST,
  "url": https://example.com/webhook,
  "headers": [content-type: application/json],
  "body": {ProfileIntegrationID=URNGV8294NV, LoyaltyProgramID=5, SubledgerID=sub-123, Amount=10.99, Reason=Compensation, TypeOfChange=campaign_manager, EmployeeName=Franziska Schneider, UserID=25, Operation=addition, StartDate=2023-01-24T14:15:22Z, ExpiryDate=2024-01-24T14:15:22Z, SessionIntegrationID=cc53e4fa-547f-4f5e-8333-76e05c381f67, NotificationType=LoyaltyPointsDeducted, TransactionUUID=1a6a7599-2622-4489-9034-5a62da3944e0},
} satisfies OutboundLogRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutboundLogRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


