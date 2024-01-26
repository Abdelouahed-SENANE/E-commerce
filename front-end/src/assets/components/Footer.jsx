import React from "react";
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaTelegramPlane,
    FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="pt-[100px] bg-primary relative">
            <div className="p-10 bg-black w-[90%] lg:w-[80%] mx-auto lg:mt-[-200px] mt-[-250px] rounded-xl">
                <div className="flex  items-start flex-col lg:flex-row lg:justify-between lg:items-center ">
                    <div className="max-w-[560px]">
                        <h4 className="text-[35px] font-bold text-white lg:text-[45px]">
                            STAY UPTO DATE ABOUT OUR LATEST OFFERS
                        </h4>
                    </div>
                    <form
                        action=""
                        method=""
                        className="mt-5 lg:mt-0 w-full lg:max-w-[400px]"
                    >
                        <div className="bg-white  rounded-3xl flex items-center px-3 gap-2 ">
                            <span>
                                <FaTelegramPlane className="text-2xl text-gray-400" />
                            </span>
                            <input
                                type="text"
                                name="message"
                                className="block py-3 outline-none bg-transparent w-full"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="w-full my-3">
                            <button className="w-full py-3 bg-white rounded-3xl font-medium">
                                Subscribe to Newsletter
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* =============== Container */}
            <div className="mt-[70px] container w-[90%] mx-auto lg:w-[80%]">
                <div className="flex flex-wrap items-start justify-between">
                    <div className="lg:max-w-[300px] flex-grow mb-6 lg:mb-0">
                        <h2>
                            <Link
                                to={"/"}
                                className="text-[35px] leading-6 font-bold"
                            >
                                SHOP.
                                <span className="text-orange-500">MA</span>
                            </Link>
                        </h2>
                        <p className="my-6 text-black/60">
                            We have clothes that suits your style and which
                            you’re proud to wear. From women to men.
                        </p>
                        <ul className="flex items-center gap-2">
                            <Link to={""}>
                                <li className="cursor-pointer transition-all ease-in-out duration-300 border hover:text-white hover:bg-black border-gray-300 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                    <FaTwitter className="text-xl" />
                                </li>
                            </Link>
                            <Link to={""}>
                                <li className="cursor-pointer transition-all ease-in-out duration-300 border hover:text-white hover:bg-black border-gray-300 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                    <FaFacebookF className="text-xl" />
                                </li>
                            </Link>
                            <Link to={""}>
                                <li className="cursor-pointer transition-all ease-in-out duration-300 border hover:text-white hover:bg-black border-gray-300 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                    <FaInstagram className="text-xl" />
                                </li>
                            </Link>
                            <Link to={""}>
                                <li className="cursor-pointer transition-all ease-in-out duration-300 border hover:text-white hover:bg-black border-gray-300 w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                    <FaGithub className="text-xl" />
                                </li>
                            </Link>
                        </ul>
                    </div>
                    {/* ================= LINKS =================== */}
                    <div className="w-[200px] my-2">
                        <ul>
                            <h3 className="text-2xl mb-6 font-semibold uppercase tracking-widest">
                                Company
                            </h3>
                            <li className="my-2  hover:text-orange-500">
                                <Link>About</Link>
                            </li>
                            <li className="my-2  hover:text-orange-500">
                                <Link>Features</Link>
                            </li>
                            <li className="my-2  hover:text-orange-500">
                                <Link>Works</Link>
                            </li>
                            <li className="my-2  hover:text-orange-500">
                                <Link>Career</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[200px] my-2">
                        <ul>
                            <h3 className="text-2xl mb-6 font-semibold uppercase tracking-widest">
                                Help
                            </h3>
                            <li className="my-2  hover:text-orange-500">
                                <Link>Costumer Support</Link>
                            </li>
                            <li className="my-2  hover:text-orange-500">
                                <Link>Delivery Details</Link>
                            </li>
                            <li className="my-2  hover:text-orange-500">
                                <Link>Terms & Conditions</Link>
                            </li>
                            <li className="my-2  hover:text-orange-500">
                                <Link>Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[200px] my-2">
                        <ul>
                            <h3 className="text-2xl mb-6 font-semibold uppercase tracking-widest">
                                faq
                            </h3>
                            <li className="my-2  hover:text-orange-500">
                                <Link>Account</Link>
                            </li>
                            <li>
                                <Link>Manage Deliveries</Link>
                            </li>
                            <li className="my-2  hover:text-orange-500">
                                <Link>Orders</Link>
                            </li>
                            <li className="my-2  hover:text-orange-500">
                                <Link>Payments</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[200px] my-2">
                        <ul>
                            <h3 className="text-2xl mb-6 font-semibold uppercase tracking-widest">
                                ressources
                            </h3>
                            <li className="my-2  hover:text-orange-500">
                                <Link>Free eBooks</Link>
                            </li>
                            <li className="my-2  text-wrap hover:text-orange-500">
                                <Link>Developpment Tutorial</Link>
                            </li>
                            <li className="my-2  hover:text-orange-500">
                                <Link>Hoe to- Blog</Link>
                            </li>
                            <li className="my-2  hover:text-orange-500">
                                <Link>Youtube Playlist</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t mt-6 border-gray-300 p-5 lg:px-0 lg:py-5">
                    <div className="flex flex-col gap-3 justify-between items-center lg:flex-row">
                        <div className="text-gray-500">
                            <span>
                                Shop.ma © 2023-2023, All Rights Reserved By Senane Abdelouahed
                            </span>
                        </div>
                        <ul className="flex items-center gap-3">
                            <li className="bg-white w-[70px] h-[35px] flex items-center justify-center cursor-pointer rounded-lg border border-gray-200">
                                <img
                                    src="images/Visa.png"
                                    alt=""
                                    className=""
                                />
                            </li>
                            <li className="bg-white w-[70px] h-[35px] flex items-center justify-center cursor-pointer rounded-lg border border-gray-200">
                                <img
                                    src="images/Mastercard.png"
                                    alt=""
                                    className=""
                                />
                            </li>
                            <li className="bg-white w-[70px] h-[35px] flex items-center justify-center cursor-pointer rounded-lg border border-gray-200">
                                <img
                                    src="images/Paypal.png"
                                    alt=""
                                    className=""
                                />
                            </li>
                            <li className="bg-white w-[70px] h-[35px] flex items-center justify-center cursor-pointer rounded-lg border border-gray-200">
                                <img
                                    src="images/GPay.png"
                                    alt=""
                                    className=""
                                />
                            </li>
                            <li className="bg-white w-[70px] h-[35px] flex items-center justify-center cursor-pointer rounded-lg border border-gray-200">
                                <img src="images/Pay.png" alt="" className="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
