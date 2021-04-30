# modzyClient.getResult

Get the current results of a job execution, including completed, failed, and total number of items processed.

```javascript
const {
  jobIdentifier,
  accountIdentifier,
  team,
  total,
  completed,
  failed,
  finished,
  submittedByKey,
  explained,
  submittedAt,
  initialQueueTime,
  totalQueueTime,
  averageModelLatency,
  totalModelLatency,
  elapsed