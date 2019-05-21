---
id: search-data
title: Search for Data
---

You can also search for specific records in your sheets.

## Structuring the _search_ query

Form a JSON string with your <span class="bg-accent">search options mapped as `{column: value, ...}`. Pass it as the _search_ param to a `GET` request to your sheet's API URL.</span>

## Performing the request

Let's search for posts by _Shiven Sinha_ in our [_Blog Posts_ Sheet](https://docs.google.com/spreadsheets/d/13Bc-RY9pOviWvZ7V7CHvuC8QjCqW73guBPk2WxXT0DM/edit#gid=0).

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->

```bash
# Search Sheet1
curl 'https://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1?search={"author":"Shiven Sinha"}'

# Response ↓ (trimmed for brevity)
# [{"title":"How to create a successful...","content":"Building a good landing page...","link":"https://uxdesign.cc/how-to...","author":"Shiven Sinha"}]
```

<!--Node.js-->

```javascript
// Search Sheet1
const SteinStore = require("stein-js-client");
const store = new SteinStore(
  "https://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40"
);

store.read("Sheet1", { search: { author: "Shiven Sinha" } }).then(data => {
  console.log(data);
});

// Logs ↓ (trimmed for brevity)
// [{"title":"How to create a successful...","content":"Building a good landing page...","link":"https://uxdesign.cc/how-to...","author":"Shiven Sinha"}]
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Optional request parameters

You can optionally limit and offset your response, as further exemplified in [this section](read-data.md#optional-request-parameters).

| Parameter | Description                                                  | Type             |
| --------- | ------------------------------------------------------------ | ---------------- |
| limit     | Maximum number of rows to be returned                        | Number (Integer) |
| offset    | Index of row from which response should start (default is 0) | Number (Integer) |

## Return value

An array of objects, with each object representing the matching sheet rows.
