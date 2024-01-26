import React from "react";

const Browse = () => {
    return (
        <section>
            <div className="container mx-auto w-[80%] rounded-3xl bg-primary px-10 py-5 lg:px-20 lg:py-10">
                <div>
                    <h1 className="uppercase text-center text-[35px] font-bold lg:text-[45px] pb-10">
                        BROWSE BY DRESS STYLE
                    </h1>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
                        <div className=" rounded-xl bg-[url(images/casual.png)] h-[300px] bg-cover bg-center lg:col-span-1 ">
                            <span className="text-[35px] font-semibold m-5 block">
                                Casual
                            </span>
                        </div>
                        <div className=" rounded-xl bg-[url(images/Formal.png)] h-[300px] bg-cover bg-center lg:col-span-3 bg-red-300">
                            <span className="text-[35px] font-semibold m-5 block">
                                Formal
                            </span>
                        </div>
                        <div className=" rounded-xl bg-[url(images/party.png)] h-[300px] bg-cover bg-center lg:col-span-3 bg-red-300">
                            <span className="text-[35px] font-semibold m-5 block">
                                Party
                            </span>
                        </div>

                        <div className=" rounded-xl bg-[url(images/gym.png)] h-[300px] bg-cover bg-center lg:col-span-1 ">
                            <span className="text-[35px] font-semibold m-5 block">
                                Gym
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Browse;
