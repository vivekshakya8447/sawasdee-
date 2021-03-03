import React from 'react';
import { MdPlayCircleFilled} from 'react-icons/md';


const Layout = () => {
    return (
        <>
            
        <div className='video-section'>
            <div className='container'>
                <div className='heading-area t-center'>
                    <h2>Walkthrough</h2>
                </div>
                <div className='video-area t-center'>
                    <div>
                        <img src= '../../image/a5-768x488.jpg' />
                    </div>
                    <div className='play-icon'>
                        <a href =""><MdPlayCircleFilled /></a>
                    </div>
                </div>
            </div>
        </div>


            <style jsx>{`

                .video-section {
                    background-image: url(../../image/home7_bg.png);
                    padding: 80px 0px;
                }
                .video-area{
                    position: relative;
                }
                .heading-area h2{
                    color: #fff;
                    font-size: 45px;
                }
                .play-icon{
                    top: 50%;
                    left: 50%;
                    position: absolute;
                }
                .button-2-ripper {
                    margin-top: 40px;
                }
                .play-icon {
                    width: 0px;
                    color: #3E2558E0;
                    background-color: #FFF;
                    font-size: 62px;
                    border-radius: 90px;
                }

                

            `}</style>
        </>
    )
}

export default Layout