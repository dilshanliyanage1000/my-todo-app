import React from 'react';
import KuppiyaNavBar from '../KuppiyaNavBar';
import KuppiyaFooter_cu from './KuppiyaFooter_cu';
import KuppiyaForms from './KuppiyaForms';

function KuppiyaContactUs() {
    return(
        <>
            <body className="bg-black">
                <div className="main">
                    <KuppiyaNavBar />
                    <div className="spacer"></div>
                    <div className="container mt-5 p-5 w90 flex-grow-1 mb-5">
                        <div className="row">
                            <KuppiyaForms />
                        </div>
                    </div>
                    <div className="spacer "></div>
                    <KuppiyaFooter_cu />
                </div>
            </body>
        </>
    )
}

export default KuppiyaContactUs;