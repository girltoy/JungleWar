# modzyClient.pathToDataUrl

Convert a file path (string) to a data url for embedded job types (Node.js only)

```javascript
const encodedFile = await modzyClient.pathToDataUrl(path, mimeType);
```

## Options

- `path: string`
  - The path to the file, e.g. "./images/tree.jpg"
- `mimeType: string`
  - The fi