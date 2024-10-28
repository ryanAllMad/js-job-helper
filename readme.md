# Welcome To JS Job Helper The Javascript Resume Builder App.
This app is intended to help you create tailored resume's more quickly and accurately to make your job search more efficient and enjoyable. I've just added the ability to link up your own Google Docs API to this project to create your resume's more quickly. If you're a Javascript, React, MongoDB, or Node engineer, this codebase app should be easy for you to install and set up on your local machine. You can start building your tailored resume's for free! No need to pay anybody!

If you're enjoying using this app, please consider supporting this project so I can make this thing even better with Gemeni AI.

If you're interested in contributing to this project, hmu on [linkedin](https://www.linkedin.com/in/ryan-duer/). I currently need help optimizing the app. Feel free to take this project and run with it, this is licensed under MIT because I want to help you succeed.

## Product Demo:
Check out the [1 minute product demo here.](https://www.canva.com/design/DAGK1wvwwQI/9_J_b3jBfu8PgU9jNXiVjQ/watch?utm_content=DAGK1wvwwQI&utm_campaign=designshare&utm_medium=link&utm_source=editor)

## Environment

### Node Version
This project requires at least node 18.2. If you don't have nvm installed, we recommend getting it [installed and set](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) up for ease of use.

## Get started:
1. Install/Update to node version 18.2>=
2. Pull down this repo
3. Connect your mongodb cluster using the [instructions below](https://github.com/ryanAllMad/js-job-helper?tab=readme-ov-file#connect-to-your-mongodb-cluster)
4. Add the mongodb cluster connection string and database name to a file titled config.env (instructions also below)
6. Run `npm install`
7. Run `npm run build`
8. Run `npm run dev` or `npm run start`
9. Visit [http://localhost:5173/](http://localhost:5173/) in your browser
10. Start adding your information to buid out your first resume!
11. If you want to set up your own Google API to utilize the Google API Doc's [Check out how to below.](https://github.com/ryanAllMad/js-job-helper/edit/main/readme.md#set-up-a-google-docs-api)


## CONNECT TO YOUR MONGODB CLUSTER
### First:
1. Follow the instructions here to create a free account: https://www.mongodb.com/docs/atlas/tutorial/create-atlas-account/#register-a-new-service-account
2. Follow these steps to create and deploy a free cluster https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/ (You can use the Atlas UI tab for easier to follow instructions.)
3. Create a connection string with these instructions: https://www.mongodb.com/docs/drivers/node/current/quick-start/create-a-connection-string/ (you'll need this in the [next step!](https://github.com/ryanAllMad/js-job-helper?tab=readme-ov-file#connect-to-your-mongodb-cluster))
4. In your cluster data services tab -> database tab -> Collections tab -> click the create database button and give your database a name (you'll need this too!) add jobposts as the initial collection name then click create.

### Second:
Create a `config.env file` in the root of your project then add the below strings and update the null values to your connection string and database name respectively.

```
MONGODB_CONNECTION_STRING=NULL
DB_NAME=NULL
```
## SET UP A GOOGLE DOC'S API
1. Start by [setting up an API in Google Cloud.](https://developers.google.com/workspace/guides/create-project)
2. Next [set up OAuth consent for this API.](https://developers.google.com/workspace/guides/create-credentials#oauth-client-id)
3. Create a javascript file in the apis/google folder titled 'hiddenConsts.js' and add your OAuth Web Application CLIENT_ID as a const, be sure to export it
You can also add this Discovery Doc const to this doc as shown below:
```
export const CLIENT_ID = 'YOUR_CLIENT_ID_HERE'
export const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/documents/v1/rest'
```
4. Be sure to check that you've allowed the correct google doc's scopes to your project in the OAuth Consent Screen tab > Edit app > OAuth Consent screen > Scopes.


#### That's it you did it :tada:
