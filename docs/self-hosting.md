---
id: self-hosting
title: Manual Installation & Setup
---

Stein is fully open source. You may customise it to your needs, determine your functionality, and host it yourself.

If you're comfortable installing, maintaining and updating your own software, this is the place for you.

## Setup

Here are the steps to run Stein on your server.

### Recommended Stack

- Ubuntu 18.04 or 16.04
- Node.js 10.x (Node v10 Dubnium LsTS)
- MongoDB 4.0
- A server with at least 1GB memory
- Nginx (minimum 1.14.0)

### 1. Install Node.js

You will need to have a supported version of Node installed on your server.

```bash
$ cd ~
$ curl -sL https://deb.nodesource.com/setup_10.x -o nodesource_setup.sh
$ sudo bash nodesource_setup.sh
$ sudo apt install nodejs
```

To verify your installation and version, run

```bash
$ nodejs -v

# Output Example
# v10.14.0
```

Here's a [complete guide](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04) on installing Node.js. Ensure you install a supported version.

### 2. Install MongoDB

Stein uses MongoDB as the production database. DigitalOcean provides a great guide walking you through [setting up MongoDB on your Ubuntu server](https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-18-04).

Alternatively, you can also use an external MongoDB URL. Specify that URL in the environment variable as detailed further.

### 3. Install Stein (Core)

You're now all set to install Stein on your server. In your preferred directory, initialise an NPM project.

```bash
$ mkdir stein-server
$ cd stein-server
$ npm init
```

Install the stein-core package in your project.

```bash
$ npm i stein-core
```

Then edit the package.json file to add scripts for controlling the Stein server.

```json
{
  "scripts": {
    "stein:start": "stein start",
    "stein:stop": "stein stop"
  }
}
```

### 4. Obtain OAuth2 credentials

Visit the [Google API Console](https://console.developers.google.com/) to obtain OAuth 2.0 credentials such as a client ID and client secret that are known to both Google and your application.

It is recommended to create a new project. From the interface, choose to generate credentials for a web application.

The Redirect URI depends on the domain name you plan to host Stein on. If you plan to use `example.com`, set your redirect URI to `https://example.com/auth/google/callback`. Similarly, if you plan to place the Stein API on `example.com/stein`, your redirect URI will be `https://example.com/stein/auth/google/callback`.

### 5. Set environment variables

Stein requires these environment variables (case-sensitive) to be specified on your system.

- **STEIN_PORT** (Optional): Port you wish to run Stein on. Defaults to `3000.
- **STEIN_MONGO_URL**: URL where your MongoDB is hosted. When running Mongo locally, the default URL is `mongodb://localhost:27017/stein`
- **STEIN_CLIENT_SECRET**: Client Secret obtained from generating OAuth credentials from the Google Developer Console
- **STEIN_CLIENT_ID**: Client ID obtained from generating OAuth credentials from the Google Developer Console
- **STEIN_CALLBACK_URL**: Redirect URI set for the appropriate OAuth credentials in the Google Developer Console
- **STEIN_SESSION_SECRET** (Optional): The secret to be used for signing sessions. Although optional, it is recommended to set this value to a random, obfuscated, unguessable value.

:::warning
Think of the session secret as a password: you do not want anyone to guess this.
:::

You can also use [cross-env](https://www.npmjs.com/package/cross-env) to specify environment variables. First, install the package from NPM.

```bash
$ npm install cross-env
```

Then, use `cross-env` to specify environment variables from your package.json's `stein:start` script.

```json
{
  "scripts": {
    "stein:start": "cross-env STEIN_PORT=3000 STEIN_MONGO_URL=mongodb://abc STEIN_CLIENT_SECRET=abc STEIN_CLIENT_ID=ab.cd STEIN_CALLBACK_URL=http://abc STEIN_SESSION_SECRET=s3cr3t stein start"
  }
}
```

### 6. Run Stein

First, make sure that MongoDB is running on the URL specified in the environment. Then, from your project's root, run the following command to boot up Stein.

```bash
$ npm run stein:start
```

To stop the server, use the script defined earlier.

```bash
$ npm run stein:stop
```

On start, an instance of Stein should boot up on the port specified in the environment variable (`3000` by default). We're almost done!

:::note
The logs can be found in .log files in the `stein-core` folder in `node_modules`
:::

### 7. Set up Nginx as reverse proxy

Check out these guides to have a basic setup of Nginx in place:

- **Install Nginx**: [How To Install Nginx on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04)
- **Configure Nginx with SSL**: [How To Secure Nginx with Let's Encrypt on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04)

In these tutorials, you set up your Nginx configuration in the `/etc/nginx/sites-available/example.com` file. Open this file for editing:

```bash
$ sudo nano /etc/nginx/sites-available/example.com
```

Within the server block, you should have an existing `location /` block. If you wish to host Stein in the root of that domain, replace the contents of the block with the following configuration.

```
server {
...
    location / {
        proxy_pass http://localhost:[PORT_ON_WHICH_STEIN_IS_RUNNING];
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
...
}
```

If you wish to host Stein on a different path, say `/stein`, add the `location /stein` block with the given configuration **above** the `location /` block.

```
server {
...
    location /stein {
        proxy_pass http://localhost:[PORT_ON_WHICH_STEIN_IS_RUNNING];
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
...
}
```

### 8. Set up admin user

As soon as you run Stein for the first time, visit the URL you set it up on. You'll be prompted for a new username and a password. From then on, you'll need these credentials to access the admin area.

Then, log in with Google to access the dashboard and add or modify your APIs.

:::tip
Once you enter your admin credentials, you can log in with any Google account and add sheets associated with it.
:::

If everything works, remember to give yourself a pat on the back. Great work!
