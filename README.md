# Kubernetess 

# **Run on localhost**:

1. Setup env variables
  
    1.1 Copy example env `cp .env.dist .env`
    
    1.2 Populate with your own values

2. Creating a self signed SSL certificate. To do this we will use the openssl program to generate a key/cert pair:
    ```
    bash -ac 'source .env && openssl req -newkey rsa:2048 -nodes -keyout docker/nginx/${DOMAIN}.key -x509 -days 365 -out docker/nginx/${DOMAIN}.crt' 
    ```
3. Edit your local hosts file
    
    3.1 Open hosts file in your editor. (eg. `sudo vim /etc/hosts`)
    
    3.2 add your DOMAIN variable eg.
    ```
    127.0.0.1     app.local
    127.0.0.1     www.app.local
    ```

    3.3 Save changes

4. Run containers
    ```
    docker-compose up --build
    ```
5. Visit your application in browser [https://app.local](https://app.local) or [http://app.local](http://app.local)


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