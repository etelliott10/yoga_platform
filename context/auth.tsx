import { createContext, FC, useContext, useEffect, useState } from "react";

import {User, getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, signInWithEmailAndPassword} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; 
import {app, db} from "../firebase/firebase"


interface IAuth {
    user: User | null,
    login: () => void,
    logout: () => void,
    // signup: () => void
    // loginWithGithub: () => void,
   
}

const auth = getAuth(app);

const AuthContext = createContext<IAuth>({
    user: null, login: () => {}, logout: () => {}
     
});

const AuthProvider: FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
           if (user) {
               setUser(user);
           } else { 
               setUser(null)
           }
       });
       return unsubscribe;
    }, [])

const login = async () => {
        try {
            const userCredentials = await signInWithPopup(auth, new GoogleAuthProvider());
            console.log({...userCredentials.user});
            const docRef = await addDoc(collection(db, "users" ), {
                uid: userCredentials.user.uid,
                email: userCredentials.user.email,
                name: userCredentials.user.displayName,
                provider: userCredentials.user.providerData[0].providerId,
                photoUrl: userCredentials.user.photoURL
            })
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error(error);
        }
    }

    const signup = async (email, password) => {

        try {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
            
        } catch (error) {
            console.error(error);
        }

        try {
            const userCredentials = await signInWithPopup(auth, new GoogleAuthProvider());
            console.log({...userCredentials.user});
            const docRef = await addDoc(collection(db, "users" ), {
                uid: userCredentials.user.uid,
                email: userCredentials.user.email,
                name: userCredentials.user.displayName,
                provider: userCredentials.user.providerData[0].providerId,
                photoUrl: userCredentials.user.photoURL
            })
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error(error);
        }
    }
    const loginWithGithub = async () => {
        try {
            await signInWithPopup(auth, new GithubAuthProvider());
        } catch (error) {
            console.error(error);
        }
    }

    const logout = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth};