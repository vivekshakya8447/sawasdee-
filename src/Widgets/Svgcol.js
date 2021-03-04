import React from 'react';


const Svgcol = () => {
    return (
        <>
            
            <div className='svg-section'>
                <div className='conatiner'>
                    <div className='d-flex justify-c-s m-40'>
                        <div className='svg-image'>
                            <div className=''>
                                <img src='../../image/screenshot1.png' />
                            </div>
                            <span>Greek Doric<br/> Style Structure</span>
                        </div>
                        <div className='svg-image'>
                            <div className=''>
                                <img src='../../image/screenshot2.png' />
                            </div>
                            <span>4 Star Hotel <br/> above the Retail Complex</span>
                        </div>
                        <div className='svg-image'>
                            <div>
                                <img src='../../image/screenshot3.png' />   
                            </div>
                            <span>Adjacent to <br/>Electronic City Metro</span>
                        </div>
                        <div className='svg-image'>
                            <div>
                                <img src='../../image/screenshot4.png' />
                            </div>
                            <span>18 Feet <br/> Celling Height</span>
                        </div>
                    </div>
                    <div className='d-flex justify-c-s'>
                        <div className='svg-image'>
                            <div className=''>
                                <img src='../../image/screenshot5.png' />
                            </div>
                            <span>Greek Doric<br/> Style Structure</span>
                        </div>
                        <div className='svg-image'>
                            <div className=''>
                                <img src='../../image/screenshot6.png' />
                            </div>
                            <span>4 Star Hotel <br/> above the Retail Complex</span>
                        </div>
                        <div className='svg-image'>
                            <div>
                                <img src='../../image/screenshot7.png' />   
                            </div>
                            <span>Adjacent to <br/>Electronic City Metro</span>
                        </div>
                        <div className='svg-image'>
                            <div>
                                <img src='../../image/screenshot8.png' />
                            </div>
                            <span>18 Feet <br/> Celling Height</span>
                        </div>
                    </div>
                </div>
            </div>


            <style jsx>{`
            
            .svg-image{
                border-radius 50px;
                text-align: center;
                color: #fff;
            }
            .svg-image img{
                padding: 20px;
            }
            .justify-c-s{
                justify-content: space-around;
            }
            .svg-section{
                background-image: url(../../image/home7_bg.png);
                padding: 100px 0px;
            }
            .m-40{
                margin-bottom: 40px;
            }
            `}</style>
        </>
    )
}

export default Svgcol