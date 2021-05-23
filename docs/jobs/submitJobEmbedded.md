# modzyClient.submitJobEmbedded

Submit a job using base64 data URLs as input(s). Note that due to memory constraints, only small files should be used with this method. Larger files will cause the job to get stuck or fail. For larger files, use modzyClient.submitJobFile, which uploads files in chunks.

To simplify the creation of base64 data URLs, the modzyClient includes two utility methods, modzyClient.fileToDataUrl for browser environments, modzyClient.pathToDataUrl for Node.js environments.

```javascript
const embeddedImage = await modzyClient.pathToDataUrl(
  "./image.png",
  "image/png"
);
const embeddedConfig = await modzyClient.pathToDataUrl(
  "./config.json",
  "application/json"
);
const sources = {
  "my-input": { input: embeddedImage, "config.json": embeddedConfig },
};

const {
  model,
  status,
  totalInputs,
  jobIdentifier,
  accessKey,
  explain,
  jobType,
  accountIden