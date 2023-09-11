import react from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import img1 from './imgabout.jpeg';
import './about1.css';



export function About1()
{
    return(
        <>
          <div className='container-fluid bgabout pb-5'>

            <div className='container p-3'>
                <h1  className='text-center p-3 text-light '>About Me</h1>
              <div className='row p-2'>
                <div className='col-lg-5 bg-light p-5 border border-danger  mt-5 aboutborder'>
                            <h2 className='text-center '>Full Stack Web Developer</h2>
                            <p className='col-lg-12  text-break'>
                               Build both the front end and the back end of a website. The front end
                             (the parts of a website a user sees and interacts with) and the back end 
                             (the behind-the-scenes data storage and processing) require different skill sets
                            </p>

                    
                </div>
                <div className='col-lg-2'>
                    
                    
                </div>
                <div className='col-lg-5 bg-light p-5  border border-danger mt-5 aboutborder'>
                       <h2 className='text-center'>Web Designer skills</h2>
                            <p className='col-lg-12  text-break'>
                            I am  a good web designer, i’ll also pay attention to concepts like 
                            responsive design, 
                            aesthetics, usability and accessibility when building your site</p>

                    
                    
                </div>
                <div className='col-lg-5 bg-light p-5 mt-5 border border-danger  aboutborder'>


                    <h2 className='text-center'>Web Designer skills</h2>
                    <p  className='col-lg-12  text-break'>The Database Specialist designs, implements, and maintains complex databases with respect 
                        to access methods, access time, device allocation, 
                        validation checks, organization, protection and security, documentation.</p>
                    
                    
                </div>
                <div className='col-lg-2'>
                    
                    
                </div>
                <div className='col-lg-5 mt-5'>

                    <img src={img1} className='col-lg-12  border border-danger  aboutborder'/>
                    
                    
                </div>

              </div>


            </div>
            
            
          </div>
        </>
    );
}