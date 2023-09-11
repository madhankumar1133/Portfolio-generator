import react from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './home1.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import madhanimg from './madhan.jpg';


export function Home1()
{
    let userid = localStorage.getItem('userid');
    const [userdetails,setUserdetails] = useState([]);
    const [photo,setPhoto] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3003/Get_userdetails/'+userid)
        .then(responsive=>responsive.json())
        .then(json=>setUserdetails(json));
        // console.log(userdetails)
    },[]);
    useEffect(()=>{
        fetch('http://localhost:3003/View_profilephoto/'+userid)
        .then(responsive=>responsive.json())
        .then(json=>setPhoto(json));
        // console.log(photo.filename)
    },[]);
    return(
  <>
    <div className='homeimg pb-5'>
                 
        <nav className="navbar navbar-expand-lg navbar-light bg-dark nav-justified top-fixed">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
 
                             <Link to="/portfolio" className="nav-link text-light  ml-5"><h6>Home</h6></Link>
                

                        </li>
                        <li className="nav-item">
                            <Link to="/about1" className="nav-link text-light ml-3"><h6>About</h6></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/education1" className="nav-link text-light ml-3"><h6>Education</h6></Link>
                
                        </li>
                        <li className="nav-item">
                            <Link to="/softskills1" className="nav-link text-light ml-3"><h6>Softskills</h6></Link>

                        </li>
                      
                        <li className="nav-item">
                            <Link to="/certificate1" className="nav-link text-light ml-3"><h6>Certificates</h6></Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/contact1" className="nav-link text-light ml-3"><h6>Contact</h6></Link>

                        </li>
            
                     </ul>
            
                   </div>
               </nav>

               <div className='container p-5 mt-5'>
                   <div className='row p-5 mt-5'>
                     <div className='col-lg-4'>
                        {photo.map((value,index)=>(

                        <img src={`./upload/${value.filename}`} alt={photo.alt_text} className="col-lg-12 rounded-circle p-3 profileimg"/>
                        ))}

                     </div>
                     <div className='col-lg-8 p-5'>

                        <h3 className=' homtext col-lg-12'>I Am </h3>
                     {userdetails.map((v,i)=>(
                            <>
                            <h3 className='homtext col-lg-12'>{v.name}</h3>
                            </> 
                        ))}
                        

                        <h5 className=' homtext p-5 col-lg-12'>Make it work, make it right, make it fast</h5>

                     </div>
                 
                   </div>

                


               </div>
                
    </div>
 </>
    );
}