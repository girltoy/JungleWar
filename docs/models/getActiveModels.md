# modzyClient.getActiveModels

Get a list of all active models with information such as names, ids, descriptions, active versions, and image URLs

```javascript
const {
  activeVersions,
  author,
  creationDateTime,
  description,
  features,
  identifier,
  images,
  isActive,
  isAvailable,
  isCommercial,
  isExperimental,
  isRecommended,
  latestVersion,
  longDescription,
  name,
  permalink,
  sourceType,
  tags,
  updateDateTime,
} = await modzyClient.getActiveModels