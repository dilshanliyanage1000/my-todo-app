import React from 'react';
import KuppiyaNavBar from '../KuppiyaNavBar';
import PrivacyPolicyBody from './PrivacyPolicyBody';
import PrivacyPolicyFooter from './PrivacyPolicyFooter';

function PrivacyPolicyPage() {
    return(
        <>
            <div className="bg-black">
                <div className="main">
                    <KuppiyaNavBar />
                    <PrivacyPolicyBody />
                    <PrivacyPolicyFooter />
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicyPage;