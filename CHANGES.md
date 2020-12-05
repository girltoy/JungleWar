# Changes from v1

Version 1 of the SDK client only supported Node application because the final bundle included references to the `fs` module. Version 2 uses a hybrid approach that includes code for both Node and the browser. It does this using the package.json file’s `browser` field that specifies browser-specific overrides. As such, any use of this SDK for the browser requires the use of a bundler or build tool. Note that the split only applies to the part of the sdk for submitting job files - most of the SDK code is pure JavaScript.

The previous documentation often incorrectly showed the results of the methods having direct returns. In reality, all methods return a promise that resolves to the data shown.

### Client initialization

- `ModzyClient` constructor parameter changed to single object. The `url` 