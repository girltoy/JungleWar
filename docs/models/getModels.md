# modezyClient.getModels

Get a list of models with very basic info such as modelId, versions, and latestVersion based on specified params. This API endpoint returns paginated results. If no params are sent, returns the first 500 models.

```javascript
const arrayOfModels = await modzyClient.getModels({
  modelId,
  author,
  createdByEmail,
  name,
  description,
  isActive,
  isExpired,
  isFeatured,
  lastActiveDateTime,
  expirationDateTime,
  page,
  perPage,
  direction?: "ASC" | "DESC";
  s