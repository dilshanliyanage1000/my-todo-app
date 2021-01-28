import React from 'react';
import KuppiyaLiveImg from '../../assets/img/Kuppiya_Live_3.png';
import FilesIcon from '../../assets/img/icons/Files-01.png';

function KuppiyaRegister() {
    return(
        <>
            <div className="col-lg py-3 mt-2 ">
                <hr />
                <div className="card border-light black ">
                    <div className="p-3 ">
                        <div className="row ">
                            <div className="col-md-5 " style={{textAlign:"center"}}>
                                <img src={KuppiyaLiveImg} style={{display:"inline",width:"70%"}} id="kuppiya_live_logo " />
                                <hr />
                                <div id="regBtn">
                                   <button className="btn btn-danger" style={{backgroundColor:"#e10000!important", width:"160px"}}>
                                        <div className="row" style={{marginLeft:"1px"}}>
                                            <img src={FilesIcon} className="s-logos " alt="Files Icon" />&nbsp;
                                            <p>Register Free</p>
                                        </div>
                                    </button> 
                                </div>
                                
                            </div>
                            <div className="col-md-7 mt-2 " style={{textAlign:"justify"}}>
                                <h4><strong>ඹබත් ගුරුවරයෙක්ද?</strong></h4>
                                <p style={{fontSize:"18px"}}>
                                    කුප්පිය Live හරහා Online දේශන පැවත්වීම සදහා නොමිලේම ලියාපදිංචි වන්න
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KuppiyaRegister;