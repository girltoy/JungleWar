# modzyClient.getModelById

Get model instance by it's identifier

```javascript
const {
  modelId,
  latestVersion,
  latestActiveVersion,
  versions,
  author,
  name,
  description,
  permalink,
  features,
  isActive,
  isRecommended,
  isCommercial,
  tags,
  images,
  snapshotImages,
  lastActiveDateTime,
  visibility,
} = await modzyClient.getModelById(modelId);
```

## Options

- `modelId: string`
  - A model identifier assigned by Modzy, i.e. "ed542963de"

## Return

A promise that resolve to an object describing the model instance

```typescript
interface GetModelByIdResponse {
  modelId: string;
  latestVersion: string;
  latestActiveVersion: string;
  versions: string