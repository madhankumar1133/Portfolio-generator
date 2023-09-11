import react from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
// import img1 from './javacer.jpg';
// import img2 from './jscer.jpg';
// import img3 from './frontcer.jpg';
// import img4 from './scratchcer.jpg';
import './certificate.css';

export function Certificate1()
{
  let userid=localStorage.getItem('userid');

  const[viewcertificate,setViewcertificate]=useState([])

  useEffect(()=>{
      fetch('http://localhost:3003/View_certificate/'+userid)
      .then(response=>response.json())
      .then(json=>setViewcertificate(json));
  },[]);

    return(
        <>
          <div className='container-fluid bgcertificate pb-5'>
            <div className='container p-3'>
              <h1 className='text-center certext p-3'>Certificates</h1>
                <div className='row'>
                  {/* <div className='col-lg-5'>
                    <img src={img1} className='col-lg-10  border border-danger  certificateborder mt-5'/>

                  </div>
                  <div className='col-lg-2'>
                  
                  </div>
                  <div className='col-lg-5'>
                  <img src={img2} className='col-lg-10  border border-danger  certificateborder mt-5'/>

                  </div>


                  <div className='col-lg-5 '>
                    <img src={img3} className='col-lg-10  border border-danger  certificateborder mt-5'/>

                  </div>
                  <div className='col-lg-2'>
                  
                  </div>
                  <div className='col-lg-5 '>
                  <img src={img4} className='col-lg-10  border border-danger  certificateborder mt-5'/>

                  </div>
 */}
                   
                   {viewcertificate.map((v,i)=>(
                    <>

                   
                    <div className='col-lg-6 text-center'>

                    <img src={`./upload/${v.filename}`} className='col-lg-10   border border-danger  certificateborder mt-5'/>
                    <h2 className='text-center certext mt-5'>{v.filetext}</h2>

                    </div>
                    
                    </>
                   ))}
                </div>

            </div>

          </div>
        </>
    );
}