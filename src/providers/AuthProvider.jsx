import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] =useState(null);
    const [loading ,setLoading] = useState()

    // create user
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // logout
    const logOut =()=>{
        setLoading(true)
        return signOut(auth);
    }

    // signIn
    const signIn =(email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email, password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false)
            
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo ={

        user,
        createUser,
        logOut,
        signIn,
        loading





    }





    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;