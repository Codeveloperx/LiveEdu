import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaPK7rZCIfOcz7MwR3GvFe7m7mHBtyFpk",
  authDomain: "buffalomobileapp.firebaseapp.com",
  projectId: "buffalomobileapp",
  storageBucket: "buffalomobileapp.appspot.com",
  messagingSenderId: "24004272789",
  appId: "1:24004272789:web:65ce15df9df46118ee319c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
// apiKey: "AIzaSyBALuphjEB9iB9Mjir248ckwvK6z_mQD5Q",
// authDomain: "liveedu-app.firebaseapp.com",
// projectId: "liveedu-app",
// storageBucket: "liveedu-app.appspot.com",
// messagingSenderId: "9470527396",
// appId: "1:9470527396:web:0c4b31b9555ab809f86331"