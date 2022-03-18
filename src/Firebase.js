import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCIpE158HWQDnIgoFRO7j1e3ipo7MnJ6pY",
  authDomain: "internet-store-2491b.firebaseapp.com",
  projectId: "internet-store-2491b",
  storageBucket: "internet-store-2491b.appspot.com",
  messagingSenderId: "215024112924",
  appId: "1:215024112924:web:fa7e486a6d2fdf3fbd56d9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)