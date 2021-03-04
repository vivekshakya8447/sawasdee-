import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';


const Header = () => {
    return (
        <>
            <header>
                <div className='container'>
                    <div className='d-flex align-item justify-content-space'>
                        <div className='logo'>
                            <a><img src="../../image/logo-2.png" alt="logo" /></a>
                        </div>
                        <div className='menu'>
                            <ul className="nav d-flex">
                                <li  className="menu-item"><a href="#about">About</a></li>
                                <li className="menu-item"><a href="#aminities">Amenities</a></li>
                                <li className="menu-item"><a href="#floor">Floor Plan</a></li>
                                <li className="menu-item"><a href="#price">Pricelist &amp; Payment Plan</a></li>
                                <li className="menu-item"><a href="#broucher">Broucher</a></li>
                                <li className="menu-item"><a href="#gallery">Gallery</a></li>
                            </ul>
                        </div>
                        <div className='contect-header '>
                            <div className='number d-flex align-item justify-content-space'>
                                <div className='mr-20'>
                                    <span><AiOutlineWhatsApp /></span>
                                    <span className="elementor-button-text button-number">(+91)- 79064-33575</span>
                                </div>
                                <div className=''>
                                    <span><BiPhone /></span>
                                    <span className="elementor-button-text button-number">(+91)- 79064-33575</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <style jsx>{`
            
                .logo img{
                    width: 105px;
                    height: auto;
                }
                svg{
                    padding-top: 3px;
                }
                header{
                    background-color: #0B1F40;
                    color: #fff;
                    padding: 15px 0 15px 0;
                }
                .menu-item a {
                    display: inline-block;
                    font-size: 15px;
                    font-weight: 400;
                    padding: 10px 0;
                    background: transparent!important;
                    -webkit-transition: all 0.3s ease-in-out 0s;
                    -o-transition: all 0.3s ease-in-out 0s;
                    transition: all 0.3s ease-in-out 0s;
                    position: relative;
                }
                .menu .nav li{
                    display: inline-block;
                    padding: 0;
                    margin: 0;
                    vertical-align: top;
                    float: none;
                    position: relative;
                    margin-right: 15px;
                }
                .button-number{
                    padding: 12px 3px 12px;
                }
                .mr-20{
                   margin-right:20px
                 }
    
                
            `}</style>
        </>
    )
}

export default Header