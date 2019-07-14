---
id: expedite-display-data
title: Display Data from Sheet
---

Now that you have installed Expedite on your website, you can display data from a spreadsheet in 3 quick steps:

1. Create a containing `<div>` element
2. Set your API URL as its `data-stein-url` attribute. You can access your API URL from the Stein Dashboard.
3. Add handlebars `{{ }}` with the column name in any of the child elements.

## Optional parameters

You can optionally limit and offset your response by setting the `data-stein-limit` and `data-stein-offset` attributes.

## Example

Let's display the first two blog post summaries from [this Google Sheet](https://docs.google.com/spreadsheets/d/13Bc-RY9pOviWvZ7V7CHvuC8QjCqW73guBPk2WxXT0DM/edit#gid=0).

**The following HTML structure helps us with this.**

```handlebars
<!--- Replace the data-stein-url value with your API URL --->
<div
  data-stein-url="https://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1"
  data-stein-limit="2"
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

:::note Take special care if you are using Vue!
Vue.js also uses `{{ }}` (handlebars syntax) to play with data. To avoid conflict, use the `v-pre` attribute on elements that contain Stein related data!
:::

**The following Vue Example should help.**
```handlebars
<!--- Replace the data-stein-url value with your API URL --->
<div
  id="vueapp"
  data-stein-url="https://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1"
  data-stein-limit="2"
>
  <div>
    <h1 v-pre>{{title}}</h1>
    <h6 v-pre>By {{author}}</h6>
    <p v-pre>
      {{content}}
    </p>
    <p>Read on <a href="{{link}}" v-pre>Medium</a></p>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://unpkg.com/stein-expedite@0.0.1/dist/index.js"></script>  
<script>
  new Vue({
    el: '#vueapp',
    data: {
      name: 'Conflicted name',
      email: 'Conflicted email'
    }
  })
</script>
```
The `v-pre` attribute helps Vue ignore the corresponding element, allowing Stein Expedite to render properly.

:::note Remember to append your sheet's name to access your API
You need to append the name of the specific sheet you want to access through the Stein API. If you want to access _Sheet1_ from your spreadsheet, your API URL will now be `https://api.steinhq.com/v1/storages/[your-api-id]/Sheet1`
:::

Plug in some quick styling, and here's what you can easily end up with.

![Blog Posts Screenshot](assets/expedite-blog-posts-read.png)

Pretty neat, eh? Here's the [complete example](https://github.com/SteinHQ/Expedite/blob/master/example/blog.html). But that's just half the magic! Read on to learn to search your sheet data, and to connect your forms to sheets.
