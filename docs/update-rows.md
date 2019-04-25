---
id: update-rows
title: Update Rows
---

You can update the values of specific rows in your sheet. Simply send a <span class="bg-accent">`PUT` request with row identifiers and the updated fields</span>.

## Structuring the JSON

Create a JSON string with the following keys: `condition`, `set`, and optionally `limit`.

```json
{
  "condition": {"column": "value", ...},
  "set": {"column": "updated value", ...},
  "limit": INTEGER (optional)
}
```

The value of the `condition` property is used to search for matching rows in the sheet. It behaves similar to the [_search_ param when searching for rows](search-data.md#creating-the-_search_-object).

These matched rows are then updated according to the `set` property. You do not need to specify values for all fields. Omitted fields will be left untouched.

The number of rows updates are limited as per the `limit` option, if specified.

## Return value

The updated range of your sheet is returned. For example,

```json
{ "updatedRange": "Sheet1!A6:D6" }
```

## Example

Let's update the _title_ field of all posts by Shiven Sinha in the [_Blog Posts_ Sheet](https://docs.google.com/spreadsheets/d/13Bc-RY9pOviWvZ7V7CHvuC8QjCqW73guBPk2WxXT0DM/edit#gid=0).

```bash
curl "http://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1" \
-X PUT \
-H "Content-Type: application/json" \
-d '{"condition": {"author": "Shiven Sinha"}, "set": {"title": "Currently Unavailable"}}'
```

This updates the title of all posts by Shiven Sinha to _Currently Unavailable_.
