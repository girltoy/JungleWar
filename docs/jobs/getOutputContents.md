# modzyClient.getOutputContents

Get the contents of a specific job output. The format can be changed for text or binary file output types.

```javascript
const outputContents = await modzyClient.getOutputContents({
  jobId,
  inputKey,
  outputName,
  responseType,
});
```

## Options

- `jobId: string`
  - The job identifi