var firebaseConfig = {
	apiKey: "AIzaSyBhZY3f0NGELPdB6wpveREVRDlQRyDog2I",
	authDomain: "ht6-project.firebaseapp.com",
	projectId: "ht6-project",
	storageBucket: "ht6-project.appspot.com",
	messagingSenderId: "757566363285",
	appId: "1:757566363285:web:9741d74a6745951b76ad9c",
	measurementId: "G-Y9ZYJM3YWP"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signUp() {

	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var password2 = document.getElementById("password2");

	if (password.value !== password2.value) {
		return console.log("passwords must match");
	}

	const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
	promise
		.then(() => window.location.replace("login.html"))
		.catch(e => console.log(e));
}

function signIn() {

	var email = document.getElementById("email");
	var password = document.getElementById("password");
	
	const promise = auth.signInWithEmailAndPassword(email.value, password.value);
	promise
		.then(() => window.location.replace("application.html"))
		.catch(e => console.log(e));
}

function signOut() {
	auth.signOut();
	window.location.replace("login.html");
}

auth.onAuthStateChanged((user) => {
	if (user) {
		// window.location.replace("application.html");
	} else {
		// window.location.replace("login.html");
	}
});