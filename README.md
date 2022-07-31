# Alkemy Challenge FullStack JS

App that allows you to have a balance of income and expenses. 
Build with React, Express and MySQL.

## Run locally

### 1. Clone the repo 

```sh
git clone https://github.com/ebereber/alkemy.git
```

### 2. Create .env file and set the following environment variables:

```sh
HOST="localhost"
USER_DB=" " add your database user
PASSWORD=" " add your database password
DATABASE="alkemy"
JWT_SECRET="243623"
```

### 3. Run sql script `/server/alkemy.sql` to create the database schema.

### 4. Run server

`alkemy/server`

```sh
npm install
npm run dev
```

### 5. Run  client

`alkemy/client`

```sh
npm install
npm run dev
```
