import { Outlet } from "react-router-dom";
import Navbar from "../assets/components/Navbar";

const Layout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="">
                <Outlet/>
            </main>
            <footer>Footer</footer>
        </>
    );
};

export default Layout;
