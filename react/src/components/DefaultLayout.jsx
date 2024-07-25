import {useEffect} from "react";
import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider";
import axiosClient from "../axios";
import {signOutApi} from "../api/SignInSignUp.js";
import {alertSuccess} from "../dialogs/alertSuccess.jsx";
import {alertsQuestions} from "../dialogs/alertQuestion.jsx";
import {profileApi} from "../api/User.js";
import {alertError} from "../dialogs/alertError.jsx";

export default function DefaultLayout() {
    const {currentUser, userToken, setCurrentUser, setUserToken} = useStateContext();
    //เช็คว่าเข้าสู่ระบบหรือยัง ถ้ายังให้ ไปหน้า login
    if (!userToken) {
        return <Navigate to="login"/>;
    }
    // ฟังก์ชั่นการ ออกจากระบบ
    const logout = (ev) => {
        ev.preventDefault();
        alertsQuestions('ออกจากระบบ','คุณแน่ใจหรือไม่',(confirm)=>{
            if (confirm){
                signOutApi((data, status) => {
                    if (status === 200) {
                        setCurrentUser({});
                        setUserToken(null);
                        alertSuccess()
                    } else {
                        alert(data.message + status);
                    }
                });
            }
        })

    };
    //ดึงข้อมูล user
    useEffect(() => {
        profileApi((data,status)=>{
            if (status === 200){
                setCurrentUser(data)
            }else{
                alertError(data.message+status);
            }
        })
    }, []);
    return (
        <>
            <div className="min-h-full">
                <h1>{currentUser.name}</h1>
                <button onClick={(e) => logout(e)}>logout</button>
                <Outlet/>
            </div>
        </>
    );
}
