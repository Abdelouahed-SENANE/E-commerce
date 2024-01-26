import { FaSearch, FaShoppingCart, FaRegUserCircle , FaSearchDollar } from "react-icons/fa";
import { FaBars, FaXmark, FaTrash } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormLogin from "./FormLogin"
import Modal from "./Modal";
import FormRegister from "./FormRegister";

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [isNavMobile, setIsNavMobile] = useState("h-[0px]");
    const [showBasket, setShowBasket] = useState(
        "invisible opacity-0 top[calc(100%+40px)]"
    );
    const [shopButton, setShopButton] = useState(false);
    const [isSearch , setIsSerach] = useState(false);
    const [isSearchBar  , setIsSearchBar] = useState('invisible opacity-0 top-[calc(100%+20px)]');

    const togglereNavbar = () => {
        if (isNavMobile == "h-[0px]") {
            setIsNavMobile("h-[300px]");
            setIsClicked(true);
        } else {
            setIsNavMobile("h-[0px]");
            setIsClicked(false);
        }
    };
    const closeNavbar = () => {
        setIsNavMobile("h-[0px]");
        setIsClicked(false);
    };

    // ====== Show Cart ======
    const funShowBasket = () => {
        if (shopButton) {
            setShowBasket("invisible opacity-0 top-[calc(100%+50px)]");
            setShopButton(false);
        } else {
            setShowBasket("visible opacity-1 top-[calc(100%+20px)]");
            setShopButton(true);
        }
    };
    // ========= Show Search bar ===========
    const funcShowSearchBar = () => {
        if (isSearch) {
            setIsSearchBar('invisible opacity-0 top-[calc(100%+40px)]');
            setIsSerach(false);
        } else {
            setIsSearchBar("visible opacity-1 top-[calc(100%+20px)]");
            setIsSerach(true);
        }
    };
    // ============ Modal =========
    const [isModal , setIsModal] = useState(false);
    const [isLogin , setIsLogin] = useState(false);
    
    const togglerLogin = () => {
        setIsModal(!isModal)
        setIsLogin(true);
    }
    const togllerRegister = () => {
        setIsModal(!isModal)
        setIsLogin(false);
    }

    
    const closeModal = () => {
        if (isModal) {
            setIsModal(false);
        }
    }
    return (
        <div>
            <div>
                <p className="text-sm py-2 text-center text-white bg-black lg:text-base ">
                    Sign up and get 20% of to your first order.
                    <Link to={"/register"} className="mx-2 underline">
                        Sign Up Now
                    </Link>
                </p>
            </div>
            <nav className=" shadow-sm relative">
                <div className="container mx-auto w-[80%]  py-5">
                    <div className="flex items-center justify-between">
                        {/* ---- Logo And Burger ---- */}
                        <div className="flex items-center">
                            <button
                                className="mr-2 md:hidden"
                                onClick={() => togglereNavbar()}
                            >
                                {!isClicked ? (
                                    <FaBars size={24} />
                                ) : (
                                    <FaXmark size={24} />
                                )}
                            </button>
                            <h1>
                                <Link
                                    to={"/"}
                                    className="text-[25px] font-bold"
                                >
                                    SHOP.
                                    <span className="text-orange-500">MA</span>
                                </Link>
                            </h1>
                        </div>
                        {/* ----- Nav bar ----- */}

                        <div
                            className={`absolute top-[100%] overflow-hidden left-0 transition-height duration-300 ease-in-out ${isNavMobile} bg-white shadow-md w-full z-10 md:hidden`}
                        >
                        {/* ============ NAVBAR MOBILE ============== */}
                            <div className="container mx-auto w-[80%]">
                                <ul className="py-5">
                                    <li className="mx-2 py-3">
                                        <Link
                                            to={"/"}
                                            onClick={closeNavbar}
                                            className="hover:text-red-600 transition ease-in-out duration-200"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className="mx-2 py-3">
                                        <Link
                                            to={"/shop"}
                                            onClick={closeNavbar}
                                            className="hover:text-red-600 transition ease-in-out duration-200"
                                        >
                                            Shop
                                        </Link>
                                    </li>
                                    <li className="mx-2 py-3">
                                        <Link
                                            to={"/new"}
                                            onClick={closeNavbar}
                                            className="hover:text-red-600 transition ease-in-out duration-200"
                                        >
                                            New Arrivals
                                        </Link>
                                    </li>
                                    <li className="mx-2 py-3">
                                        <Link
                                            to={"/brands"}
                                            onClick={closeNavbar}
                                            className="hover:text-red-600 transition ease-in-out duration-200"
                                        >
                                            Brands
                                        </Link>
                                    </li>
                                    <li className="mx-2 py-3">
                                        <Link
                                            to={"/about"}
                                            onClick={closeNavbar}
                                            className="hover:text-red-600 transition ease-in-out duration-200"
                                        >
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* ========== NAVBAR DESKTOP =============== */}
                        <div className="hidden md:block">
                            <div className="container mx-auto w-[80%]">
                                <ul className="flex w-[400px] items-center md:flex-row">
                                    <li className="mx-2">
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className="mx-2">
                                        <Link to={"/shop"}>Shop</Link>
                                    </li>
                                    <li className="mx-2">
                                        <Link to={"/new"}>New Arrivals</Link>
                                    </li>
                                    <li className="mx-2">
                                        <Link to={"/brands"}>Brands</Link>
                                    </li>
                                    <li className="mx-2">
                                        <Link to={"/about"}>About</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* ===== Icons === */}
                        <ul className="flex items-center">
                            <li className="relative">
                                <button className="block hover:text-red-500 transition-all duration-150 ease-linear" onClick={funcShowSearchBar}>
                                {isSearch ?  <FaXmark size={20} /> : <FaSearch size={20} />}
                                </button>
                                {/* ========= Bar Search =============== */}
                                <div className={` ${isSearchBar} transition-all  duration-500 absolute bg-white right-4 border min-w-[350px] border-gray-200 shadow-sm`}>
                                    <div className="flex items-center justify-between w-full h-[40px]">
                                        <input type="text" placeholder="Search "  className="outline-none text-sm block px-3 flex-1"/>
                                        <button className="flex items-center justify-center h-full w-[40px] bg-gray-200">
                                             <FaSearch className="text-gray-800"/>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            {/* ========== CART USER ================== */}
                            <li className="cursor-pointer relative mx-2">
                                <button
                                    className="block ralative  hover:text-red-500 transition-all duration-150 ease-linear"
                                    onClick={() => {
                                        funShowBasket();
                                    }}
                                >
                                    <FaShoppingCart size={20} />
                                    <div className="absolute top-[-3px] flex items-center justify-center font-semibold right-[-8px] bg-red-500 rounded-full w-[15px] text-[8px] text-white h-[15px]">
                                        <span className="">0</span>
                                    </div>
                                </button>
                                {/* ============= Cart Components =============  */}
                                <div
                                    className={`bg-white absolute transition-all ease-in-out duration-500 ${showBasket} right-[0px] z-30`}
                                >
                                    <ul className="border-b-0 border border-gray-200 min-w-[300px] z-20">
                                        <li className="flex p-2 border-b border-gray-200 gap-2 relative">
                                            <img
                                                src="images/test.png"
                                                alt=""
                                                className="w-[70px] "
                                            />
                                            <div>
                                                <h2 className="text-md text-red-500">
                                                    T-shirt
                                                </h2>
                                                <p className="font-semibold">
                                                    49.55$
                                                </p>
                                            </div>
                                            <span className="absolute top-2 right-2">
                                                <FaTrash size={12} />
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="p-2 border-t-0 border border-gray-200">
                                        <div className="flex mb-0.5  items-center justify-between">
                                            <span className="text-sm">
                                                Subtotal
                                            </span>
                                            <span className="font-semibold text-sm ">
                                                99.50$
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">
                                                Shipping
                                            </span>
                                            <span className="font-semibold text-sm ">
                                                99.50$
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">
                                                Taxes
                                            </span>
                                            <span className="font-semibold text-sm ">
                                                0.50$
                                            </span>
                                        </div>
                                    </div>
                                    <div className="px-2 py-4 border-t-0 border border-gray-200">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm">
                                                Total
                                            </span>
                                            <span className="font-semibold text-sm">
                                                0.50$
                                            </span>
                                        </div>
                                        <div className="pt-5 text-center">
                                            <Link to={"/cart"}>
                                                <button className="px-10 py-2 bg-black text-sm text-white">
                                                    View Cart
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="mx-1">
                                <div className="relative">
                                    <button className="block hover:text-red-500 transition-all duration-150 ease-linear user" >
                                    <FaRegUserCircle size={20} />
                                    </button>
                                    <div className="cart-user cursor-pointer bg-white border border-gray-200 p-2 min-w-[200px] ">
                                        <ul className="text-sm ">
                                            <li className="my-1">
                                                <button className="hover:text-red-500 transition-all duration-150 ease-linear" onClick={togglerLogin}>
                                                    Sign In
                                                </button>
                                            </li>
                                            <li className="my-1">
                                                <button className="hover:text-red-500 transition-all duration-150 ease-linear" onClick={togllerRegister}>
                                                    Register
                                                </button>
                                            </li>
                                            <li className="my-1">
                                                <button className="hover:text-red-500 transition-all duration-150 ease-linear">
                                                    My Account
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <Modal  Form={ isLogin ? <FormLogin/> : <FormRegister/>} stateModal={isModal} closeModal={closeModal}/>

        </div>
    );
};

export default Navbar;
