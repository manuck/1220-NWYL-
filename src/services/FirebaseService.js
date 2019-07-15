import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const POSTS = 'posts'
const PORTFOLIOS = 'portfolios'

// Setup Firebase
// const config = {
//     apiKey: "AIzaSyABr2suTcnEjJ4dB6HQnbXClCIgfrVGcF4",
//     authDomain: "web-mobile-second.firebaseapp.com",
//     databaseURL: "https://web-mobile-second.firebaseio.com",
//     projectId: "web-mobile-second",
//     storageBucket: "web-mobile-second.appspot.com",
//     messagingSenderId: "1084413908904",
// 	appId: "1:1084413908904:web:07ae84d3a56ff52f",
// }
// const config = {
// 	projectId: 'elice-ssafy',
// 	authDomain: 'elice-ssafy.firebaseapp.com',
// 	apiKey: 'AIzaSyCax1KLYHHlLEoxNkRIW8efgUBWooyEB2Q',
// 	databaseURL: 'https://elice-ssafy.firebaseio.com',
// 	storageBucket: 'gs://elice-ssafy.appspot.com'
// }
const config = {
	apiKey: "AIzaSyAKodJUz5WVvTWaGYqwQkmBnNRZksZyePQ",
    authDomain: "nwyl-webmobile2-583cf.firebaseapp.com",
    databaseURL: "https://nwyl-webmobile2-583cf.firebaseio.com",
    projectId: "nwyl-webmobile2-583cf",
    storageBucket: "nwyl-webmobile2-583cf.appspot.com",
    messagingSenderId: "1072881395763",
    appId: "1:1072881395763:web:67e5bb2e1f538736"
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
		console.log('getportfolios executed')
		const postsCollection = firestore.collection(PORTFOLIOS)
		console.log('R3')
		return postsCollection
				.orderBy('created_at', 'desc')
				.get()
				.then((docSnapshots) => {
					console.log('R5')
					return docSnapshots.docs.map((doc) => {
						console.log('R6')
						let data = doc.data()
						console.log('R7')
						data.created_at = new Date(data.created_at.toDate())
						console.log('R8')
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
