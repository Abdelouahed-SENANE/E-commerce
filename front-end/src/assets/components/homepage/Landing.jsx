import { Link } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Landing = () => {
  return (
    <div className="w-full bg-primary">
                <div className="container mx-auto w-[80%] pt-8">
                    <div className="lg:flex items-center">
                        {/* ========= Div 1 =========== */}
                        <div className="lg:w-[50%]">
                            <h1 className="font-[800] leading-[45px] text-[45px] lg:text-[70px] lg:leading-none lg:my-5">
                                FIND CLOTHES THAT MATCHES YOUR STYLE
                            </h1>
                            <p className="text-sm lg:text-base my-2">
                                Browse through our diverse range of meticulously
                                crafted garments, designed to bring out your
                                individuality and cater to your sense of style.
                            </p>
                            <div className="my-3">
                                <Link
                                    to={"/shop"}
                                    className="block bg-black lg:max-w-[200px] text-center text-white py-3 rounded-full"
                                >
                                    Shop Now
                                </Link>
                            </div>
                            <ul className="text-center my-5 flex flex-wrap gap-4 lg:gap-8 items-center justify-center lg:justify-start">
                                <li className="my-4">
                                    <h3 className="text-[30px] leading-8 font-semibold">
                                        +200
                                    </h3>
                                    <span className="text-lg font-normal text-gray-500">
                                        International Brands
                                    </span>
                                </li>
                                <li className="my-4">
                                    <h3 className="text-[30px] leading-8 font-semibold">
                                        +2,000
                                    </h3>
                                    <span className="text-lg font-normal text-gray-500">
                                        High-Quality Products
                                    </span>
                                </li>
                                <li className="my-4">
                                    <h3 className="text-[30px] leading-8 font-semibold">
                                        30,000+
                                    </h3>
                                    <span className="text-lg font-normal text-gray-500">
                                        Happy Customers
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/* ========= Div 2 =========== */}
                        <div className="relative lg:w-[50%] lg:flex lg:justify-end">
                            <div>
                                <span className="absolute right-[-10px] top-[100px] w-[80px]">
                                    <img src="images/Vector.png" alt="" />
                                </span>
                                <img
                                    src="/images/mobile.png"
                                    alt=""
                                    className="w-full lg:w-[600px]"
                                />
                                <span className="absolute left-[10px] bottom-[200px] lg:left-[150px] lg:bottom-[300px] w-[50px]">
                                    <img src="images/Vector.png" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ============= BRANDS ========================= */}
                <div className="bg-black">
                    <div className="container mx-auto w-[80%]">
                        <ul className="py-8  flex items-center flex-wrap gap-5 text-center justify-center lg:justify-between">
                            <li className="text-white">
                                <img src="images/Calvin.png" alt="" />
                            </li>
                            <li className="text-white">
                                <img src="images/Gucci.png" alt="" />
                            </li>
                            <li className="text-white">
                                <img src="images/Prada.png" alt="" />
                            </li>
                            <li className="text-white">
                                <img src="images/versace.png" alt="" />
                            </li>
                            <li className="text-white">
                                <img src="images/Zara.png" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
  )
}

export default Landing
