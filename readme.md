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
5. Run `npm build`
6. Run `npm run start`
7. Visit [localhost:3000](http://localhost:3000/) in your browser
8. Enjoy :tada:


## CONNECT TO YOUR MONGODB CLUSTER
### First:
Create a free mongodb atlas server here: https://www.mongodb.com/cloud/atlas/register
### Second:
Create a connection string for a node.js app: https://www.mongodb.com/docs/drivers/node/current/quick-start/create-a-connection-string/
### Third:
Create a database name in your MongoDB Cluster
### Fourth:
Create a `config.env file` in the root of your project then add the below strings and update the null values to your connection string and database name respectively.

```
MONGODB_CONNECTION_STRING=NULL
DB_NAME=NULL
```

// Basically idk if i want to split chunks or not right now...
		splitChunks: {
			chunks: 'all',
			minSize: 20000,
			minRemainingSize: 0,
			minChunks: 1,
			maxSize: 512000,
			enforceSizeThreshold: 50000,
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					reuseExistingChunk: true,
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
		}
