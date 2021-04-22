# modzyClient.blockUntilJobComplete

Block the script execution until the job status is "COMPLETED", "TIMEDOUT" or "CANCELED". By default it polls the job details every two seconds, but this interval can be changed using the options parameter.

```javascript
await modzyClient.blockUntilJobComplete(jobId, options);
```

## Options

- `jobId: string`
  - The job identifier, e.g. "14856eb1-0ad8-49e7-9da3-887acb80fea5"
- `options: { timeout: number }`
  - The options object currently only has one key, `timeout` that is the refresh interval in milliseconds. Defaults to `2000`.

## Returns

A promise that resolves to a GetJobResponse object

```typescript
interface GetJobResponse {
  jobIdentifier: string;
  submittedBy: string;
  accountIdentifier: string;
  model: {
    identifier: string;
    version: string;
    name: string;
  };
  status: string;
  createdAt: string;
  updatedAt: st