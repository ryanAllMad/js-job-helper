import express from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import Doc from'./views/Doc.js';
import process from'process';
import { userRouter } from './routes/userRoutes.js'
import { requirementsRouter } from './routes/requirementRoutes.js';
import { jobPostRouter } from './routes/jobPost.js';



//nvm use 20 >=
const app = express();
dotenv.config({path: './config.env'})
const db = process.env.MONGODB_CONNECTION_STRING
const dbName = process.env.DB_NAME

mongoose.connect(db, {
	dbName: dbName
}).then(() => {
	console.log('Connected to DB! See app at: http://localhost:3000/')
})

// api code:
app.use(express.json())
app.use('/api', userRouter)
app.use('/api', jobPostRouter)
app.use('/api', requirementsRouter)



// ui code:
app.set('views', './views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/', (request, response) => {
	const { pipe } = renderToPipeableStream(<Doc />, {
		onShellReady() {
			response.setHeader('content-type', 'text/html');
			pipe(response);
		},
	});
});
function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

app.listen(port);


