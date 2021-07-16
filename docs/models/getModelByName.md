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
} = 