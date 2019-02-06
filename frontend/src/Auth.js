// Load Auth0 SDK
import auth0 from 'auth0-js';
// Get the domain including the protocol (http/https)
const DOMAIN = window.location.href.split("/").slice(0, 3).join("/");

class Auth {
	auth0 = new auth0.WebAuth({
		// Auth0 Domain
		domain: 'bolt-filesystem.auth0.com',
	    
		// SPA settings
		clientID: 'v1bIbXmbaFRs7Z5H10DVE3ExSfL5yc8z',
		redirectUri: DOMAIN + '/callback',
		responseType: 'token id_token',

		// API settings
		scope: 'openid profile'
	})
	domain = DOMAIN
	accessToken = ""
	constructor () {
		this.auth0_data = JSON.parse(localStorage.getItem("auth0_auth") || "null")
		
		if (this.auth0_data) {
			this.accessToken = this.auth0_data.accessToken
		}
	}
	login () {
		this.auth0.authorize()
	}
	logout () {
		localStorage.clear();
		window.location = "/"
	}

	getProfile(cb) {
		if (!this.accessToken) { return cb(null, null); }
	    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
	    	if (err) {
	    		return cb(err)
	    	}
	      if (profile) {
	        this.userProfile = profile;
	      }
	      cb(err, profile);
	    });
	}

	
	handleAuthentication(cb) {
	    this.auth0.parseHash((err, authResult) => {
	      if (authResult && authResult.accessToken && authResult.idToken) {
	        this.setSession(authResult);
	        cb(null, authResult)
	      } else if (err) {
	        cb(err)
	      }
	    });
	}

	checkAuthentication (cb) {
		if (window.location.pathname !== "/callback") {
			if (this.isAuthenticated()) {
				return this.renewSession(cb)
			}
			return cb(null, null)
		}
		// If we are on the /callback page, check the hash details (token etc)
		this.handleAuthentication(cb)
	}

	renewSession(cb) {
		cb(null, {})
	    /*this.auth0.checkSession({

	    }, (err, authResult) => {
	       if (authResult && authResult.accessToken && authResult.idToken) {
	         this.setSession(authResult);
	       } else if (err) {
	         this.logout();
	         Util.error(err);
	       }
	       cb(err, authResult)
	    });*/
	}

	setSession(authResult) {
	    // Set isLoggedIn flag in localStorage
	    localStorage.setItem('isLoggedIn', 'true');

	    localStorage.setItem("auth0_auth", JSON.stringify(authResult))

	    // Set the time that the access token will expire at
	    let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
	    this.accessToken = authResult.accessToken;
	    this.idToken = authResult.idToken;
	    this.expiresAt = expiresAt;

	    // navigate to the home route
	    window.location = "/";
	}

	 isAuthenticated() {
	 	return localStorage.getItem("isLoggedIn") === "true"
	    // Check whether the current time is past the
	    // access token's expiry time
	    //let expiresAt = this.expiresAt;
	    //return new Date().getTime() < expiresAt;
	  }
};


export default new Auth()