import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZpkX-IrUjC8-q3WH5oa_iwxPRdfyIDUY",
  authDomain: "vuefirebaseblog-practice.firebaseapp.com",
  projectId: "vuefirebaseblog-practice",
  storageBucket: "vuefirebaseblog-practice.appspot.com",
  messagingSenderId: "484416495494",
  appId: "1:484416495494:web:e6b9c86a35f649da221607",
};

const firebaesApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.field.serverTimeStamp;

export { timestamp };
export default firebaesApp.firestore();
