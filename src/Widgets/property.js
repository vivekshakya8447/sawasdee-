import React from 'react';


const Property = () => {
    return (
        <>
            
        <div className='property-section'>
            <div className='container t-center'>
                <div className='image-property'>
                    <img src="../../image/Swasdee_galleria_noida_63_bg.png" alt="#" />
                </div>
                <div className='property-text'>
                    <h2>89 Signature Retail Shops</h2>
                </div>
                <div className='property-text'>
                    <h2>Next To Electronic City Metro In Sector - 63, Noida</h2>
                </div>
            </div>
       </div>


            <style jsx>{`

                .property-text h2{
                    font-family: "DM Serif Display",Arial,sans-serif;
                    color: #FFF;
                    font-weight: 400;
                    font-size: 45px;
                    margin: 0px;
                    padding 0px;
                    line-hight: 1px;
                }
                .image-property img{
                    width: 50px;
                    margin: 20px;
                }
                .property-section{
                    background: #3e2558;
                }
                
            `}</style>
        </>
    )
}

export default Property