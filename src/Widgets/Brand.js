import React from 'react';
import { FaDownload } from 'react-icons/fa';


const Brand = () => {
    return (
        <>
            
        <div className='brand-section'>
            <div className='container t-center'>
                <div className='heading-brand'>
                    <h2>Upcoming Brands</h2>
                </div>
                <div className='col-brand d-flex justify-content-space'>
                    <div className='brand-image'>
                        <img src='../../image/l1.png' />
                    </div>
                    <div className='brand-image'>
                        <img src='../../image/l2.png' />
                    </div>
                    <div className='brand-image'>
                        <img src='../../image/l3.png' />
                    </div>
                    <div className='brand-image'>
                        <img src='../../image/l4.png' />
                    </div>
                    <div className='brand-image'>
                        <img src='../../image/l5.png' />
                    </div>
                    <div className='brand-image'>
                        <img src='../../image/l6.png' />
                    </div>
                </div>
                <div className='button-brand'>
                    <div className='button'>
                        <a><span><FaDownload/>Connect With Executive</span></a>
                    </div>
                </div>
            </div>
            <div className='button-2-ripper d-flex justify-content-between'>
                <div className='button-brand'>
                    <div className='button'>
                        <a><span><FaDownload/>Connect With Executive</span></a>
                    </div>
                </div>
                <div className='button-brand'>
                    <div className='button'>
                        <a><span><FaDownload/>Connect With Executive</span></a>
                    </div>
                </div>
            </div>
        </div>


            <style jsx>{`
            
                .brand-image img{
                    width: 100%;
                }
                .justify-content-between{
                    justify-content: space-around;
                }
                .brand-image {
                    width 100px;
                }
                .heading-brand h2{
                    font-size: 45px;
                    color:#fff;
                    font-family: "DM Serif Display",Arial,sans-serif;
                    font-weight: 400;
                }
                .heading-brand{
                    padding: 100px 0px 40px;
                }
                
                .button-brand{
                    margin: 40px 0px 70px;
                }
                .brand-section{
                    background-color: #371F51;
                }
                .button-brand  a{
                    background-color: #02010100;
                    border-style: solid;
                    padding: 10px 15px; 
                    border-width: 2px 2px 2px 2px;
                    border-color: #bb9b43;
                    border-radius: 0 0 0 0;
                }
                .button-brand span{
                    color: #fff;
                }
                
                
            `}</style>
        </>
    )
}

export default Brand