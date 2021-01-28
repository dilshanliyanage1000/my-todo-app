import React from 'react';
import CrayonsImg from '../../assets/img/logos/Crayons.png';
import KuppiyaVODImg from '../../assets/img/logos/Kuppiya_VOD_3.png';
import KuppiyaLiveImg from '../../assets/img/logos/Kuppiya_Live_3.png';
import KuppiyaStoreImg from '../../assets/img/logos/Kuppiya_Store_3_3.png';
import TutionHandiyaImg from '../../assets/img/logos/Tution_handiya_logo.png';
import SquadEkaImg from '../../assets/img/logos/Squad_Eka_3.png';
import AfterAlsImg from '../../assets/img/logos/After_ALs_3.png';
import {
    Link
  } from "react-router-dom";

function TnCFooter() {
    return(
        <>
            <div className="row f-width mt-5" style={{margin:"0px"}}>
                <div className="col-lg-5 float-left  bottom-col">
                    <div className="ml-5">
                        <img src={CrayonsImg} className="clogo" alt="CrayonsImg" srcSet="" />
                    </div>
                </div>

                <div className="col-lg-2  bottom-col" style={{textAlign: "center", margin:"auto"}}>
                    <Link to="/tandc" style={{color:"white"}}>Terms and Conditions</Link>
                    <br />
                    <Link to="/privacypolicy" style={{color:"white"}}>&copy;&nbsp;Privacy Policy</Link>
                </div>

                <div className="col-lg-5 bottom-col" style={{padding:"0px"}}>
                    <div className="blogos row">

                        <a href="#" style={{marginLeft:"auto"}}>
                            <img src={KuppiyaVODImg} className="logo" alt="KuppiyaVODImg" srcSet="" />
                        </a>

                        <a href="#">
                            <img src={KuppiyaLiveImg} className="logo" alt="KuppiyaLiveImg" srcSet="" />
                        </a>

                        <a href="#">
                            <img src={KuppiyaStoreImg} className="logo" alt="KuppiyaStoreImg" srcSet="" />
                        </a>

                        <a href="#">
                            <img src={TutionHandiyaImg} className="logo" alt="TutionHandiyaImg" srcSet="" />
                        </a>

                        <a href="#">
                            <img src={SquadEkaImg} className="logo" alt="SquadEkaImg" srcSet="" />
                        </a>
                        <a href="#" style={{marginRight:"auto"}}>
                            <img src={AfterAlsImg} className="logo" alt="AfterAlsImg" srcSet="" />
                        </a>

                    </div>

                </div>
            </div>
        </>
    )
}

export default TnCFooter;