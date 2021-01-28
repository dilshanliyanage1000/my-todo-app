import React from 'react'
import DesktopImg from '../../assets/img/stores/desktop.png';
import PlayStoreImg from '../../assets/img/stores/play_store.png';
import AppStoreImg from '../../assets/img/stores/app_store.png';
import HuaweiStoreImg from '../../assets/img/stores/huawei_store.png';

function KuppiyaDownloadNow() {
    return(
        <>
            <div className="col-lg px-4 ">
                <h3><strong>දැන්ම Download කරගන්න</strong></h3>
                <div className="row ">
                    <div className="col-6 ">
                        <p> Computers</p>
                        <img style={{display:"block"}} src={DesktopImg} alt="desktop_icon " className="store_badge " />
                    </div>
                    <div className="col-6 ">
                        <p>Android Devices</p>
                        <img style={{display:"block"}} src={PlayStoreImg} alt="playstore_icon " className="store_badge " />
                    </div>
                </div>
                <br />
                <div className="row ">
                    <div className="col-6 ">
                        <p>Apple Devices</p>
                        <img style={{display:"block"}} src={AppStoreImg} alt="app_store_icon " className="store_badge " />
                    </div>
                    <div className="col-6 ">
                        <p>Huawei Devices</p>
                        <img style={{display:"block"}} src={HuaweiStoreImg} alt="hstore_icon " className="store_badge " />
                    </div>
                </div>
            </div>
        </>
    )
}

export default KuppiyaDownloadNow;