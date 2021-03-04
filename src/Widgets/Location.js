import React from 'react';


const Location = () => {
    return (
        <>
            
        <div className='location-section'>
            <div className= 'p-20'>
                <div className='heading-section'>
                    <div className='d-flex'>
                        <div className='w-50'>
                            <div className='heading-location'>
                                <h2>UNMATCHED LOCATION</h2>
                                <div className="space-20">
                                    <ul className="loc-text">
                                        <li>2 Minutes Drive From Indirapuram, GZB</li>
                                        <li>5 Minutes Drive From Noida City Centre</li>
                                        <li>10 Minutes Drive From Delhi</li>
                                        <li>10 Minutes Drive From Sector – 18, Noida</li>
                                        <li>Connaught Place (40 Min)</li>
                                        <li>Hindon airport (45 Min)</li>
                                        <li>Noida Electronic City Metro Station (4 Min Walking)</li>
                                        <li>Anand Vihar Terminal Railway Station (23 Min)</li>
                                        <li>Indra Gandhi International Air port (1 H 4 Min)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='w-50'>
                            <div className='img-loction'>
                                <img src='../../image/1_location_63_noida-1024x535.jpg'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


            <style jsx>{`

                .img-loction img{
                    width: 100%;
                }
                .location-section{
                    background: #3E2558;
                }
                .loc-text li{
                    color: #fff;
                    list-style: unset;
                }
                .heading-location h2{
                    color: #FFF;
                    font-family: "DM Serif Display",Arial,sans-serif;
                    font-weight: 400;
                    font-size: 62px;
                    line-height: 1.15em;
                }
                .location-section{
                    padding: 100px 0px;
                }
                .p-20{
                    padding: 20px;
                }
                .heading-location{
                    margin: 2px 144px;
                }
                .heading-location h2{
                    margin-bottom: 20px;
                }
                .loc-text{
                    margin-left: 21px;

                }
                
            `}</style>
        </>
    )
}

export default Location