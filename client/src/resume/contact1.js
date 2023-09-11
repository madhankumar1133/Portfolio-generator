import react from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './contact1.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
// import git from './download.png';
//  import linkedin from './linkedin.png';


export function Contact1()
{

    let userid = localStorage.getItem('userid');
    const [userdetails,setUserdetails] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3003/Get_userdetails/'+userid)
        .then(responsive=>responsive.json())
        .then(json=>setUserdetails(json));
    },[]);


    const[viewsocialmedia,setSocialmedia]=useState([]);

    useEffect(()=>
    {
        fetch('http://localhost:3003/View_socialmedia/'+userid)
        .then(response=>response.json())
        .then(json=>setSocialmedia(json));
    },[]
    )
    
    return(
        <>
            <div className='container-fluid bg-secondary p-5 pb-5'>
                <div className='container p-5'>
                    <h1 className='text-light text-center'>contact</h1>
                    <div className='row'>
                        <div className='col-lg-5 p-3 text-light'>
                            {/* {userdetails.map((v,i)=>(
                                <>
                                <h3 >details</h3>
                                <h5 className='mt-2'>name: {v.name}</h5>
                                <h5 className='mt-2'>Fathername: {v.fathername}</h5>
                                <h5 className='mt-2'>DateofBirth: {v.date_of_birth}</h5>
                        
                                <h5 className='mt-2'>mobile number: {v.phone}</h5>
                                </>
                            ))} */}
                             <div className=" mt-3">
                        
                            
                                
                                    <h3 className='text-light'> Personal Details</h3>
                                   
                         <table className="mt-4 table-responsive">   
                              
                        
                            <tbody className='text-center text-light'>
                            {
                                userdetails.map((v,i)=>(
                                   
                                   <>
                                   <tr>
                                        <td className='text-left'>name</td>
                                        <td>:</td>
                                        <td className='text-left'>{v.name}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-left'>Fathername</td>
                                        <td>:</td>
                                        <td className='text-left' >{v.fathername}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-left'>DateofBirth</td>
                                        <td>:</td>
                                        <td className='text-left'>{v.date_of_birth}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-left'>Email</td>
                                        <td>:</td>
                                        <td className='text-left'>{v.email}</td>
                                    </tr>
                                    <tr>
                                        <td className='text-left'>mobile number</td>
                                        <td>:</td>
                                        <td className='text-left'>{v.phone}</td>
                                    </tr>
                                    </>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                            



                        </div>
                        <div className='col-lg-1'>

                        </div>
                        <div className='col-lg-6 bg-secondary mt-5'>
 
                            {viewsocialmedia.map((v,i)=>(
                                <>
                                <a href={v.github} > <FontAwesomeIcon icon={faGithub} className="mt-3 pl-5  fontsiz text-center text-light"/></a>
                                <a href={v.linkedin} > <FontAwesomeIcon icon={faLinkedin} className="mt-3 pl-5  fontsiz text-center text-light"/></a>
                               
                               
                                </>



                               
                            ))}

                            {
                                userdetails.map((v,i)=>(
                                    <>
                                     <a href={ `mailto:${v.email}`} > <FontAwesomeIcon icon={faEnvelope} className="mt-3 pl-5  fontsiz text-center text-light"/></a>
                                <a href= {`tel:${v.phone}`} > <FontAwesomeIcon icon={faPhone} className="mt-3 pl-5  fontsiz text-center text-light"/></a>
                                
                                 
                                    </>
                                ))
                            }
                                                          

                       

                        </div>


                    </div>

                </div>

            </div>
        </>
    );
}