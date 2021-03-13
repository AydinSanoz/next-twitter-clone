import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAJt7A8Py_4h2_qp_QvFbc4BFesw1iZh80',
	authDomain: 'next-twitter-29472.firebaseapp.com',
	projectId: 'next-twitter-29472',
	storageBucket: 'next-twitter-29472.appspot.com',
	messagingSenderId: '672594163380',
	appId: '1:672594163380:web:1393587563fac7ed2349e1',
	measurementId: 'G-M4QC65TFCV',
};

const twitterApp = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = twitterApp.firestore();

const auth = twitterApp.auth();

// const storage = twitterApp.storage();

export { db, auth /*storage*/ };
