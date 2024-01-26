import { Link } from "react-router-dom";

const FormRegister = () => {
    // ======= HandleSubmit =======

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <h1 className="text-[25px] lg:text-[30px] font-semibold">
                New Account Register
            </h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="email">First name</label>
                    <input
                        type="text"
                        name="firstname"
                        required
                        id=""
                        onChange={(e) => {}}
                        className="block w-full my-2 py-2 px-3 text-[14px] bg-gray-100 outline-none transition-all duration-200 ease-linear focus:bg-white focus:border focus:border-orange-500"
                        placeholder="Enter firstname"
                    />
                    <div className="text-red-500">{}</div>
                </div>
                <div className="my-3">
                    <label htmlFor="email">Last name</label>
                    <input
                        type="text"
                        name="lastname"
                        required
                        id=""
                        onChange={(e) => {}}
                        className="block w-full my-2 py-2 px-3 text-[14px] bg-gray-100 outline-none transition-all duration-200 ease-linear focus:bg-white focus:border focus:border-orange-500"
                        placeholder="Enter lastname"
                    />
                    <div className="text-red-500">{}</div>
                </div>
                <div className="my-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        required
                        id=""
                        onChange={(e) => {}}
                        className="block w-full my-2 py-2 px-3 text-[14px] bg-gray-100 outline-none transition-all duration-200 ease-linear focus:bg-white focus:border focus:border-orange-500"
                        placeholder="Enter email"
                    />
                    <div className="text-red-500">{}</div>
                </div>
                <div className="my-3">
                    <label htmlFor="passowrd">Password</label>
                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            id=""
                            required
                            className="block w-full my-2 py-2 px-3 text-[14px] bg-gray-100 outline-none transition-all duration-50 ease-linear focus:bg-white focus:border focus:border-orange-500"
                            placeholder="Enter password"
                        />
                    </div>
                </div>
                <div className="my-3">
                    <div className="relative flex gap-4 items-center my-2">
                        <div>
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                                value={"Male"}
                                className="mr-1"
                            />
                            <label htmlFor="male">Male</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                name="gender"
                                id="female"
                                value={"Female"}
                                className="mr-1"
                            />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" name="terms" id="" />
                    <Link to={'/terms'} className="hover:text-orange-500">I agree to the terms. <span className="text-red-500">*</span></Link>
                </div>

                <div className="mt-5">
                    <input
                        type="submit"
                        value="Create new account"
                        className="block bg-black cursor-pointer text-white w-full py-2 hover:bg-orange-400 transition-all ease-linear duration-200"
                    />
                </div>
                <div className=" mt-5">
                    <span>Already have account ?</span>
                    <p className="text-red-500"><Link className="text-black hover:text-orange-400">Login </Link> OR <Link className="text-black hover:text-orange-400">Reset passowrd</Link></p>
                </div>
            </form>
        </div>
    );
};

export default FormRegister;
