# Welcome To JS Job Helper
This app is intended to help you create tailored resume's more quickly and accurately to make your job search more efficient and enjoyable. If you're a Javascript, React, MongoDB, or Node engineer, this codebase app should be easy for you to install and set up on your local machine. You can start building your tailored resume's for free! No need to pay anybody!

If you're enjoying using this app, please consider supporting this project so I can make this thing even better with Gemeni AI, and Google Docs API integrations.

If you're interested in contributing to this project, hmu on [linkedin](https://www.linkedin.com/in/ryan-duer/). I currently need help optimizing the app, integrating hot module reloading, and fixing the issues with the drag and drop functionality on the PositionView component. Feel free to take this project and run with it, this is licensed under MIT because I want to help you succeed.

## Product Demo:


## Environment

### Node Version
This project requires at least node 20. If you don't have nvm installed, we recommend getting it [installed and set](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) up for ease of use.

## Get started:
1. Install/Update to node version 20>=
2. Pull down this repo
3. Connect your mongodb cluster using the instructions below
4. Add the mongodb cluster connection string and database name to a file titled config.env (instructions also below)
5. Run `npm install`
6. Run `npm build`
7. Run `npm run start`
8. Visit [localhost:3000](http://localhost:3000/) in your browser
9. Start adding your information to buid out your first resume!


## CONNECT TO YOUR MONGODB CLUSTER
### First:
1. Follow the instructions here to create a free account: https://www.mongodb.com/docs/atlas/tutorial/create-atlas-account/#register-a-new-service-account
2. Follow these steps to create and deploy a free cluster https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/ (You can use the Atlas UI tab for easier to follow instructions.)
3. Create a connection string with these instructions: https://www.mongodb.com/docs/drivers/node/current/quick-start/create-a-connection-string/ (you'll need this in the next step!)
4. In your cluster data services tab -> database tab -> Collections tab -> click the create database button and give your database a name (you'll need this too!) add jobposts as the initial collection name then click create.

### Second:
Create a `config.env file` in the root of your project then add the below strings and update the null values to your connection string and database name respectively.

```
MONGODB_CONNECTION_STRING=NULL
DB_NAME=NULL
```

#### That's it you did it :tada: