import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    const noNamed = [
        { name: "Home" },
        { name: "Services" },
        { name: "About Us" },
        { name: "News" },
        { name: "Faq" },
        { name: "Contact Us" }

    ]
    const loanServices = [
        { name: "Car Loan" },
        { name: "Personal Loan" },
        { name: "Education Loan" },
        { name: "Business Loan" },
        { name: "Home Loan" },
        { name: "Marred Loan" }

    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <div className="col-md-6">
                        <p className="pt-5">
                            Our goal at Borrow Loan Company is to provide access to personal loans and education loan, car loan, home loan at insight competitive interest rates lorem ipsums. We are the loan provider, you can use our loan product.
                        </p>
                        <h6 className="mt-5"><FontAwesomeIcon className="icon active-icon text-success" icon={faMapMarkerAlt} /> 3895 Sycamore Road Arlington,<br /> 97812</h6>
                        <h6 className="float-right"><FontAwesomeIcon className="icon active-icon text-success" icon={faPhoneAlt} />+18654477157</h6>
                    </div>
                    <FooterCol key={3} menuTitle="Information Details" menuItems={noNamed} />
                    <FooterCol key={4} menuTitle="Our Services" menuItems={loanServices}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved By &reg;</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;