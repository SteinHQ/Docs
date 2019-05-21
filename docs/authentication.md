---
id: authentication
title: Authentication
---

You can secure your API with HTTP Basic authentication. Basic authentication is a simple authentication scheme built into the HTTP protocol.

## Setting credentials

You can turn on authentication for your API by navigating to your API's details in your dashboard. Toggle the option to get started.

Then, set the `username` and `password` to be used for authenticating your API requests and save your settings. Congrats! You now have authentication set up for your API.

Once you have switched on authentication, requests to the API with missing or incorrect credentials will be denied with a `401 Unauthorized` HTTP code.

## Sending credentials with your requests

Credentials are passed as a base64-encoded string `username:password`. For example, to authenticate as _john-doe_ as the `username` and _an-unguessable-term_ as the password, we encode `john-doe:an-unguessable-term` as base64 to obtain the following string.

`am9obi1kb2U6YW4tdW5ndWVzc2FibGUtdGVybQ==`

We then pass this as the authorization header with our request.

`Authorization: Basic am9obi1kb2U6YW4tdW5ndWVzc2FibGUtdGVybQ==`

However, this manual encoding is needed when you are explicitly setting the request headers. In most cases, your request client wil handle this for you. All Stein API clients and cURL allow straightforward configuration.

## Example

<!--DOCUSAURUS_CODE_TABS-->
<!--cURL-->

```bash
# Read Sheet1
curl "https://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40/Sheet1" \
    -u "username:password"
```

<!--Node.js-->

```javascript
const SteinStore = require("stein-js-client");
const store = new SteinStore(
  "https://api.steinhq.com/v1/storages/5cc158079ec99a2f484dcb40"
);

store
  .read("Sheet1", {
    authentication: { username: "username", password: "password" }
  })
  .then(data => {
    console.log(data);
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
    .read("Sheet1", {
      authentication: { username: "username", password: "password" }
    })
    .then(data => {
      console.log(data);
    });
</script>
```

<!--END_DOCUSAURUS_CODE_TABS-->
