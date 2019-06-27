---
id: delete-rows
title: Delete Rows
---

You can delete specified rows from your sheet. Perform a <span class="bg-accent">`DELETE` request with the row identifiers</span>.

## Structuring the JSON

Create a JSON string with the key `condition` and optionally `limit`.

```json
{
 "condition": {"column": "value", ...},
 "limit": INTEGER (optional)
}
```

The value of the `condition` property is used to search for matching rows in the sheet. It behaves similar to the [_search_ param when searching for rows](search-data.md#structuring-the-_search_-query).

These matched rows are then deleted.

The number of rows deleted is limited as per the `limit` option, if specified.

## Performing the request

Let's delete all posts by Shiven Sinha in the [_Blog Posts_ Sheet](https://docs.google.com/spreadsheets/d/13Bc-RY9pOviWvZ7V7CHvuC8QjCqW73guBPk2WxXT0DM/edit#gid=0). This request accomplishes that.

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->

```bash
$ curl "https://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1" \
    -X DELETE \
    -H "Content-Type: application/json" \
    -d '{"condition": {"author": "Shiven Sinha"}}'
```

<!--Node.js-->

```javascript
const SteinStore = require("stein-js-client");
const store = new SteinStore(
  "https://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40"
);

store
  .delete("Sheet1", {
    search: { author: "Shiven Sinha" }
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
    .delete("Sheet1", {
      search: { author: "Shiven Sinha" }
    })
    .then(res => {
      console.log(res);
    });
</script>
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Return value

The number of rows deleted is returned as JSON. For example,

```json
{ "clearedRowsCount": 1 }
```
