import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6WxVDrc9YtIZlGqSWonOZIZR1ZTIvWwA",
  authDomain: "mmhs-cddea.firebaseapp.com",
  projectId: "mmhs-cddea",
  storageBucket: "mmhs-cddea.appspot.com",
  messagingSenderId: "796699761334",
  appId: "1:796699761334:web:ee4d21675b71bb43236417",
  measurementId: "G-J26KVD71JJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
