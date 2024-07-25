import {Link} from "react-router-dom";
import {useState} from "react";
import {useStateContext} from "../contexts/ContextProvider.jsx";
import {signUpApi} from "../api/SignInSignUp.js";

export default function SignUp() {
    const {setCurrentUser, setUserToken} = useStateContext();
    const [fullName, setFullName] = useState("John Test");
    const [email, setEmail] = useState("test1@gmail.com");
    const [password, setPassword] = useState("G_211044g");
    const [passwordConfirmation, setPasswordConfirmation] = useState("G_211044g");

    const onSubmit = (ev) => {
        ev.preventDefault();
        signUpApi(fullName,email,password,passwordConfirmation,(data,status)=>{
            if (status === 200){
                setCurrentUser(data.user);
                setUserToken(data.token);
            }else{
                alert(data.message+status);
            }
        })
    };

    return (
        <>
            <h2>Signup for free</h2>
            <p><Link to="/login">Login with your account</Link></p>
            <form onSubmit={onSubmit} action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true"/>
                <div>
                    <label htmlFor="full-name" className="sr-only">Full Name</label>
                    <input id="full-name" name="name" type="text" placeholder="Full Name"
                           value={fullName} required
                           onChange={ev => setFullName(ev.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email-address">Email address</label>
                    <input id="email-address" name="email" type="email" placeholder="Email address"
                           autoComplete="email" value={email} required
                           onChange={ev => setEmail(ev.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="Password"
                           autoComplete="current-password" value={password} required
                           onChange={ev => setPassword(ev.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password-confirmation">Password Confirmation</label>
                    <input
                        id="password-confirmation" name="password_confirmation" type="password"
                        placeholder="Password Confirmation" value={passwordConfirmation} required
                        onChange={ev => setPasswordConfirmation(ev.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Signup</button>
                </div>
            </form>
        </>
    );
}
