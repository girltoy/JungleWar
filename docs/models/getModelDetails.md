
# modezyClient.getModelDetails

Returns version details. It includes timeout, requirement, containerImage, loadStatus, runStatus, inputs, outputs, statistics, technicalDetails, sampleInput, sampleOutput, performanceSummary, processing, and others.

```javascript
const {
  version,
  createdAt,
  updatedAt,
  inputValidationSchema,
  createdBy,
  timeout,
  requirement,
  containerImage,
  inputs,
  outputs,
  statistics,
  isActive,
  longDescription,
  technicalDetails,
  isAvailable,
  sourceType,
  versionHistory,
  status,
  performanceSummary,
  model,
  processing,
} = await modzyClient.getModelDetails({ modelId, version });
```

## Options

- `modelId: string`
  - The model identifier assigned by Modzy, i.e. "ed542963de"
- `version: string`
  - The specific version of the model, in sematic versioning format, i.e. "1.0.1"

## Return

Returns a promise that resolves to an object with model details