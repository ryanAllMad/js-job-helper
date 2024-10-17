import { CLIENT_ID, API_KEY, DISCOVERY_DOC, SCOPES } from "./hiddenConsts";

let tokenClient;
let gapiInited = false;
let gisInited = false;

async function initializeGapiClient() {
	await gapi.client.init({
		client_id: CLIENT_ID,
		discoveryDocs: [DISCOVERY_DOC],
	});
	gapiInited = true;
}
/**
 * Callback after api.js is loaded.
 */
function gapiLoaded() {
	gapi.load('client', initializeGapiClient);
}
/**
 * Callback after Google Identity Services are loaded.
 */
function gisLoaded() {
	tokenClient = google.accounts.oauth2.initTokenClient({
		client_id: CLIENT_ID,
		scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
		redirect_uri: 'YOUR_REDIRECT_URI',
        response_type: 'token',
        include_granted_scopes: 'true',
        state: 'pass-through value',
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
	};
	if (gapi.client.getToken() === null) {
		// Prompt the user to select a Google Account and ask for consent to share their data
		// when establishing a new session.
		tokenClient.requestAccessToken({ prompt: 'consent' });
	} else {
		// Skip display of account chooser and consent dialog for an existing session.
		tokenClient.requestAccessToken({ prompt: '' });
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
 * Create a sample doc:
 */
export async function saveDocument() {
	try {
		gapiLoaded()
		handleAuthClick()

		// try a get request for the oath
		// then try a post?
		const docs = gapi.client.request({
			path: 'https://docs.googleapis.com/v1/documents',
			method: 'POST',
			body: {
				title: 'Hellpo Blorb'
			}
		})
		console.log(docs)
		const response = await docs
		console.log(response.data)
	} catch (err) {
		console.error(err);
	}
}
