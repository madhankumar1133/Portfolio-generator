import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Menu from './menu';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Experience()
{

    let userid=localStorage.getItem('userid');

    const[viewexperience,setViewexperience]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3003/View_experience/'+userid)
        .then(response=>response.json())
        .then(json=>setViewexperience(json));

    },[]);

    let handlesubmit=(event)=>{
        event.preventDefault();
        var datastring=new FormData(event.target);
        var config={Headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:3003/Add_experience',datastring,config)
        .then(function(response)
        {
            if(response.data.status==='error')
            {
                alert('error');
                window.location.reload();

            }
            else if(response.data.status==='uploaded')
            {
                alert('successfully upload');
                window.location.reload();

            }
            else{
                alert('contact admin');
                window.location.reload();

            }
        })
        .catch(function(error)
        {
            alert('error');
            window.location.reload();
        })
    }


    return(
        <>
         <div className="container p-5">
          <form onSubmit={handlesubmit}>  
            <div className="row">
                <div className="col-lg-2">
                    &nbsp;

                </div>
                <div className="col-lg-8 bg-dark text-warning">
                <h3 className="text-center text-primary p-3">Experience details</h3>
                    <label className="col-lg-3 p-4"> <h6>Field of Experience</h6></label>
                    <input type="text" name="fieldexperience" id="fieldexperience" className="col-lg-8"/>

                    <label className="col-lg-3 p-4"> <h6>No of Experience </h6></label>
                    <input type="text" name="noexperience" id="noexperience" className="col-lg-8"/>

                    {/* <label className="col-lg-3 p-4"> <h6>Location </h6></label>
                    <input type="text" name="" id="" className="col-lg-8"/>

                    <label className="col-lg-3 p-4"> <h6>Performing     </h6></label>
                    <input type="text" name="" id="" className="col-lg-8"/>

                    <label className="col-lg-3 p-4"> <h6>Year of passing </h6></label>
                    <input type="text" name="" id="" className="col-lg-8"/> */}
                    

                </div>
                <div className="col-lg-2">
                    &nbsp;

                </div>

                <div className="col-lg-5">
                    &nbsp;

                </div>
                {/* <div className="col-lg-2">
                    &nbsp;
                    
                    
                    {/* <button className="btn btn-success m-3">Add </button>  
                </div> */}
                <div className="col-lg-2">
                    
                   <button   type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary m-3">submit </button> 
                   <input type="hidden" name="userid" id="userid" value={userid} className="form-control"/>
                </div>
                <div className="col-lg-2">
                    
                    <Link to="/dashboard" >
                     <button className="btn btn-danger m-3">Goback </button>    
                    </Link>
                </div>
                <div className="col-lg-5">
                    &nbsp;

                </div>

            </div>
          </form>
         </div>
         <div className="container p-5">
        <div className="row">
            <div className="col-lg-2">&nbsp;</div>
            <div className=" table-responsive col-lg-8">
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>fieldexperience</th>
                            <th>number of years Experience</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            viewexperience.map((v,i)=>(
                                <tr>
                                    <td>{v.fieldexperience}</td>
                                    <td>{v.noexperience}</td>
                                   
                                 </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
            <div className="col-lg-2">&nbsp;</div>
            
        </div>

     </div>
        </>
    );

}