import React, { useState } from 'react';
import './LogIN_LogOut.css';
import { BsFacebook, BsGoogle, BsLinkedin, BsLock, BsTwitter } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai'
import { SiMinutemailer } from 'react-icons/si'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { createUser, singInUser } from '../../../features/auth/authSlice';


const LogINLogOut = () => {

    const [showSingUp, setShowSingUp] = useState(false);
    const { reset, watch, handleSubmit, register } = useForm();
    console.log(watch('username_logIn'));

    const dispatch = useDispatch()

    const handlaSingUp = (data) => {
        
        dispatch(createUser({ email: data.email_sinUp, password: data.password_sinUp }))

    }
      const handleSingIn =(data)=>{
        console.log("singin", data.email_SingIn);
        console.log("singin",  data.password_SingIn);
        dispatch(singInUser({ email: data.email_SingIn, password: data.password_SingIn }))
      }
    return (
        <div >
            <div className={`containerr  ${showSingUp ? "sign-up-mode" : ' '}`}>
                <div className="forms-containerr">
                    <div className="signin-signup">
                        <form onSubmit={handleSubmit( handleSingIn)} action="#" className="sign-in-form">
                            <h2 className="title">Sign in</h2>



                            <div className="input-field">
                                {/* <i className="fas fa-user"></i> */}
                                <AiOutlineUser className='icon' />
                                <input {...register('email_SingIn')} type="email" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                {/* <i className="fas fa-lock"></i> */}
                                <BsLock className='icon' />
                                <input {...register('password_SingIn')} type="password" placeholder="Password" />
                            </div>



                            <input type="submit" value="Login" className="btn solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href=" " className="social-icon">
                                    <BsFacebook />
                                </a>
                                <a href=" " className="social-icon">
                                    <BsTwitter />
                                </a>
                                <a href=" " className="social-icon">
                                    <BsGoogle />
                                </a>
                                <a href="  " className="social-icon">

                                    <BsLinkedin />
                                </a>
                            </div>
                        </form>



                        <form onSubmit={handleSubmit(handlaSingUp)} className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">

                                <AiOutlineUser className='icon' />
                                <input {...register('username_sinIn')} type="text" placeholder="Username" required />
                            </div>
                            <div className="input-field">
                                <SiMinutemailer className='icon' />
                                <input {...register('email_sinUp')} type="email" placeholder="Email" required />
                            </div>
                            <div className="input-field">
                                <BsLock className='icon' />
                                <input {...register('password_sinUp')} type="password" placeholder="Password" required />
                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href=" " className="social-icon">

                                    <BsFacebook />
                                </a>
                                <a href=" " className="social-icon">

                                    <BsLinkedin />
                                </a>
                                <a href=" " className="social-icon">

                                    <BsGoogle />
                                </a>
                                <a href=" " className="social-icon">

                                    <BsTwitter />
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-containerr">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button onClick={() => setShowSingUp(!showSingUp)} className="btn transparent" id="sign-up-btn">
                                Sign up
                            </button>
                        </div>
                        <img src="img/log.svg" className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button onClick={() => setShowSingUp(!showSingUp)} className="btn transparent" id="sign-in-btn">
                                Sign in
                            </button>
                        </div>
                        <img src="img/register.svg" className="image" alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default LogINLogOut;