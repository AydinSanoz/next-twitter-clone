import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCII5EnbX2al-xg9OeXs_9l9T73o7gpcWs',
	authDomain: 'twitterclone-d6669.firebaseapp.com',
	projectId: 'twitterclone-d6669',
	storageBucket: 'twitterclone-d6669.appspot.com',
	messagingSenderId: '273953701665',
	appId: '1:273953701665:web:ba48be15e860a459550860',
	measurementId: 'G-VN3QQJ70GK',
};

const twitterApp = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = twitterApp.firestore();

const auth = twitterApp.auth();

const storage = twitterApp.storage();

export { db, auth, storage };
