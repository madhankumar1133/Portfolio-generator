import react from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import img1 from './shool2.jpeg';
import './education1.css'

export function Education1()
{

    let userid=localStorage.getItem('userid');

    const[vieweducation,setVieweducation]=useState([]);

    useEffect(()=>
    {
        fetch('http://localhost:3003/View_education/'+userid)
        .then(response=>response.json())
        .then(json=>setVieweducation(json));
    },[]
    )
    return(
        <>
        <div className='container-fluid bgeducation  pb-5'>
            <div className='container p-3'>
                <h1 className=' edutext text-center p-3'>Education Details </h1>
                <div className='row'>
                    <div className='col-lg-4 mt-3 '>
                         <img src={img1} className='col-lg-12 educationborder' />
                    </div>
                    <div className='col-lg-2'>

                    </div>
                    <div className='col-lg-6 mt-3'>

                        <div className='col-lg-12 bgedubox border   p-3 educationborder text-center'>
                          {vieweducation.map((v,i)=>(
                            <>
                              <h4 className='text-warning'>Under Graduate</h4>
                              <h5 className=' mt-3 text-light'>College name :{v.ug_institution}</h5>
                              <h5 className='text-light'>Department  :{v.ug_degree}</h5>
                              <h5 className='text-light'>CGPA  :{v.ug_cgpa}</h5>
                            </>


                          ))}
                          
                           


                        </div>
                        <div className='col-lg-12 mt-3 bgedubox  p-3 border  p-3 educationborder text-center'>

                        {vieweducation.map((v,i)=>(
                             <>
                             <h4 className='text-warning'> HSC Details</h4>
                             <h5 className='mt-3 text-light'>School name :{v.hsc_institution}</h5>  
                             <h5 className='text-light'>Standard  :{v.hsc_standard}</h5>
                             <h5 className='text-light'>percentage  :{v.hsc_percentage}</h5>
                       </>
 
                            ))}
                                                      
                          

                        </div>
                        <div className='col-lg-12 mt-3 bgedubox p-3 border  educationborder text-center '>

                        {vieweducation.map((v,i)=>(
                            <>
                              <h4 className='text-warning'> SSLC Details</h4>
                             <h5 className='mt-3 text-light' >School name :{v.sslc_institution}</h5>
                             <h5 className='text-light'>Standard  :{v.sslc_standard}</h5>
                             <h5 className='text-light'>percentage  :{v.sslc_percentage}</h5>
                            </>
                           
                            ))}
                            


                        </div>


                    </div>

                </div>


            </div>

        </div>
        </>
    );
}