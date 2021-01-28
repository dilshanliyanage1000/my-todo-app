import React from 'react';
import Logo from '../../assets/img/logo.png'
import Loader from '../../assets/img/ajax_loader.gif'

function KuppiyaLogoSpinner() {
    return (
        <>
            <div id="overlay">
                <div className="content">
                    <div className="blink-1 ">
                        <img src={Logo} alt="alkuppiya_logo" style={{width:"250px"}} />
                    </div>
                    <br />
                    <img src={Loader} style={{width:"50px"}} />
                </div>
            </div>
        </>
    )
}

export default KuppiyaLogoSpinner;