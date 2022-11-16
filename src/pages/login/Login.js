
import React, { useContext, useState } from 'react';

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {


    const [loginError, setLoginError] = useState('')
    const { signIn,loading,user } = useContext(AuthContext)
    
    let navigate = useNavigate()
    let location = useLocation()
    console.log(loading)

    const { register, handleSubmit, formState: { errors } } = useForm();
    let from = location.state?.from?.pathname || "/";


    const handleLogin = (data) => {
        setLoginError('')

        const { email, password } = data

        signIn(email, password)
            .then(result => {

                const user = result.user
                console.log(user)
                navigate(from, { replace: true });

            })
            .catch(error => {
                setLoginError(error?.message)

            })



    }
    return (
        <div className='h-[800px] flex items-center justify-center '>
            <div className='w-96 p-7'>
                <h2 className='text-xl  text-center ' >Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input {...register("email", { required: "Email Address is required" })}
                            type="email" className="input input-bordered w-full max-w-xs" />

                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}


                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input {...register("password",
                            { required: "password is required", minLength: { value: 6, message: 'Password must be 6 character' } })}
                            type="password" placeholder="Type here" className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

                        <label className="label">
                            <span className="label-text">Forget Password ?</span>

                        </label>
                    </div>



                    <input className='btn btn-accent w-full ' value='Login' type="submit" />
                    <div>
                        {
                            loginError && <p className='text-red-500'>{loginError}</p>
                        }
                    </div>

                </form>
                <p>New to Doctors Portal? <Link className='text-secondary' to={'/signup'}>Create new account </Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full ' >CONTINUE WITH GOOGLE</button>



            </div>


        </div>
    );
};

export default Login;