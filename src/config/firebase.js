// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCxELvpckxCILgBKqSvHqacUWLyfgdchrU',
	authDomain: 'brendanmccauley-dev.firebaseapp.com',
	projectId: 'brendanmccauley-dev',
	storageBucket: 'brendanmccauley-dev.appspot.com',
	messagingSenderId: '740894863838',
	appId: '1:740894863838:web:9a18d56d4e5b8ec0212d4f',
	measurementId: 'G-Q9W3JCB71B',
};

// Initialize Firebase
initializeApp(firebaseConfig);
getAnalytics();

export const db = getFirestore();
