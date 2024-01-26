import { Link } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";

const Sellings = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
  return (
    <section className="new_arrivals">
    <div className="container mx-auto w-[80%] py-[60px] ">
        <h1 className="uppercase text-center text-[35px] font-bold lg:text-[45px] pb-10">
            Top Selling
        </h1>

        <div className="w-full">
        <Swiper
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            400: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                        }}
                    >
                            {data.map((card, index) => (
                        <SwiperSlide>
                                <div
                                    key={index}
                                    className=" shadow-[0px_0px_10px_3px_#eee] p-3 mx-1 my-1 rounded-2xl"
                                >
                                    <div className="flex justify-center ">
                                        <img
                                            src="images/test.png"
                                            alt=""
                                            className="w-full max-w-[270px]"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg  font-semibold text-nowrap overflow-hidden text-ellipsis">
                                            {card.title}
                                        </h3>
                                        <div className="flex my-1 items-center">
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStar className="text-yellow-400 text-lg" />
                                            <FaStarHalf className="text-yellow-400 text-lg" />
                                            <span>
                                                4.5/
                                                <span className="text-gray-500">
                                                    5
                                                </span>{" "}
                                            </span>
                                        </div>
                                        <div className="text-xl my-2 font-medium flex items-center">
                                            <span>120$</span>{" "}
                                            <span className="mx-2  text-gray-400">
                                                {card.price}
                                            </span>
                                            <span className="bg-red-300/40 rounded-[30px]  text-xs px-4 py-1 text-[#FF3333]">
                                                -20%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                        </SwiperSlide>
                            ))}
                    </Swiper>
            <div className="flex justify-center my-10">
                <Link to={"/shop"}>
                    <button className="w-[200px] py-2.5 rounded-3xl bg-black text-white">
                        View All
                    </button>
                </Link>
            </div>
        </div>
    </div>
</section>
  )
}
const data = [
    {
        image: "[Image Link 1]",
        title: "QuantumX Pro Gaming Mouse",
        price: "$79.99",
    },
    {
        image: "[Image Link 2]",
        title: "NebulaTech HD Wireless Headphones",
        price: "$129.95",
    },
    {
        image: "[Image Link 3]",
        title: "Galactic Fusion Smartwatch",
        price: "$149.99",
    },
    {
        image: "[Image Link 4]",
        title: "StellarVR Ultra Virtual Reality Headset",
        price: "$299.99",
    },
];
export default Sellings
