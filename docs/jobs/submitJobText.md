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
  - The model identifier, e.g. "ed542963de"
- `version: string`
  - The model’s version number. It follows the semantic versioning format, e.g. "1.0.1"
- `explain?: boolean`
  - If the model supports explainability, setting this to `true` will return an explanation of the predictions along with the results.
- `sources: {[userInputKey: string]: { [modelInputName: string]: inputText: string }}`
  - `sources` is an object, and each key in that object represents a set of inputs. To know how to structure your sources object, you need to know what inputs the model requires and the name of those inputs. Some models only have have one input, while others require multip