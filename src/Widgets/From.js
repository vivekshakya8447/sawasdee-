import React from 'react';
import { FaCoffee } from 'react-icons/Fa';
import ReCAPTCHA from "react-google-recaptcha";


const From = () => {
    return (
        <>
            
        <div className='form-section'>
            <img src='../../image/top_bar.jpg' />
            <div className='container'>
                <div className='heading t-center'>
                    <span>< FaCoffee /></span>
                    <h2>INTERESTED? Let's Connect</h2>
                    <div className='connect'>Get in touch with us if you would like to schedule a showing.</div>
                    <div className='button-brand'>
                        <div className='button'>
                            <a>Connect With Executive</a>
                        </div>
                    </div>
                </div>
                <div className='Arrange-call-back t-center'>
                    <div className='heading-form'>
                        <h2>Arrange call back</h2>
                    </div>
                    <div className= 'd-flex'>
                        <div className='input'>
                            <input size="1" type="text" name="form_fields[name]"  className="field-textual" placeholder="Name" />
                        </div>
                        <div className='input'>
                            <input size="1" type="text" name="form_fields[phone]"  className="field-textual" placeholder="Phone" />
                        </div>
                    </div>
                    <textarea className="textual size-sm" name="form_fields[message]" id="form-field-message" rows="4" placeholder="Message (Optional)"></textarea>
                    <div>
                    
                     </div>
                    <div className='t-center'>
                        <button type="submit" className="buttons size-sm t-center"> 
                            <span>
                                <span className=" button-icon"> </span> 

                                <span className="button-text">Send Message</span> 
                            </span> 
                        </button>
                    </div>
                </div>
            </div>
        </div>


            <style jsx>{`
            
                .Arrange-call-back{
                    width: 80%;
                    margin: 0 auto;
                }
                input:-ms-input-placeholder {
                    color: #5d89d8;
                   }
                .form-section{
                    background-color: #371F51;
                    padding: 50px 0px;
                    border-bottom: 1px solid;
                }
                textarea:focus, input:focus{
                    outline: none;
                }
                .buttons {
                    color: #000;
                    font-size: 15px;
                    font-weight: 600;
                    backgorund:#fff;
                    text-transform: uppercase;
                    border-radius: 0 0 0 0;
                    padding: 15px 45px 15px 45px;
                }
                .button {
                    color: #fff;
                    font-size: 15px;
                    font-weight: 600;
                    text-transform: uppercase;
                    border-radius: 0 0 0 0;
                    padding: 15px 45px 15px 45px;
                }
                .connect{
                    color: #fff;
                    margin: 20px 0px;
                }
                .heading-form h2{
                    color: #FFF;
                    margin: 60px 0px 30px;
                    font-size: 22px;
                }
                .input .field-textual {
                    line-height: 1.4;
                    font-size: 15px;
                    min-height: 40px;
                    padding: 5px 14px;
                    width: 100%;
                    border: none;
                    max-width: 100%;
                    border-bottom: 1px solid #fff;
                    background-color: transparent;
                    color: #373a3c;
                }
                .input{
                    width: 50%;
                    margin 20px;
                }
                .heading span{
                    color: #fff;
                    font-size: 70px;
                }
                .heading h2{
                    color: #FFF;
                    font-size: 50px;
                }
                .button-brand a{
                    border-style: solid;
                    padding: 10px 15px;
                    border-width: 2px 2px 2px 2px;
                    border-color: #bb9b43;
                    border-radius: 0 0 0 0;
                }
                textarea{
                    margin-bottom: 70px;
                    line-height: 2.4;
                        font-size: 15px;
                        min-height: 40px;
                        padding: 5px 14px;
                        width: 100%;
                        hight: ;
                        border: none;
                        max-width: 100%;
                        border-bottom: 1px solid #fff;
                        background-color: transparent;
                        color: #fff;
                }
                
            `}</style>
        </>
    )
}

export default From