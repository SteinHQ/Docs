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
