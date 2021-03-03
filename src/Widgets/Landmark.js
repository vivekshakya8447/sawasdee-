import React from 'react';


const Landmark = () => {
    return (
        <>
            
        <div className='landmark-section'>
            <div className=' d-flex'>
                <div className='landmark-colum p-90'>
                    <div className='text'>
                        <h2 className="heading-title">THE DEFINING<br />LANDMARK IN<br />NOIDA IS HERE</h2>
                    </div>
                    <div className='text-p'>
                        <h2 className='sub-heading'>Premium & Luxurious Retail Shops</h2>
                    </div>
                    <div className="space-20">
                        <p>Sawasdee JLG Galleria one of the most premium and luxurious upcoming commercial project in the business Hub of Noida and is located in sector 63 adjacent to the Electronic City Metro Station. This project is situated at Gateway to Noida While entering from NH24 and has an excellent connectivity to Indirapuram, Ghaziabad, Noida, &amp; Delhi.&nbsp;Surrounded in the vicinity of top corporate business hubs in sector 63 and 62 in Noida with working population about 1+ Lac employees within surroundings of 3-5 Kms.&nbsp;</p><p>This project has a transit population of more than 50,000+ people that passes through the project every day.</p>
                    </div>
                    <div className='btnd'><a href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjIxMzIiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D">CONNECT WITH US</a></div>
                </div>
                <div className='landmark-colum m-170'>
                    <img src='../../image/jll_galleria-768x536.jpg' />
                </div>
            </div>

            <div className='t-center'>
                <div className='image-property t-center'>
                    <img src="../../image/Swasdee_galleria_noida_63_bg.png" alt="#" />
                    <h2>Property Amenities</h2>
                </div>
            </div>
        </div>

            <style jsx>{`
            
            .image-property h2{
                color: #FFF;
                font-size: 45px;
            }
            .btnd{
                color: #fff;
                border-bottom: 1px solid #fff;
                margin-top: 20px;
                display: inline-block;
            }
            .p-90{
                padding: 90px;
            }
                .landmark-colum  img{
                    width: 100%;
                }
                .landmark-colum{
                    width: 50%;
                }
                .image-property img{
                    width: 50px;
                }
                .landmark-section{
                    background: #3e2558;
                    padding: 40px 0px;
                }
                .heading-title{
                    color: #FFF;
                    margin: 0px;
                    font-size: 62px;
                    line-height: 1.15em;
                }
                
                .space-20 p{
                    color: #D0C5DD;
                    text-align: justify;
                }
                .m-170{
                    margin-top: 170px;
                }
                .sub-heading{
                    margin: 15px 0px;
                    
                    color: #FFF;
                    font-size: 22px;
                    line-height: 1.15em;
                }
                
            `}</style>
        </>
    )
}

export default Landmark