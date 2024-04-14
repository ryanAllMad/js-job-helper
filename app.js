import express from 'express';
import { renderToPipeableStream } from 'react-dom/server';
import Doc from './views/Doc.js';
import process from 'process';



//nvm use 21.7.2
const app = express();

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
