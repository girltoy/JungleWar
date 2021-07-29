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
  sortBy,
});
```

## Options

- `modelId?: string;`
  - Filters models by identifier. Separate multiple values with `;`.
- `author?: string;`
  - Filters models by the organization that created them. Separate multiple values with `;`.
- `createdByEmail?: string;`
  - Filters models by creator’s email. Separate multiple 