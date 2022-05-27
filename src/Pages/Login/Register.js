import React, { useRef } from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Register = () => {


    const nameRef = useRef('')
    const emailRef = useRef('')
    const passRef = useRef('')



    const handleSubmitRegister = event => {
        event.preventDefault()
        // const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;

        console.log(email, password);
    };


    return (
        <figure className="h-screen flex bg-gray-100">
            <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">

                <div className="text-primary m-6">

                    <div className="flex items-center mt-3 justify-center">
                        <h1 className="text-2xl  font-medium text-primary mt-2 mb-6">
                            Create A New Account
                        </h1>
                    </div>
                    <form onSubmit={handleSubmitRegister}>
                        <label className="text-left">Username:</label>
                        <input
                            name="username"
                            type="text"
                            ref={nameRef}
                            placeholder="Username"
                            className={
                                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            }
                        />
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
                        <label>Confirm Password:</label>
                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            className={
                                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            }
                        />
                        <div className="flex items-center mt-3 justify-center">
                            <PrimaryButton>SignUp</PrimaryButton>
                        </div>
                    </form>
                    <div className="flex items-center mt-3 justify-center">
                        <button className={"justify-center text-blue-500 hover:underline"}>
                            Already Have An Account? Please Sign In.
                        </button>
                    </div>
                </div>

            </div>
        </figure>
    );
};

export default Register;