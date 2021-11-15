import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config.js";

function firebaseInIt() {
    initializeApp(firebaseConfig);
}
export default firebaseInIt;