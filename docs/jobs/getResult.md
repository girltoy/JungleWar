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
  elapsedTime,
  startingResultSummarizing,
  resultSummarizing,
  inputSize,
  results,
} = await modzyClient.getResult(jobId);
```

## Options

- `jobId: string`
  - The job identifier, e.g. "14856eb1-0ad8-49e7-9da3-887acb80fea5"

## Returns

A promise that resolves to a GetResultResponse objec