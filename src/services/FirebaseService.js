import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const POSTS = 'posts'
const PORTFOLIOS = 'portfolios'

// Setup Firebase
const config = {
    apiKey: "AIzaSyABr2suTcnEjJ4dB6HQnbXClCIgfrVGcF4",
    authDomain: "web-mobile-second.firebaseapp.com",
    databaseURL: "https://web-mobile-second.firebaseio.com",
    projectId: "web-mobile-second",
    storageBucket: "web-mobile-second.appspot.com",
    messagingSenderId: "1084413908904",
	appId: "1:1084413908904:web:07ae84d3a56ff52f",
}


firebase.initializeApp(config)
const firestore = firebase.firestore()

// firestore.settings({timestampsInSnapshots: true})
export { firestore };

export default {
	getPosts() {
		const postsCollection = firestore.collection(POSTS)
		return postsCollection
				.orderBy('created_at', 'desc')
				.get()
				.then((docSnapshots) => {
					return docSnapshots.docs.map((doc) => {
						let data = doc.data()
						data.created_at = new Date(data.created_at.toDate())
						return data
					})
				})
	},
	postPost(title, body) {
		return firestore.collection(POSTS).add({
			title,
			body,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
	},
	getPortfolios() {
		const postsCollection = firestore.collection(PORTFOLIOS)
		return postsCollection
				.orderBy('created_at', 'desc')
				.get()
				.then((docSnapshots) => {
					return docSnapshots.docs.map((doc) => {
						let data = doc.data()
						data.created_at = new Date(data.created_at.toDate())
						return data
					})
				})
	},
	postPortfolio(title, body, img) {
		return firestore.collection(PORTFOLIOS).add({
			title,
			body,
			img,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
	},
	loginWithGoogle() {
		let provider = new firebase.auth.GoogleAuthProvider()
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			let accessToken = result.credential.accessToken
			let user = result.user
			return result
		}).catch(function(error) {
			console.error('[Google Login Error]', error)
		})
	},
	loginWithFacebook() {
		let provider = new firebase.auth.FacebookAuthProvider()
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			let accessToken = result.credential.accessToken
			let user = result.user
			return result
		}).catch(function(error) {
			console.error('[Facebook Login Error]', error)
		})
	},
	createUserWithEmailAndPassword(email, password) {
		return firebase.auth().createUserWithEmailAndPassword(email, password).then(function(result) {
			return result
		})
		.catch(function(error) {
			let errorCode = error.code;
			let errorMessage = error.message;
			if(errorCode === 'auth/email-already-in-use') {
				alert('이미 사용중인 e-mail 입니다.');
			}
			else {
				alert(errorMessage);
			}
			console.error('[SignUp Error]',error)
		})
	}
}
