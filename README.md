# Installation

### Setup env variables

1. Copy example env `cp .env.dist .env`
2. Populate with your own values

### Use the makefile to run the application locally

When you run it for the first time, it will download and build all needed images

```bash
make
```

### Creating a self signed SSL certificate. Use following command and follow the instruction:

Boilerplate ships with built-in certificate, however you can create your own!

```bash
make cert
```

### Edit your local hosts file

1. Open hosts file in your editor. (eg. `sudo vim /etc/hosts`)
2. add your DOMAIN variable eg.
   ```
   127.0.0.1     app.local www.app.local
   ```
3. Save changes

### Visit your application in browser [https://app.local](https://app.local) or [http://app.local](http://app.local)

# Debugging

Run the app in debug mode:

#### Using docker-compose

```
docker-compose -f ./docker-compose.yaml -f ./with-debug.yaml up --build -d
```

#### Using makefile

```
make debug
```

### IDE configuration

#### JetBrains IDE (IntelliJ IDEA, WebStorm, PHPStorm, ...)

1. In your IDE go to `Run` -> `Edit Configurations...`
2. `+` (Add New Configuration) -> `Attach to Node.js/Chrome`
    * Name: name it as you want, like `debug`
    * Host: localhost
    * Port: 9229
    * Attach to: Chrome or Node.js > 6.3
    * Reconnect automatically
    * `OK`

3. Start debugging!

#### vscode

0. Install Docker Extension for vscode: https://code.visualstudio.com/docs/azure/docker
1. Press CMD(Ctrl)+Shift+P(Command Palette) and find “Debug: Open launch.json”:
1. Then choose Docker: Node.js
1. Paste this configuration:

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "App: Attach Docker to Node",
            "type": "node",
            "request": "attach",
            "remoteRoot": "/home/node/app",
            "port": 9229,
            "address": "localhost",
            "localRoot": "${workspaceFolder}",
            "protocol": "inspector",
            "restart": true
        }
    ]
}
```

# nestJS

## Running the app

```bash
# development
yarn start

# watch mode
yarn start:dev

# production mode
yarn start:prod
```

## Test

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e

# test coverage
yarn test:cov
```
