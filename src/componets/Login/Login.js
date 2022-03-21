import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { handleGoogleSignIn, handleResetPassword, processLogin, registerNewUser, setUserName, setIsLoading } = useAuth();
    const [isLogin, setIslogin] = useState(false);
    const [error, setError] = useState('');
    const [loginSuccess, setLoginSuccess] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/';
    setUserName(name);
    const handleSubmit = e => {
        e.preventDefault();


        if (password.length < 6) {
            setError('Password Must be 6 Characters long')
            error()
            return;
        }
        if (!/(?=.*[a-z].*[a-z])/.test(password)) {
            setError('Password must contain 2 lower case')
            return;
        }
        else {


        }
        isLogin ? processLogin(email, password)
            .then(result => {
                history.push(redirect_url);
                setLoginSuccess('Login Success');



            }).catch(error => {
                setError("Your Password or email is wrong!!!!, Try again with correct password and email");

            })
            .finally(() => {

                setIsLoading(false)
            })

            : registerNewUser(email, password)


    }
    const toggleLogin = e => {
        setIslogin(e.target.checked);
    }

    const handleEmailChanege = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChanege = e => {
        setPassword(e.target.value);
    }

    const handleNameChange = e => {
        setName(e.target.value);


    }

    const singInUsingGoogle = () => {
        handleGoogleSignIn()
            .then((result) => {
                history.push(redirect_url);
                setLoginSuccess('Login Success');



            }).finally(() => {

                setIsLoading(false)
            });


    }





    return (
        <div className="mx-auto my-5 w-75">
            <form onSubmit={handleSubmit}>
                <h3 className="text-primary">Please {isLogin ? "Login" : "Sign Up"}</h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputAddress" className="col-sm-2 col-form-label">
                        Name
                    </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onBlur={handleNameChange} placeholder="Your name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChanege} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChanege} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">
                    {error}
                </div>
                <button type="submit" className="btn btn-primary">{isLogin ? "Login" : "Sign in"}</button> <br /> <br />
                <button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm">Reset Password</button>

            </form>
            <br /> OR <br />
            <button className="btn btn-danger" onClick={singInUsingGoogle}>Google Sign In</button>

        </div>
    );
};

export default Login;