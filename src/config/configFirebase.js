import firebase from "firebase"
import "firebase/storage"
 
const configFirebase = {
  apiKey: "AIzaSyA4SyUauYQLOqqksYZrod-zs2Uz03GBDY8",
  authDomain: "appboinafaixa-77152.firebaseapp.com",
  projectId: "appboinafaixa-77152",
  storageBucket: "appboinafaixa-77152.appspot.com",
  messagingSenderId: "78543232923",
  appId: "1:78543232923:web:584bdb283f8c27bc944b3e"
};
// Initialize Firebase
firebase.initializeApp(configFirebase);
export default firebase