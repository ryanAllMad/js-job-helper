# Welcome To JS Job Helper
This app is intended to help you create tailored resume's more quickly and accurately to make your job search more efficient and enjoyable.

## Environment

### Node Version
This project requires at least node 20. If you don't have nvm installed, we recommend getting it [installed and set](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) up for ease of use.

## Get started:
1. Install/Update to node version 20>=
2. Pull down this repo
3. Connect your mongodb cluster using the instructions below
4. Run `npm install`
5. Run `npm run start`
6. Visit [localhost:3000](http://localhost:3000/) in your browser
7. Enjoy :tada:


## CONNECT TO YOUR MONGODB CLUSTER
### First:
Create a free mongodb atlas server here: https://www.mongodb.com/cloud/atlas/register
### Second:
Create a connection string for a node.js app: https://www.mongodb.com/docs/drivers/node/current/quick-start/create-a-connection-string/
### Third:
Create a database name in your MongoDB Cluster
### Fourth:
Createa `config.env file` in the root of your project then update the null values to your connection string and database name respectively.

```
MONGODB_CONNECTION_STRING=NULL
DB_NAME=NULL
```
