# modzyClient.getModelByName

Search for a model that matches a provided name. If the search finds multiple models, it will return the closest match. The output includes all model details (modelId, latestVersion, author, name, versions, and tags).

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
} = await modzyClient.getModelByName(name);
```

## Options

- `name: string`
  - A model name or a part of it, i.e. "Sentiment Analysis"

## Return

A promise that resolves to an object describing the model instance

```typescript
interface GetModelByIdResponse {
 