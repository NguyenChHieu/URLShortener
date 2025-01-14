import { useForm } from "react-hook-form"
import TextField from "./TextField";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/api";
import {useStoreContext } from "../context/ContextApi";

const LoginPage = () => {
    const navigate = useNavigate()
    const [loader,setLoader] = useState(false)
    const {setToken} = useStoreContext();

    const {
        register,
        handleSubmit,
        reset,
        formState:{errors}
    } = useForm({
        defaultValues:{
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    })

    const loginHandler = async (data) => {
        setLoader(true)
        try{
            const {data: response} = await api.post(
                "/api/auth/public/login",
                data
            )
            // Store the token in local storage
            console.log("Token received: ", response.token)
            setToken(response.token)
            localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token))
            toast.success("Login Successful!")

            reset()
            navigate("/dashboard")
        } catch (error){
            console.log(error)
            toast.error("Login Failed!")
        } finally{
            setLoader(false)
        }
    };
  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
        <form onSubmit={handleSubmit(loginHandler)}
            className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md">
                <h1 className="text-center font-sans text-btnColor font-bold lg:text-3xl text-2xl">
                    Login
                </h1>

                <hr className="mt-2 mb-5 text-black"/>
                
                <div className="flex flex-col gap-3">
                    <TextField
                        label="Username"
                        required
                        id="username"
                        type='text'
                        message="*Username is required"
                        placeholder="What's your name?"
                        register={register}
                        errors={errors}
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <TextField
                        label="Password"
                        required
                        id="password"
                        type='text'
                        message="*Password is required"
                        placeholder="Shhhh..."
                        register={register}
                        errors={errors}
                    />
                </div>

                <button
                    type='submit'
                    className="bg-customRed font-semibold text-white bg-custom-gradient w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-s my-3">
                    {loader ? "Loading...": "Login"}
                </button>

                <p className="text-center text-sm text-slate-700 mt-6">
                    Not a member?
                    <Link className="font-semibold underline hover:text-black" to='/register'>
                        <span className="text-btnColor ml-1">Sign Up</span>
                    </Link>
                </p>
        </form>
    </div>
  )
}
export default LoginPage