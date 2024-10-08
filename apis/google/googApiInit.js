import { CLIENT_ID, API_KEY } from "./hiddenConsts";

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/documents.readonly';

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://docs.googleapis.com/$discovery/rest?version=v1';

let tokenClient;
let gapiInited = false;
let gisInited = false;

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
async function initializeGapiClient() {
	await gapi.client.init({
		apiKey: API_KEY,
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
		scope: SCOPES,
		callback: '', // defined later
	});
	gisInited = true;
}

const apiScript = document.getElementById("apiScript")
apiScript.onload = gapiLoaded()
const gsiScript = document.getElementById('gsiScript')
gsiScript.onload = gisLoaded()
