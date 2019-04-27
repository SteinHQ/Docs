---
id: expedite-search-data
title: Search for Data
---

You can also search for specific data in your sheet.

First, structure your HTML the same way you would for [displaying data](expedite-display-data.md).

Next, <span class="bg-accent">set the `data-stein-search` attribute of the container to fetch and show only the matching results.</span> Use a JSON string representing the search conditions as its value.

## Example

Let's display all posts by Shiven Sinha from our [_Blog Posts_ Sheet](https://docs.google.com/spreadsheets/d/13Bc-RY9pOviWvZ7V7CHvuC8QjCqW73guBPk2WxXT0DM/edit#gid=0).

We'd structure the HTML the same way we did for [displaying the entire sheet](expedite-display-data.md#example). The only difference is that we add the `data-stein-search` attribute to the container.

Here's the updated HTML.

```handlebars
<!-- Filter blog posts by author name -->
<!-- Make sure to use double quotes in JSON strings -->
<div
  data-stein-url="http://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1"
  data-stein-search='{"author": "Shiven Sinha"}'
>
  <div>
    <h1>{{title}}</h1>
    <h6>By {{author}}</h6>
    <p>
      {{content}}
    </p>
    <p>Read on <a href="{{link}}">Medium</a></p>
  </div>
</div>
```
