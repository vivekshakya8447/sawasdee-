import React from 'react';


const gallery = () => {
    return (
        <>
            
        <div className='gallery-section'>
            <div className='container'>
                <div className='heading-gallery t-center'>
                    <img src="../../image/Swasdee_galleria_noida_63_bg.png" alt="#" />  
                    <h2>View Our Gallery</h2>
                </div>
            </div>
            <div className='gallery-ripper d-flex'>
                <div className='colum-gallery'>
                    <div className='image-gallery-area gallery-item  ml-15'>
                        <img src ='../../image/a1-768x430.jpg' />
                    </div>
                </div>
                <div className='colum-gallery'>
                    <div className='image-gallery-area gallery-item'>
                        <img src ='../../image/a2-768x432.jpg' />
                    </div>
                </div>
                <div className='colum-gallery'>
                    <div className='image-gallery-area gallery-item'>
                        <img src ='../../image/a3-768x488.jpg' />
                    </div>
                </div>
            </div>
            <div className='gallery-ripper d-flex'>
                <div className='colum-gallery'>
                    <div className='image-gallery-area gallery-item  ml-15'>
                        <img src ='../../image/a4-768x520.jpg' />
                    </div>
                </div>
                <div className='colum-gallery'>
                    <div className='image-gallery-area gallery-item'>
                        <img src ='../../image/a5-768x488.jpg' />
                    </div>
                </div>
                <div className='colum-gallery'>
                    <div className='image-gallery-area gallery-item'>
                        <img src ='../../image/a6-768x561.jpg' />
                    </div>
                </div>
            </div>
        </div>


            <style jsx>{`
            
                .image-gallery-area img{
                    width: 100%;
                }
                .ml-15{
                    margin-left: 15px
                }
                .gallery-item {
                    padding: 0 15px 15px 0;
                }
                .heading-gallery img{
                    width: 50px;
                }
                .heading-gallery h2{
                    color: #FFF;
                    font-size: 45px;
                }
                .gallery-section{
                   padding: 100px 0px;
                }
                .gallery-item img{
                    border-radius: 15px;
                }
                .gallery-section{
                    background: #3E2558;
                }
                .
                
            `}</style>
        </>
    )
}

export default gallery