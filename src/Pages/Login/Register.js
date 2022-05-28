import React, { useRef } from 'react';
import { Link, useLocation, useMatch, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import PrimaryButton from '../Shared/PrimaryButton';
import Loading from '../Shared/Loading'
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';


const Register = () => {


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating] = useUpdateProfile(auth);

    const match = useMatch('/signup')

    const nameRef = useRef('')
    const emailRef = useRef('')
    const passRef = useRef('')



    const handleSubmitRegister = async event => {
        event.preventDefault()
        const displayName = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName })
    };


    const navigate = useNavigate()


    let location = useLocation();

    let from = location.state?.from?.pathname || "/";


    if (user) {
        // toast.success('Account created successfully!!!')
        alert('Account created successfully!!!')
        navigate(from, { replace: true });
    }
    if (error) {
        alert('Could not create your account at this time! Please Try Again Later!')
        // Toast is not working properly
        // toast.error('Could not create your account at this time! Please Try Again Later!')
    }
    if (loading) {
        return <Loading></Loading>
    }


    return (
        <figure className="h-screen flex bg-gray-100">
            <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">

                <div className="text-primary m-6">
                    <div className='text-center mb-3'>
                        <Link className={match ? '' : ' text-gray-50 '} to='/login'>LOGIN</Link>
                        <Link className={match ? 'bg-rose-800 text-gray-50 px-10 py-2 rounded-lg mt-4 ml-2 hover:bg-rose-600' : ''} to='/signup'>REGISTER</Link>
                    </div>
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
                    <div>
                        <div className="divider font-bold visible ">OR</div>
                        <SocialLogin></SocialLogin>
                    </div>
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