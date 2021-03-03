import React from 'react'
import { ImFacebook } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import {FaPinterestP } from 'react-icons/fa';
import { GrGoogle } from 'react-icons/gr';




const Footer = () => {
    return (
        <>
            <footer>
                <div className='container-fluid'>
                    <div className='d-flex align-item justify-content-space'>
                        <div className='p-15'>
                            <div className="elementor-heading-title">© Sawasdee JLG Galleria. All Rights Reserved 2021. Galaxy Group</div>
                        </div>
                        <div className='widget-socials p-15'>
                            <ul className='d-flex'>
                                <li><a><ImFacebook/></a></li>
                                <li><a><AiOutlineTwitter /></a></li>
                                <li><a><AiFillInstagram /></a></li>
                                <li><a><FaPinterestP /></a></li>
                                <li><a><GrGoogle /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='footer-text'>
                    <div>
                        <h2><a href="https://sawasdee-jlg-galleria.com/disclaimer/" target="_blank">Disclaimer &amp; Privacy Policy</a></h2>
                    </div>
                    <div className="elementor-widget-container">
                        <div className="elementor-text-editor elementor-clearfix">
                            <p>RERA No. – UPRERAPRJ320171</p>
                            <p>All rights for logo &amp; images are reserved to developer. Thank you for visiting our website. This disclaimer (“Disclaimer”) is applicable to this website and all microsites and websites owned by us. By using or accessing this website you agree with the Disclaimer without any qualification or limitation. This website is in the process of being updated. By accessing this website, the viewer confirms that the information including brochures and marketing collaterals on this website are solely for informational purposes only and the viewer has not relied on this information for making any booking/purchase in any project of the Company. Nothing on this website, constitutes advertising, marketing, booking, selling or an offer for sale, or invitation to purchase a unit in any project by the company. The company is not liable for any consequence of any action taken by the viewer relying on such material/information on this website.</p>
                    </div>
                    </div>
                </div>
            <style jsx>{`
                .footer-text{
                    background-color: #3e2558;
                    color: #bb9b43;
                    padding: 10px;
                    text-align: center;
                }
                .footer-text h2{
                    font-size: 15px;
                }
                .footer-text p{
                    font-size: 10px;
                    line-height: 1.2em;
                }

                .widget-socials a {
                    width: 50px;
                    padding: 15px;
                    height: 50px;
                    border-radius: 50px;
                    line-height: 50px;
                }
                .widget-socials a:hover {
                    color: #FFF;
                    background-color: #2F1844;
                }
                footer{
                    background-color: #371F51;
                    color: #fff;
                    padding: 7px 0 7px 0;
                }
            `}</style>
        </>
    )
}


export default Footer