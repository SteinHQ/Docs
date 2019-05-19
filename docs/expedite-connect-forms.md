---
id: expedite-connect-forms
title: Connect HTML Forms to Sheet
---

Using Expedite, you can directly link a form to a Google Sheet.

Just 3 quick steps:

1. Create an HTML `<form>`
2. Set your API URL as its `data-stein-url` attribute. You can access your API URL from the Stein Dashboard.
3. Set the `name` attributes of the input fields to their respective column names.

## Example

Here, we create a form to add blog posts to [our Google Sheet](https://docs.google.com/spreadsheets/d/13Bc-RY9pOviWvZ7V7CHvuC8QjCqW73guBPk2WxXT0DM/edit#gid=0).

```html
<!--- Add post to Google Sheet --->
<form
  data-stein-url="http://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1"
>
  <!--- Notice that the name attribute is set to the column name -->
  <input placeholder="Title" name="title" />
  <input placeholder="Author Name" name="author" />
  <input type="url" placeholder="Link to Post" name="link" />
  <textarea placeholder="Summary" name="content" rows="5"></textarea>
  <button type="submit">Submit</button>
</form>
```

## Optional: Handle event on receiving the response

When the form is submitted and the API response is received, the event `ResponseReceived` is dispatched on the form. The event object has the `detail` property set to the response.

```javascript
form.addEventListener("ResponseReceived", event => {
  console.log(event.detail.status); // { status: <HTTP Status Code>,  body: ... }
});
```

Additionally, here's a [complete example](https://github.com/SteinHQ/Expedite/blob/master/example/form.html) that handles the response event.
