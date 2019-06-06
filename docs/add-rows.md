---
id: add-rows
title: Add Rows to Sheet
---

Send a <span class="bg-accent">JSON object via a `POST` request</span> to your sheet's API URL to add data to your sheet.

## Structuring the JSON

Create an array of objects representing your rows.

For example, the [_Blog Posts_ Sheet](https://docs.google.com/spreadsheets/d/13Bc-RY9pOviWvZ7V7CHvuC8QjCqW73guBPk2WxXT0DM/edit#gid=0) should be provided an array as such.

```json
[
  {
    "title": "Awesome article",
    "author": "Me!",
    "content": "A brief summary",
    "link": "blog.me.com/awesome-article"
  }, ...
]
```

## Performing the request

Here's an example request:

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->

```bash
# Adds a row to spreadsheet
$ curl "https://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1" \
    -X POST \
    -H "Content-Type: application/json" \
    -d '[{"title": "...", "author": "...", ...}, ...]'
```

<!--Node.js-->

```javascript
// Search Sheet1
const SteinStore = require("stein-js-client");
const store = new SteinStore(
  "https://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40"
);

store
  .append("Sheet2", [
    {
      title: "Awesome article",
      author: "Me!",
      content: "A brief summary",
      link: "blog.me.com/awesome-article"
    }
  ])
  .then(res => {
    console.log(res);
  });
```

<!--HTML-->

```html
<script src="https://unpkg.com/stein-js-client"></script>
<script>
  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40"
  );

  store
    .append("Sheet2", [
      {
        title: "Awesome article",
        author: "Me!",
        content: "A brief summary",
        link: "blog.me.com/awesome-article"
      }
    ])
    .then(res => {
      console.log(res);
    });
</script>
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Return Value

The updated range of your sheet is returned. For example,

```json
{ "updatedRange": "Sheet1!A6:D6" }
```
