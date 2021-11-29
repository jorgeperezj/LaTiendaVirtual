// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
const config = {
	apiKey: "AIzaSyAOmua9rLn2lBRKEnpDybl3Fu_uLlwO14o",
	authDomain: "latiendavirtual-bd392.firebaseapp.com",
	projectId: "latiendavirtual-bd392",
	storageBucket: "latiendavirtual-bd392.appspot.com",
	messagingSenderId: "854915158771",
	appId: "1:854915158771:web:166cf22bda3db3df83dd86"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: 'popup',
	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: '/inicio',
	// We will display Google and Facebook as auth providers.
	signInOptions: [
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	],
	callbacks: {
		// Avoid redirects after sign-in.

		signInSuccessWithAuthResult: (authResult) => {
			const obj = {
				id: authResult.user.uid,
				name: authResult.additionalUserInfo.profile.given_name
			}
			localStorage.setItem("data", JSON.stringify(obj));
			return true;
		},
	},
};

function ButtonLogIn() {
	return (
		<div>
			<span className="btn btn-dark btn-large btn-block">
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
			</span>
		</div>
	);
}

export default ButtonLogIn

