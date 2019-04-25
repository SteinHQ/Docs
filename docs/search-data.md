---
id: search-data
title: Search for Data
---

You can also search for specific records in your sheets.

## Search Object

Form a JSON string with your <span class="bg-accent">search options mapped as `{column: value, ...}`. Pass it as the _search_ param to a `GET` request to your sheet's API URL.</span>

Let's search for posts by *Shiven Sinha* in our [_Blog Posts_ Sheet](https://docs.google.com/spreadsheets/d/13Bc-RY9pOviWvZ7V7CHvuC8QjCqW73guBPk2WxXT0DM/edit#gid=0).

```bash
# Search Sheet1
curl 'http://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1?search={"author":"Shiven Sinha"}'

# Response ↓ (trimmed for brevity)
# [{"title":"How to create a successful...","content":"Building a good landing page...","link":"https://uxdesign.cc/how-to...","author":"Shiven Sinha"}]
```

## Optional request parameters
You can optionally limit and offset your response, as further exemplified in [this section](read-data.md#optional-request-parameters).

| Parameter | Description | Type |
| ------------- | ------------- | ------------- |
| limit | Maximum number of rows to be returned | Number (Integer) |
| offset | Index of row from which response should start (default is 0) | Number (Integer) |

## Return value
An array of objects, with each object representing the matching sheet rows.
