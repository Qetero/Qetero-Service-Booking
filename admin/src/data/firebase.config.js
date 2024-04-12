import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8dzqo_4qi-U6QRRni6BUyJ6qso2Bu5SQ",
  authDomain: "qetero-8eb3a.firebaseapp.com",
  projectId: "qetero-8eb3a",
  storageBucket: "qetero-8eb3a.appspot.com",
  messagingSenderId: "534269297686",
  appId: "1:534269297686:web:6cafd948422159065da137",
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
