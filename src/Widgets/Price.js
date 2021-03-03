import React from 'react';


const Price = () => {
    return (
        <>
            
        <div className='price-section'>
            <div className='container'>
            <div className='heading'>
                <h2>Pricing & Plan</h2>
            </div>
            </div>
            <div className='bg-dark'>
                <div className='container'>
                    <div className='d-flex'>
                        <div className='w-50 border-f'>
                            <h2 className="heading-title  m-20">LOWER <br />GROUND FLOOR</h2>
                            <h2 className="timeing m-20">30:70 Payment Plan</h2>
                            <div className="space-20 text-floor m-20">
                                <p>Type: &nbsp;Lower Ground Floor</p>
                                <p>Size :499 – 1935 SQ. FT.</p>
                                <p><strong>Starting Price :₹ 1.74 CR*&nbsp;</strong></p>
                            </div>
                            <div className='floor-button-ripper d-flex'>
                                <div className='button'>
                                    <a><span>Get Price In Detail</span></a>
                                </div>
                                <div className='button'>
                                    <a><span>Get Price In Detail</span></a>
                                </div>
                            </div>
                        </div>
                        <div className='w-50 border-f'>
                            <h2 className="heading-title ">GROUND <br /> FLOOR</h2>
                            <h2 className="timeing m-20">30:70 Payment Plan</h2>
                            <div className="space-20 text-floor m-20">
                                <p>Type: &nbsp;Lower Ground Floor</p>
                                <p>Size :499 – 1935 SQ. FT.</p>
                                <p><strong>Starting Price :₹ 1.74 CR*&nbsp;</strong></p>
                            </div>
                            <div className='floor-button-ripper d-flex'>
                                <div className='button'>
                                    <a><span>Get Price In Detail</span></a>
                                </div>
                                <div className='button'>
                                    <a><span>Get Price In Detail</span></a>
                                </div>
                            </div>
                        </div>
                    </div>       
                    <div className='d-flex'>
                        <div className='image-chang'>
                            <img src='../../image/WhatsApp-Image-2021-02-09-at-11.43.36-AM-4.jpeg'/>
                        </div>
                        <div className='image-chang'>
                            <img src='../../image/WhatsApp-Image-2021-02-09-at-11.43.36-AM-4.jpeg'/>
                        </div>
                    </div>
                    <div className='ripper-connet-now t-center'>
                        <div className='squarebox t-center'>
                            <img src='../../image/atul_jlg.jpg'/>
                           <span> CONNECT <br/>NOW</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


            <style jsx>{`
            
                .ripper-connet-now{
                    position: relative;
                    bottom: 60px;
                }
                .squarebox img{
                    width: 70px;
                    position:relative;
                    bottom: 25px;
                    border-radius: 59px;
                }
                .squarebox{
                    background: #3e2558;
                    color: #fff;
                    margin:0 auto;
                    width: 150px;
                    border-style: solid;
                    border-width: 4px 4px 4px 4px;
                    border-color: #E05757;
                }
                .heading-title{
                    color: #FFF;
                    font-size: 62px;
                    line-height: 1.15em;
                }
                .heading{
                    text-align: center;
                }
                .heading{
                    padding: 80px 0px 36px;
                }
                .border-f{
                    border-style: solid;
                    border-width: 2px 2px 2px 2px;
                    border-color: #bb9b43;
                    transition: background 0.3s,border 0.3s,border-radius 0.3s,box-shadow 0.3s;
                    margin: 0px 0px 0px 11px;
                    padding: 15px 15px 25px 025px;
                }
                .bg-dark{
                    background-color: #3E2558;
                    padding: 30px 0;
                }
                .m-20{
                    margin-bottom: 20px;
                }
                .space-20 P{
                    margin-bottom: 20px;
                }
                .image-chang img{
                    width: 100%;
                }
                .image-chang{
                    margin-right: 15px;
                }
                .floor-button-ripper .button{
                    display: inline-block;
                    line-height: 1;
                    background-color: #818a91;
                    font-size: 15px;
                    padding: 12px 24px;
                    -webkit-border-radius: 3px;
                    border-radius: 3px;
                    color: #fff;
                    fill: #fff;
                    margin-right: 30px;
                    text-align: center;
                    -webkit-transition: all .3s;
                    -o-transition: all .3s;
                    transition: all .3s;
                    background-color: #02010100;
                    border-style: solid;
                    border-width: 2px 2px 2px 2px;
                    border-color: #bb9b43;
                    border-radius: 0 0 0 0;
                }
                .timeing{
                    color: #bb9b43;
                    font-size: 22px;
                    line-height: 1.15em;
                }
                .price-section{
                    background-image: url(../../image/home7_bg.png)
                }
                .text-floor{
                    color: #fff;
                }
                bg-dark{
                    backgorund: #3E2558;
                }
                .heading h2{
                    color: #FFF;
                    font-size: 45px;
                }
                
            `}</style>
        </>
    )
}

export default Price