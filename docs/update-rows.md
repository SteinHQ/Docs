---
id: update-rows
title: Update Rows
---

You can update the values of specified rows in your sheet. Send a <span class="bg-accent">`PUT` request with the row identifiers and the updated fields</span>.

## Structuring the JSON

Create a JSON string with the following keys: `condition`, `set`, and optionally `limit`.

```json
{
  "condition": {"column": "value", ...},
  "set": {"column": "updated value", ...},
  "limit": INTEGER (optional)
}
```

The value of the `condition` property is used to search for matching rows in the sheet. It behaves similar to the [_search_ param when searching for rows](search-data.md#structuring-the-_search_-query).

These matched rows are then updated according to the `set` property. You do not need to specify values for all fields. Omitted fields will be left untouched.

The number of rows updates is limited as per the `limit` option, if specified.

## Performing the request

Let's update the _title_ field of all posts by Shiven Sinha in the [_Blog Posts_ Sheet](https://docs.google.com/spreadsheets/d/13Bc-RY9pOviWvZ7V7CHvuC8QjCqW73guBPk2WxXT0DM/edit#gid=0).

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->

```bash
$ curl "http://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1" \
    -X PUT \
    -H "Content-Type: application/json" \
    -d '{"condition": {"author": "Shiven Sinha"}, "set": {"title": "Currently Unavailable"}}'
```

<!--Node.js-->

```javascript
// Search Sheet1
const SteinStore = require("stein-js-client");
const store = new SteinStore(
  "https://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40"
);

store
  .edit("Sheet1", {
    search: { author: "Shiven Sinha" },
    set: { title: "Currently Unavailable" }
  })
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
    .edit("Sheet1", {
      search: { author: "Shiven Sinha" },
      set: { title: "Currently Unavailable" }
    })
    .then(res => {
      console.log(res);
    });
</script>
```

<!--END_DOCUSAURUS_CODE_TABS-->

This updates the title of all posts by Shiven Sinha to _Currently Unavailable_.

## Return value

The updated range of your sheet is returned. For example,

```json
{ "updatedRange": "Sheet1!A6:D6" }
```
