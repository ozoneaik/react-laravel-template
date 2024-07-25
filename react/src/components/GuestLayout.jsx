import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider";

export default function GuestLayout() {
    const {userToken} = useStateContext();
    // เช็คว่ามีเข้าสู่ระบบแล้วหรือไม่
    if (userToken) {
        return <Navigate to="/"/>
    }
    return (
        <Outlet/>
    )
}
