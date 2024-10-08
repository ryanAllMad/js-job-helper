import { CLIENT_ID } from "./hiddenConsts";

let tokenClient;
let gisInited = false;

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/documents.readonly';
/**
		 * Callback after Google Identity Services are loaded.
		 */
function gisLoaded() {
	tokenClient = google.accounts.oauth2.initTokenClient({
		client_id: CLIENT_ID,
		scope: SCOPES,
		callback: '', // defined later
	});
	gisInited = true;
}

/**
 *  Sign in the user upon button click.
 */
export const handleAuthClick = () => {
	gisLoaded()
	
	tokenClient.callback = async (resp) => {
		if (resp.error !== undefined) {
			throw resp;
		}
		await printDocTitle();
	};
	if(gapi && gapi.client) {
		if (gapi.client.getToken() === null) {
			// Prompt the user to select a Google Account and ask for consent to share their data
			// when establishing a new session.
			tokenClient.requestAccessToken({ prompt: 'consent' });
		} else {
			// Skip display of account chooser and consent dialog for an existing session.
			tokenClient.requestAccessToken({ prompt: '' });
		}
	}
	
}

/**
 *  Sign out the user upon button click.
 */
export function handleSignoutClick() {
	const token = gapi.client.getToken();
	if (token !== null) {
		google.accounts.oauth2.revoke(token.access_token);
		gapi.client.setToken('');
	}
}

/**
 * Prints the title of a sample doc:
 * https://docs.google.com/document/d/195j9eDD3ccgjQRttHhJPymLJUCOUjs-jmwTrekvdjFE/edit
 */
async function printDocTitle() {
	try {
		const response = await gapi.client.docs.documents.get({
			documentId: '195j9eDD3ccgjQRttHhJPymLJUCOUjs-jmwTrekvdjFE',
		});
		const doc = response.result;
		const output = `Document ${doc.title} successfully found.\n`;
	} catch (err) {
		console.log(err);
	}
}
