import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader.jsx"
import AppFooter from "../components/AppFooter.jsx";

const GuestLayout = () => {
    console.log("GuestLayout renderizzato");
    return (
        <>
            <AppHeader/>
            <Outlet/>
            <AppFooter/>
        </>
    )
}

export default GuestLayout