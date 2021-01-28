import React from 'react';
import KuppiyaNavBar from '../KuppiyaNavBar';
import TnCBody from './TnCBody';
import TnCFooter from './TnCFooter';

function TnCPage() {
    return(
        <>
            <div className="bg-black">
                <div className="main">
                    <KuppiyaNavBar />
                    <TnCBody />
                    <TnCFooter/>
                </div>
            </div>
        </>
    )
}

export default TnCPage;