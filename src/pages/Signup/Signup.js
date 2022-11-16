import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignup = (data) => {
        console.log(data)

    }

    return (
        <div className='h-[800px] flex items-center justify-center '>
            <div className='w-96 p-7'>
                <h2 className='text-xl  text-center ' >Signup</h2>

                <form onSubmit={handleSubmit(handleSignup)} >


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Name</span>

                        </label>
                        <input  {...register("name", { required: 'Name is required' })} type="text" className="input input-bordered w-full " />
                        {errors.name?.type === 'required'
                            && <p className='text-red-500' role="alert">{errors?.name.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input {...register("email", { required: 'Email is required' })} type="email" className="input input-bordered w-full " />
                        {errors.email?.type === 'required'
                            && <p className='text-red-500' role="alert">{errors?.email.message}</p>}
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input {...register("password",
                            { required: "password is required", minLength: { value: 6, message: 'Password must be 6 character' },
                          pattern:{value:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/ ,
                        message:'Password must be strong'}  })}
                            type="password" placeholder="Type here" className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text"></span>

                        </label>
                        <input type="submit" value='Signup' className="btn btn-accent input-bordered w-full " />

                    </div>


                </form>
                <p>Already have an account? <Link className='text-secondary' to={'/login'}>Please login </Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full ' >CONTINUE WITH GOOGLE</button>



            </div>


        </div>
    );
};

export default Signup;