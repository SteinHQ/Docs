---
id: expedite-display-data
title: Display Data from Sheet
---

Now that you have installed Expedite on your website, you can display data from a spreadsheet in <span class="bg-accent">3 quick steps</span>:

1. Create a containing `<div>` element
2. Set your API URL as its `data-stein-url` attribute. You can access your API URL from the Stein Dashboard.
3. Add handlebars `{{ }}` with the column name in any of the child elements.

## Example

We want to display the list of blog post summaries from [this Google Sheet](https://docs.google.com/spreadsheets/d/13Bc-RY9pOviWvZ7V7CHvuC8QjCqW73guBPk2WxXT0DM/edit#gid=0).

So we create an HTML structure as such:

```html
<!--- Replace the data-stein-url value with your API URL --->
<div
  data-stein-url="http://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1"
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

:::note Remember to append your sheet's name to access your API
You need to append the name of the specific sheet you want to access through the Stein API. If you want to access _Sheet1_ from your spreadsheet, your API URL will now be `http://api.steinhq.com/v1/storages/[your-api-id]/Sheet1`
:::

Plug in some quick styling, and here's what you can easily end up with.

![Blog Posts Screenshot](assets/expedite-blog-posts-read.png)

Pretty neat, eh? That's half the magic! Read on to learn to search your sheet data, and to connect your forms to sheets.
