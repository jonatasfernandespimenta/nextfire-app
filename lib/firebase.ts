import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD5CiuiRHbOLLHA6VavBrtHMuzDsrFEH0Q",
  authDomain: "nextfire-cd847.firebaseapp.com",
  projectId: "nextfire-cd847",
  storageBucket: "nextfire-cd847.appspot.com",
  messagingSenderId: "101640717098",
  appId: "1:101640717098:web:47554537dffe3e2788d453"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export const auth: any = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
