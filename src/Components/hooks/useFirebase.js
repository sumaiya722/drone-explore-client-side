import firebaseInIt from "../../Firebase/firebase.init.js";
import { getAuth,signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,updateProfile,signOut,createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInIt();
const useFirebase = () => {
    const [newUser, setNewUser] = useState({});
    const [isLoadind, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const[error,setError]=useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    function googleSignIn() {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .finally(()=>setIsLoading(false))
        .catch(err=>setError(err.message))
    }

    //email-pass
    function registerUser() {
        createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
            .then(result => {
                setUserDisplayName();
                setNewUser({})
            })
        .catch(error=>setError(error.message))
    }

//login
    function login() {
        signInWithEmailAndPassword(auth,newUser.email,newUser.password)
            .then(result => {
                const user = result.user;
                setUser(user)
                setNewUser({});
            })
            .catch(error => setError(error.message))
    }

    //get sign in user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setNewUser({});
            setIsLoading(false)
        });
        return () => unsubscribed;
    },[])
    //set user name and photo url
    function setUserDisplayName() {
        updateProfile(auth.currentUser, {
            displayName: newUser.name,
            photoURL:newUser.photoURL
        })
            .then(() => { })
            .catch(error => {
            setError(error.message)
        })
    }
    //logout
    function logout() {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setNewUser({});
                setUser({});
            })
            .finally(()=>setIsLoading(false))
        .catch(err=>setError(err.message))
    }

    return {
        googleSignIn,
        isLoadind,
        user, error,
        logout,
        newUser, setNewUser,
        registerUser,
        login
}
};

export default useFirebase;