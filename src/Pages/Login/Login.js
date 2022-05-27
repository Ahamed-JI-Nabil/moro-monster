import React, { useRef } from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Login = () => {


    const emailRef = useRef('')
    const passRef = useRef('')

    const handleSubmitLogin = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passRef.current.value
        console.log(email, password)
    };




    return (
        <div>
            <div>

            </div>
            <figure className="h-screen flex bg-gray-100">
                <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">

                    <div className="text-primary m-6">
                        <div className="flex items-center mt-3 justify-center">
                            <h1 className="text-2xl font-medium text-primary mt-2 mb-6">
                                Login to your account
                            </h1>
                        </div>
                        <form onSubmit={handleSubmitLogin}>
                            <label className="text-left">Email:</label>
                            <input
                                name="email"
                                type="text"
                                ref={emailRef}
                                placeholder="Email"
                                className={
                                    "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <label>Password:</label>
                            <input
                                name="password"
                                type="password"
                                ref={passRef}
                                placeholder="Password"
                                className={
                                    "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                                }
                            />
                            <div className="flex items-center mt-3 justify-center">
                                <PrimaryButton>Login</PrimaryButton>
                            </div>
                        </form>
                        <div className="flex items-center mt-3 justify-center">
                            <button className={"justify-center text-blue-500 hover:underline"}>
                                Dont Have An Account? Sign up for free
                            </button>
                        </div>
                    </div>

                </div>
            </figure>
        </div>
    );
};

export default Login;