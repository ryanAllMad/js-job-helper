import { CLIENT_ID, API_KEY, DISCOVERY_DOC, SCOPES } from './hiddenConsts';

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
export function gapiLoaded() {
	gapi.load('client', initializeGapiClient);
}
/**
 * Callback after Google Identity Services are loaded.
 */
export function gisLoaded() {
	tokenClient = google.accounts.oauth2.initTokenClient({
		client_id: CLIENT_ID,
		scope: 'https://www.googleapis.com/auth/documents',
		redirect_uri: 'http://localhost:5173/search-resume',
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
	gisLoaded();
	
	tokenClient.callback = async (resp) => {
		if (resp.error !== undefined) {
			throw resp;
		}
	};
	runTokens();
};

const runTokens = () => {
	gapiLoaded();
	if (gapi && gapi.client && gapi.client.getToken() !== null) {
		return tokenClient.requestAccessToken({ prompt: '' });
	} else {
		return tokenClient.requestAccessToken({ prompt: 'consent' });
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
export async function saveDocument(docTitle, insertText) {
	try {
		// try a get request for the oath
		// then try a post?
		if(gapi.client) {
			const docs = gapi.client.request({
				path: 'https://docs.googleapis.com/v1/documents',
				method: 'POST',
				headers: {
					'Cross-Origin-Opener-Policy': 'same-origin',
				},
				body: {
					title: docTitle,
				},
			});
			const response = await docs;
			const updateDocs = gapi.client.request({
				path: `https://docs.googleapis.com/v1/documents/${response.result.documentId}:batchUpdate`,
				method: 'POST',
				headers: {
					'Cross-Origin-Opener-Policy': 'same-origin',
				},
				body: {
					requests: [
						{
							insertText: {
								// The first text inserted into the document must create a paragraph,
								// which can't be done with the `location` property.  Use the
								// `endOfSegmentLocation` instead, which assumes the Body if
								// unspecified.
								endOfSegmentLocation: {},
								text: insertText,
							},
						},
					],
				}
			});
			const updateResponse = await updateDocs;
			alert(`Google doc ${response.result.title} was created! Open your google Doc's in a new tab to locate.`);
			return updateResponse;
		} else {
			alert('Try Authorizing Google Docs again.')
		}
		
	} catch (err) {
		console.error(err);
	}
}
