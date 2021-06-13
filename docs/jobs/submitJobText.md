# modzyClient.submitJobText

Submit a job with plain text input(s).

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
} = await modzyClient.submitJobText({
    modelId,
    version,
    explain = false,
    sources,
  });
```

## Options

- `modelId: string`
  - The