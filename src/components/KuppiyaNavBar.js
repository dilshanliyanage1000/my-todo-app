import React from 'react';
import KuppiyaLogo from '../assets/img/logo.png'
import FacebookLogo from '../assets/img/icons/b-facebook.png';
import InstagramLogo from '../assets/img/icons/b-instagram.png';
import YoutubeLogo from '../assets/img/icons/b-youtube.png';
import {
    Link
  } from "react-router-dom";

function KuppiyaNavBar() {
    return (
        <>
            <div className="d-flex align-items-start flex-column main white " style={{overflow:"hidden",position:"fixed", width:"100%", top:"0",zIndex:"1000"}}>
                <div className="f-width py-1 pad-lr ">
                    <div className="d-flex justify-content-between align-items-center navm ">
                        <Link to="/">
                            <img src={KuppiyaLogo} className="nav_logo " alt="alkuppiya_logo " />
                        </Link>
                        <nav className="nave " style={{color:"black"}}>
                            <Link to="/contactus" className="btn-cnt ">Contact Us</Link>
                            <a><img src={FacebookLogo} className="s-logos " alt="facebook_icon " /></a>
                            <a><img src={InstagramLogo} className="s-logos " alt="instagram_icon " /></a>
                            <a><img src={YoutubeLogo} className="s-logos " alt="youtube_icon " /></a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KuppiyaNavBar;