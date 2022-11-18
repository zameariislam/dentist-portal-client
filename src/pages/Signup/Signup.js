import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const Signup = () => {

    const navigate = useNavigate()


    const [signUpError, setSignUpError] = useState('')

    const { createUser, updateUser } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignup = (data) => {

        setSignUpError('')
       
        const { email, password, name } = data
        createUser(email, password)
            .then(result => {
                const user = result.user;
                toast('User Created Successfully')

                updateUser({
                    displayName: name
                })
                    .then(() => {
                        saveUser(name, email)


                    })
                    .catch(error => console.log(error))


            })
            .catch(error => {

                setSignUpError(error.message)


            }
            )

    }

    const saveUser = (name, email) => {
        console.log('i AM SAVE USER')

        const user = {
            name,
            email
        }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)


        })
            .then(res => res.json())
            .then(data => {
                console.log('save user', data)
                navigate('/')
            })
            .catch(error => console.log(error))





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
                            {
                                required: "password is required", minLength: { value: 6, message: 'Password must be 6 character' },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                    message: 'Password must have uppercase special charcter and number'
                                }
                            })}
                            type="password" placeholder="Type here" className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>



                    <input type="submit" value='Signup' className="btn btn-accent input-bordered w-full mt-4 " />

                    <div>
                        {
                            signUpError && <p className='text-red-500' >{signUpError}</p>
                        }
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