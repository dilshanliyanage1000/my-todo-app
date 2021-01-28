import React from 'react';
import CompanyImg from '../../assets/img/icons/Company-01.png';
import AddressImg from '../../assets/img/icons/Address-01.png';
import ContactImg from '../../assets/img/icons/Contact-01.png';
import EmailImg from '../../assets/img/icons/Email-01.png';

function KuppiyaForms() {
    return(
        <>
        <div className="col-md-6">
            <h3>Any Questions?</h3>
            <hr />
            <form action="#">
                <div className="mt-3">
                    <label for="name">
                        <h4>Your Name</h4>
                    </label>
                    <input type="text" className="form-control" id="name" required style={{border:"none"}} />
                    <div className="invalid-feedback">Please enter your name</div>
                </div>
                <div className="mt-3">
                    <label for="email">
                        <h4>Email</h4>
                    </label>
                    <input type="email" className="form-control" id="email" required style={{border:"none"}} />
                    <div className="invalid-feedback">
                        Please enter a valid email address.
                    </div>
                </div>
                <div className="mt-3">
                    <label for="message">
                        <h4>Message</h4>
                    </label><br />
                    <textarea name="message" id="msg_cont" className="form-control" rows="6" width="100%" required style={{border:"none"}}></textarea>
                    <div className="invalid-feedback">Please enter a valid text</div>
                </div>
                <br />
                <button className="btn btn-lg bg-or float-right" type="submit">
                    <p style={{margin:"0px"}}>Send</p>
                </button>
            </form>
        </div>

        <hr />

        <div className="col-md-6 mt-2  order-first">
            <h3>Contact Us</h3>
            <hr />
            <div className="d-flex justify-content-start align-items-start">
                <img style={{width:"50px"}} src={CompanyImg} alt="CompanyImg" />
                <div className="mt-2">
                    <h4>Rathnapura Office</h4>
                    <p>18/96, Colombo Road,<br />Kuruwita</p>
                </div>
            </div>
            <div className="d-flex justify-content-start align-items-start">
                <img style={{width:"50px"}} src={AddressImg} alt="AddressImg" />
                <div className="mt-2">
                    <h4>Rathnapura Studio</h4>
                    <p>72/A, New Shopping Complex,<br />Newtown, Rathnapura</p>
                </div>
            </div>
            <div className="d-flex justify-content-start align-items-start">
                <img style={{width:"50px"}} src={AddressImg} alt="AddressImg" />
                <div className="mt-2">
                    <h4>Malabe Office & Studio</h4>
                    <p>18/96, Colombo Road,<br />Kuruwita</p>
                </div>
            </div>
            <div className="d-flex justify-content-start align-items-start">
                <img style={{width:"50px"}} src={ContactImg} alt="ContactImg" />
                <div className="mt-2">
                    <h4>Contact Number</h4>
                    <p>+94 11 241 3146,<br />+94 71 107 2690</p>
                </div>
            </div>
            <div className="d-flex justify-content-start align-items-start">
                <img style={{width:"50px"}} src={EmailImg} alt="EmailImg" />
                <div className="mt-2">
                    <h4>Email</h4>
                    <p>ask@alkuppiya.lk</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default KuppiyaForms;