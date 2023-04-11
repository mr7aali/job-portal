import React, { useState } from 'react';
import './LogIN_LogOut.css';
import { BsFacebook, BsGoogle, BsLinkedin, BsTwitter } from 'react-icons/bs';




const LogINLogOut = () => {
    const [showSingUp, setShowSingUp] = useState(false);


    console.log(showSingUp);

    return (
        <div>
            <div className={`container ${showSingUp ? "sign-up-mode" : ' '}`}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Login" className="btn solid" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href=" " className="social-icon">                                   
                                    <BsFacebook/>
                                </a>
                                <a href=" " className="social-icon">
                                    <BsTwitter/>      
                                </a>
                                <a href=" " className="social-icon">
                                    <BsGoogle/>
                                </a>
                                <a href="  " className="social-icon">
                                   
                                    <BsLinkedin/>
                                </a>
                            </div>
                        </form>
                        <form action=" " className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href=" " className="social-icon">
                                    
                                    <BsFacebook/>
                                </a>
                                <a href=" " className="social-icon">
                                   
                                    <BsLinkedin/>
                                </a>
                                <a href=" " className="social-icon">
                                   
                                    <BsGoogle/>
                                </a>
                                <a href=" " className="social-icon">
                                    
                                    <BsTwitter/>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
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