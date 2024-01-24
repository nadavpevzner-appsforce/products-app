// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCBirT5ovUaFgJH_9Nkr8nXYU9XCpSWJT0',
  authDomain: 'product-s-app.firebaseapp.com',
  projectId: 'product-s-app',
  storageBucket: 'product-s-app.appspot.com',
  messagingSenderId: '813473357596',
  appId: '1:813473357596:web:a93ae5a92e43383696a4d9',
  measurementId: 'G-2ECZVJS4JH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
