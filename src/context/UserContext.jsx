import { createContext, useState, useEffect } from 'react';
import app from '../Firebase/firebase.init'
import  {getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const UserContext = ({children}) =>{

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider;

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, provider);
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    }, [])
    const authInfo = {user, createUser, signIn, logOut, loading, signInWithGoogle}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;