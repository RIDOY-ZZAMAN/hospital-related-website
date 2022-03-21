import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import aunthenticationInitialize from "../componets/Firebase/firebase.init";


aunthenticationInitialize();


const useFirebase = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);




    const handleGoogleSignIn = () => {
        setIsLoading(true);

        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }
    const processLogin = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})

            }
            setIsLoading(false);

        });
        return () => unsubscribed;
    }, [])

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;

                setUser(user);
                setError('');
                verifyEmail();
                setUserName();
                //save user to the database
                saveUser(email, password, 'POST')

            })
            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            }).catch((error) => {

            });

    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {

            });
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
            .catch((error) => {

            });
    }


    const logOut = () => {
        setIsLoading(true);

        signOut(auth).then(() => {
            setUser({});
        }).finally(() => {

            setIsLoading(false)
        });

    }

    const saveUser = (email, password, method) => {
        const user = { email, password };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("New User Created Successfully")

                }
            })

    }

    //Admin
    useEffect(() => {

        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);

            })
    }, [user.email])

    return {
        user,
        isLoading,
        error,
        handleGoogleSignIn,
        registerNewUser,
        setUserName,
        verifyEmail,
        processLogin,
        handleResetPassword,
        logOut,
        setIsLoading,
        admin



    }


}

export default useFirebase;