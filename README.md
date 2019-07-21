# Kubernetess 

# Docker - CI & localhost deployment

## How to start:

1. Setup env variables
```
cp .env.dist .env
```
Edit all values as you wish

## Docker-Compose

### Build

```docker-compose up --build```

### Run

```docker-compose up```

## Nginx

### SSL Configuration
Creating a self signed SSL certificate
To do this we will use the openssl program to generate a key/cert pair

```
bash -ac 'source .env && openssl req -newkey rsa:2048 -nodes -keyout docker/nginx/${DOMAIN}.key -x509 -days 365 -out docker/nginx/${DOMAIN}.crt' 
```

# nestJS

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
