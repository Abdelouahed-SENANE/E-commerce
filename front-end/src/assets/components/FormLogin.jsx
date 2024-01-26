import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FormLogin = () => {
    const [isText, setIsText] = useState("password");

    const switchType = () => {
        if (isText == "text") {
            setIsText("password");
        } else {
            setIsText("text");
        }
    };
    // ======= HandleSubmit =======
    const [isEmail , setIsEmail] = useState('');
    const [isEmailErr , setIsEmailErr] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
    }

    return (
        <div>
            <h1 className="text-[25px] lg:text-[30px] font-semibold">
                Login to your Account
            </h1>
            <form action="" onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        required
                        id=""
                        onChange={(e) => {setIsEmail(e.target.value)}}
                        className="block w-full my-2 py-2 px-3 text-[14px] bg-gray-100 outline-none transition-all duration-200 ease-linear focus:bg-white focus:border focus:border-orange-500"
                        placeholder="Enter email"
                    />
                    <div className="text-red-500">{isEmailErr}</div>
                </div>
                <div className="my-3">
                    <label htmlFor="passowrd">Password</label>
                    <div className="relative">
                        <input
                            type={isText}
                            name="password"
                            id=""
                            required
                            className="block w-full my-2 py-2 px-3 text-[14px] bg-gray-100 outline-none transition-all duration-50 ease-linear focus:bg-white focus:border focus:border-orange-500"
                            placeholder="Enter password"
                        />
                        <span
                            onClick={switchType}
                            className=" absolute  top-[50%] translate-y-[-50%] right-2 text-xl text-gray-400"
                        >
                            {isText != "text" ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input type="checkbox" name="" id="" className="mr-1" />
                        <span className="text-sm">Remember Me</span>
                    </div>
                    <div>
                      <Link to={'/forget'} className="hover:text-orange-500 text-sm">
                        Forget password
                      </Link>
                    </div>
                </div>
                <div className="mt-5">
                  <input type="submit" value="Login" className="block bg-black cursor-pointer text-white w-full py-2" />
                </div>
            </form>
        </div>
    );
};

export default FormLogin;
