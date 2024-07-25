import {useState} from "react";
import {Link} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider";
import {signInApi} from "../api/SignInSignUp.js";
import {alertError} from "../dialogs/alertError.jsx";

export default function SignIn() {
    const {setCurrentUser, setUserToken} = useStateContext();
    const [email, setEmail] = useState("test@gmail.com");
    const [password, setPassword] = useState("G_211044g");

    const onSubmit = (ev) => {
        ev.preventDefault();
        signInApi(email,password,(data,status) => {
            if (status === 200){
                setCurrentUser(data.user);
                setUserToken(data.token);
            }else{
                alertError('เกิดข้อผิดพลาด',`${data.message} รหัสข้อผิดพลาด ${status}`)
            }
        });
    };

    return (
        <>
            <h2>Sign in to your account</h2>
            <p><Link to="/signup">signup for free</Link></p>
            <form onSubmit={onSubmit} action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true"/>
                <div>
                    <label htmlFor="email-address">Email address</label>
                    <input id="email-address" name="email" type="email" placeholder="Email address"
                           autoComplete="email" required value={email}
                           onChange={(ev) => setEmail(ev.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" type="password" placeholder="Password"
                           autoComplete="current-password" required value={password}
                           onChange={(ev) => setPassword(ev.target.value)}
                    />
                </div>
                <div>
                    <input id="remember-me" name="remember-me" type="checkbox"/>
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <div>
                    <button type="submit">Sign in</button>
                </div>
            </form>
        </>
    );
}
