---
id: introduction
title: Introduction & Core Concepts
---

Stein is a suite of programs to help you turn any Google Sheet to a database. The core Stein API provides RESTful access to your sheets. The rest of the suite includes helpers to make your work (even!) easier.

This allows you to create quick, no-setup databases instead of complex traditional setups. Note that Stein is not ideal as the primary database for huge, intensive applications.

This documentation first takes you through the basic concepts of Stein and the core API. The rest of the Stein suite is described in further sections.

## Core Concepts

The Stein API provides RESTful access to Google Sheets. All the data is communicated via JSON.

Stein generates separate API endpoints for each spreadsheet you decide to interact with. You can create APIs via the interface, as described in the [next section](create-api.md).

## Using Client Libraries

The Stein suite intends to simplify access to the core API by providing helpers and API clients. Check out [this section](client-libraries.md) for more details.

If you want a straightforward HTML solution to use Stein on your website, check out [Expedite](expedite-introduction.md)
