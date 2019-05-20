---
id: client-libraries
title: Using Client Libraries
---

The Stein Suite includes client libraries to interact with the core API.

The basic steps to use a library in your project are common to all languages. (Currently, only a JavaScript client is available officially. More to come soon!)

### Official Libraries

- JavaScript (Universal): https://github.com/SteinHQ/JS-Client

## Install the library

<!--DOCUSAURUS_CODE_TABS-->
<!--HTML-->

```html
<script src="https://unpkg.com/stein-js-client"></script>
```

<!--Node.js-->

```bash
npm install stein-js-client
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Create a store

A store is a reference to a spreadsheet API.

Each store is initialised by providing the API URL. The URL should not have the name of the sheet appended.

<!--DOCUSAURUS_CODE_TABS-->
<!--HTML-->

```html
<script>
  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/5cca0542e52a3545102c1665"
  );
</script>
```

<!--Node.js-->

```javascript
const SteinStore = require("stein-js-client");
const store = new SteinStore(
  "https://api.steinhq.com/v1/storages/5cca0542e52a3545102c1665"
);
```

<!--END_DOCUSAURUS_CODE_TABS-->

---

That's it. You can now interact with the API using the methods on the store. Find the implementations in the respective API documentation sections.
