import React from 'react';


const Banner = () => {
    return (
        <>
            
        <div className='banner-section'>
            <div className='container'>
                <div className='heading t-center'>
                    <h2>MOST PREMIUM COMMERCIAL</h2>
                    <div>
                    <span>STARTING 1cr+</span>
                    <br/>
                    <span>
                    Premium Retail Shop with 30-70 Plan
                    </span>
                    </div>
                    <div className="button-connect">Let's Connect</div>
                </div>
                

            </div>
        </div>


            <style jsx>{`
            
                .banner-section{
                    background-image url(../../image/22.jpg)
                }
                .heading span{
                    font-size: 17px;
                    line-height: 1.4;
                    color:#fff;
                }
                .heading {
                    padding: 220px 0px;
                }
                .heading span:first-child{
                    display: block;
                }
                .heading h2{
                    font-size: 35px;
                    font-weight: 700;
                    line-height: 1;
                    margin-bottom: 30px;
                    color: #fff;
                }
                .button-connect{
                    display: inline-block;
                    line-height: 1;
                    background: transparent;
                    font-size: 15px;
                    padding: 12px 24px;
                    -webkit-border-radius: 3px;
                    border-radius: 3px;
                    color: #fff;
                    fill: #fff;
                    border: 2px solid #fff;
                    margin: 30px;
                    text-align: center;
                }
                
            `}</style>
        </>
    )
}

export default Banner