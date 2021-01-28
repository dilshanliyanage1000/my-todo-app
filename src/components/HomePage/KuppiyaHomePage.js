import React from 'react';
import KuppiyaLogoSpinner from './KuppiyaLogoSpinner';
import KuppiyaNavBar from '../KuppiyaNavBar';
import KuppiyaMainBanner from './KuppiyaMainBanner';
import KuppiyaDownloadNow from './KuppiyaDownloadNow';
import KuppiyaRegister from './KuppiyaRegister';
import KuppiyaFooter from './KuppiyaFooter';

function KuppiyaHomePage() {
    return(
        <>
            {/* <KuppiyaLogoSpinner /> */}
            <div className=" main ">
                <KuppiyaNavBar />
                <div className="px-2 black mb-auto f-height ">
                    <KuppiyaMainBanner />
                    <div className=" " style={{textAlign: "left"}}>
                    <div className="row main_cont ">
                        <div className="col-lg-1 "></div>
                        <KuppiyaDownloadNow />
                        <div className="col-1 middle "></div>
                        <KuppiyaRegister />
                        <div className="col-lg-1 "></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row f-width pad-lr " style={{margin:"0px"}}>
            <KuppiyaFooter />
            </div>
        </>
    )
}

export default KuppiyaHomePage;