import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';

const Layout = () => {
    return (
        <>
            
        <div className='layout-section'>
            <div className=''>
                <div className='layout-area  t-center '>
                    <h2 className='heading-title'>Floor Layouts</h2>
                </div>
                <div className='d-flex j-c m-2'>
                    <div className='text-col'>
                        <ul className='d-flex '>
                            <li>
                                <a href="#tab-nbWZS-0" className='active' data-toggle="tab" aria-expanded="true"> First Floor </a>
                            </li>
                            <li>
                                <a href="#tab-nbWZS-0" data-toggle="tab" aria-expanded="true"> second Floor </a>
                            </li>
                            <li>
                                <a href="#tab-nbWZS-0" data-toggle="tab" aria-expanded="true"> third Floor </a>
                            </li>
                            <li>
                                <a href="#tab-nbWZS-0" data-toggle="tab" aria-expanded="true"> fourth Floor </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className='floor-detail w-40'>
                        <div className='p-60'>
                            <h2>Lower Ground Floor Details</h2>
                            <div className= ''>
                                <div className="widget-list-info ">
                                    <ul className="list-info">
                                        <li>
                                            <span className="heading-info">No. of Shops</span>
                                            <span className="ali-right">20 Signature Retail Shops</span>
                                        </li>
                                        <li>
                                            <span className="heading-info">Total Saleable Area</span>
                                            <span className="ali-right">25,229 Sq. Ft.</span>
                                        </li>
                                        <li>
                                            <span className="heading-info">Size Range</span>
                                            <span className="ali-right">499-1935 Sq. Ft.</span>
                                        </li>
                                    </ul>
                                    <div className='color-choice-col'>
                                        <div className='d-flex'>
                                            <div className=''>
                                                <h2>1</h2>
                                            </div>
                                            <div className='color c-1'></div>
                                            <div className=''>
                                                <h2>shop</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='color-choice-col'>
                                        <div className='d-flex'>
                                            <div className=''>
                                                <h2>2</h2>
                                            </div>
                                            <div className='color c-2'></div>
                                            <div className=''>
                                                <h2>banquets</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='color-choice-col'>
                                        <div className='d-flex'>
                                            <div className=''>
                                                <h2>3</h2>
                                            </div>
                                            <div className='color c-3'></div>
                                            <div className=''>
                                                <h2>banquests lobby</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='color-choice-col'>
                                        <div className='d-flex'>
                                            <div className=''>
                                                <h2>4</h2>
                                            </div>
                                            <div className='color c-4'></div>
                                            <div className=''>
                                                <h2>banquets kitchen</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='color-choice-col'>
                                        <div className='d-flex'>
                                            <div className=''>
                                                <h2>5</h2>
                                            </div>
                                            <div className='color c-5'></div>
                                            <div className=''>
                                                <h2>hotel trans lobby</h2>
                                            </div>
                                        </div>
                                    </div><div className='color-choice-col'>
                                        <div className='d-flex'>
                                            <div className=''>
                                                <h2>6</h2>
                                            </div>
                                            <div className='color c-6'></div>
                                            <div className=''>
                                                <h2>pre functional area</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className= 'w-60 t-center'>
                        <div className='bg-w'>
                            <img src= '../../image/floor1-2-768x762.jpg' />
                            <h2 className='t-center m-10'>< AiFillPlusCircle /> zoom</h2>
                        </div>
                    </div>
                </div>          
                <div className="button-wrapper t-center"> 
                    <a href="#action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjIxMzYiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D" className="button-c button size-sm" role="button"> 
                        <span className="button-content-wrapper">
                            <span className="button-text">Connect With Executive</span> 
                        </span>
                    </a>
                </div>
            </div>
        </div>


            <style jsx>{`

                .floor-detail{
                    background-color: #321C48;
                }
                .layout-area  {
                    background-color: #432A5E;
                    padding: 65px 0px 20px;
                }
                .button-c{
                    display: inline-block;
                    line-height: 1;
                    background-color: #818a91;
                    font-size: 15px;
                    padding: 12px 24px;
                    -webkit-border-radius: 3px;
                    border-radius: 3px;
                    color: #fff;
                    fill: #fff;
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
                .bg-w h2{
                    align-items: center;
                    font-size: 18px;
                    font-weight: 400;
                    text-transform: uppercase;
                    display: flex;
                    justify-content: center;
                }
                .text-col ul li{
                    position: relative;
                }
                .text-col ul li a:hover {
                    color: #FFFFFF!important;
                    background-color: #321C48!important;
                }
                .active {
                    color: #FFFFFF!important;
                    background-color: #321C48!important;
                }
                .text-col ul li a.active:before{
                    opacity: 1;
                    border-top-color: #321C48!important;
                    filter: alpha(opacity=100);
                    visibility: visible;
                    color: #321C48!important;
                }
                .text-col ul li a:before {
                    content: '';
                    position: absolute;
                    top: 36px;
                    left: 45%;
                    border: 10px;
                    border-style: solid;
                    border-color: #00eb74 transparent transparent;
                    opacity: 0;
                    filter: alpha(opacity=0);
                    visibility: hidden;
                }
                .text-col ul li a:hover:before{
                    opacity: 1;
                    border-top-color: #321C48!important;
                    filter: alpha(opacity=100);
                    visibility: visible;
                    color: #321C48!important;
                }

                .j-c{
                    justify-content: center;
                }
                .button-wrapper {
                    margin-top: 20px;
                }
                .m-10{
                    padding-bottom: 20px;
                }
                .t-center{
                    text-align: center;
                }
                .color-choice-col{
                    padding: 2px;
                    text-align: center;

                }
                .color-choice-col h2{
                    color: #FFF;
                    font-weight: 400;
                    font-family: "DM Serif Display",Arial,sans-serif;
                    font-size: 16px;
                }
                .list-info{
                    margin-bottom: 20px;
                }
                .color{
                    width: 80px;
                    height: 40px;
                    margin: 0px 10px 0px 20px;

                }
                .ali-right {
                    color: #FFF;
                }
                .ali-right {
                    font-weight: 700;
                    text-align: right;
                }
                .heading-info {
                    color: #917FA7;
                }
                .m-2{
                    margin-bottom: 50px;
                }
                .c-1{
                    background: #F6CCD1;
                }
                .c-2{
                    background: #F9E2CD;
                }
                .c-3{
                    background: #DEDCE9;
                }
                .c-4{
                    background: #B1C9CC;
                }
                .c-5{
                    background: #D2CDA8;
                }.c-6{
                    background: #F6CCD1;
                }
                .list-info li{
                    padding: 13px 0 13px 0;
                    border-color: #432A5E !important;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid;
                }
                .layout-section{
                    padding: 15px;
                    background-image: url(../../image/home7_bg.png);
                    padding-bottom: 70px;

                }
                .heading-title {
                    color: #FFF;
                    font-family: "DM Serif Display",Arial,sans-serif;
                    font-weight: 400;
                    font-size: 45px;
                }
                .bg-w{
                    background: #fff;
                }
                .bg-w img{
                    width: 79%;
                }
                .p-60{
                    padding: 60px;
                }
                .w-40{
                    width: 45%;
                    color: #fff;
                }
                .w-60{
                    width:55%;
                }
                .floor-area{
                   
                }
                .text-col a{
                    padding: 14px 40px;
                    font-size: 18px;
                    color: #917FA7!important;
                }
            `}</style>
        </>
    )
}

export default Layout