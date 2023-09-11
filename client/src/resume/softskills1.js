import react from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './home1.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import StarRatings from 'react-star-ratings';
import './softskills1.css'

export function Softskill1()
{ 
    let userid=localStorage.getItem('userid');

    const[viewsoftskills,setViewsoftskills]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3003/View_softskills/'+userid)
        .then(response=>response.json())
        .then(json=>setViewsoftskills(json));
        
    },[]);

    return(
        <>
            <div className='container-fluid softbg  pb-5'>
                <div className='container p-3'>
                    <h1 className='text-center text-light p-3'>Soft Skills</h1>
                    <div className='row'>
                        <div className='col-lg-5 bg-light text-center softborder'>
                            <h2  className='text-center text-primary p-3 mt-3'>FRONT END</h2>
                            {viewsoftskills.map((v,i)=>(
                            
                                
                                 
                                
                                // <StarRatings  numberOfStars={5}/>
                             <h3 className='text-dark'>HTML <br/><StarRatings rating={parseInt(v.html)} starRatedColor="gold" starDimension="35" numberOfStars={6} name="rating"/> <br/><br/></h3>
                            ))}
                             {viewsoftskills.map((v,i)=>(
                                <h3 className='text-dark'>CSS<br/><StarRatings rating={parseInt(v.css)} starRatedColor="gold" starDimension="35" numberOfStars={6} name="rating"/><br/><br/></h3>
                            ))}
                             {viewsoftskills.map((v,i)=>(
                                <h3 className='text-dark'>BootStarp<br/><StarRatings rating={parseInt(v.bootstrap)} starRatedColor="gold" starDimension="35" numberOfStars={6} name="rating"/><br/><br/></h3>
                            ))}
                             {viewsoftskills.map((v,i)=>(
                                <h3 className='text-dark'>JavaScript<br/><StarRatings rating={parseInt(v.javascript)} starRatedColor="gold" starDimension="35" numberOfStars={6} name="rating"/><br/><br/></h3>
                            ))} 

                            {/* {viewsoftskills.map((v,i)=>(
                                <h3>{v.html}</h3>
                            ))}  */}

                        </div>
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        <div className='col-lg-5 bg-light text-center softborder'>
                        <h2  className='text-center text-primary p-3 mt-3'>BACK END</h2>

                        {viewsoftskills.map((v,i)=>(
                                <h3 className='text-dark p-3 mt-5'>JAVA<br/><StarRatings rating={parseInt(v.java)} starRatedColor="gold" starDimension="35" numberOfStars={6} name="rating"/><br/><br/></h3>
                            ))}
                        {viewsoftskills.map((v,i)=>(
                                <h3 className='text-dark p-3'>NODE JS<br/><StarRatings rating={parseInt(v.nodejs)} starRatedColor="gold" starDimension="35" numberOfStars={6} name="rating"/><br/><br/></h3>
                            ))}


                        </div>
                         <div className='col-lg-5 bg-light text-center mt-5 softborder'>
                         <h2  className='text-center text-primary p-3 mt-3 '>FRAME WORK</h2>
                         {viewsoftskills.map((v,i)=>(
                                <h3 className='text-dark'>REACT JS<br/><StarRatings rating={parseInt(v.reactjs)} starRatedColor="gold" starDimension="35" numberOfStars={6} name="rating"/><br/><br/></h3>
                            ))}

                        </div>
                        <div className='col-lg-2'>&nbsp;

                        </div>
                        <div className='col-lg-5 bg-light text-center mt-5 softborder'>
                        <h2  className='text-center text-primary p-3 mt-3'>DATABASE</h2>
                        {viewsoftskills.map((v,i)=>(
                                <h3 className='text-dark'>MySQL<br/><StarRatings rating={parseInt(v.mysql)} starRatedColor="gold" starDimension="35" numberOfStars={6} name="rating"/><br/><br/></h3>
                            ))}


                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}