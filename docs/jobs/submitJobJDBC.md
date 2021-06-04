# modzyClient.submitJobJDBC

Submit a job using JDCB parameters as inputs

```javascript
const {
  model,
  status,
  totalInputs,
  jobIdentifier,
  accessKey,
  explain,
  jobType,
  accountIdentifier,
  team,
  user,
  jobInputs,
  submittedAt,
  hoursDeleteInput,
  imageClassificationModel,
} = await modzyClient.submitJobJDBC({
  modelId,
  version,
  url,
  username,
  password,
  driver,
  query,
  explain,
});
```

## Options

- `modelId: string`
  - The model identifier, e.g. "ed542963de