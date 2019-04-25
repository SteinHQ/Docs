---
id: read-data
title: Read Data from Sheet
---

You can access your sheet's complete data in JSON.

Find your API's URL in your dashboard. Perform a <span class="bg-accent">**`GET` request to your `[API URL]/[Sheet Name]`**</span> to retrieve your complete data.

Let's read the contents of _[Sheet1](https://docs.google.com/spreadsheets/d/13Bc-RY9pOviWvZ7V7CHvuC8QjCqW73guBPk2WxXT0DM/edit#gid=0)_ of the _Blog Posts_ API we created earlier.

```bash
# Read Sheet1
curl "http://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1"

# Response ↓ (trimmed for brevity)
# [{"title":"Why the Best Things in Life Can’t Be Planned","content":"Thales of Miletus, considered ...","link":"https://medium.com/...","author":"Zat Rana"}, {...}, ...]
```

## Optional request parameters

You can optionally limit and offset your response.
| Parameter | Description | Type |
| ------------- | ------------- | ------------- |
| limit | Maximum number of rows to be returned | Number (Integer) |
| offset | Index of row from which response should start (default is 0) | Number (Integer) |

```bash
# Read Sheet1, offset response rows by 2, and limit number of rows to 1
curl "http://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1?limit=1&offset=2"

# Response ↓ (trimmed for brevity)
# [{"title":"The Awkward Power Dynamics...","content":"The other night, I was...","link":"https://medium.com/...","author":"Deanna Pai"}]
```

## Return value

An array of objects, with each object representing the sheet rows.
