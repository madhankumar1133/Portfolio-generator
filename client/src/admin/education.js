import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Menu from './menu';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './education.css';

export function Education()

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
    const handlesubmit=(event)=>{
        event.preventDefault();
        var datastring= new FormData(event.target);
        var config={Headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:3003/Add_education',datastring,config)
        .then(function(response)
        {
            if(response.data.status==='error')
            {
                alert('error');
                window.location.reload();
            }
            else if(response.data.status ==='uploaded')
            {   alert('successfully upload');
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
    const delete1=(id)=>{
        var key={id}
        var value={Headers:{"enctype":"multipart/form-data"}}
  
        axios.post("http://localhost:3003/Delete_education",key,value)
        .then(function(response){
          if(response.data.status==="error")
          {
              alert("error");
  
          }
          else if(response.data.status ==="delete")
          {
              alert("deleted");
              window.location.reload();
          }
          else{
              alert("contact admin")
          }
        })
      }

     


    return(
     <>
         <div className="container-fluid p-2 text-warning edu1">

            

            <h1 className="text-primary text-center">Education details</h1>
          <form onSubmit={handlesubmit}>
            <div className="row p-3">
                <div className="col-lg-6 bg-dark ">
                    {/* <h1>{userid}</h1> */}
                    <h3 className="text-center">PG Details</h3>
                    <label className="col-lg-3 p-2"> <h6>PG degree </h6></label>
                    <input type="text" name="pg_degree" id="pg_degree" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6> PG Institution </h6></label>
                    <input type="text" name="pg_institution" id="pg_institution" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6> PG Location </h6></label>
                    <input type="text" name="pg_location" id="pg_location" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6> PG CGPA      </h6></label>
                    <input type="text" name="pg_cgpa" id="pg_cgpa" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6> PG Year of passing </h6></label>
                    <input type="text" name="pg_yearofpassing" id="pg_yearofpassing" className="col-lg-8"/>


                </div>
                <div className="col-lg-6  bg-dark ">
                 <h3 className="text-center">UG Details</h3>
                    <label className="col-lg-3 p-2"> <h6>UG degree </h6></label>
                    <input type="text" name="ug_degree" id="ug_degree" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6> UG  Institution </h6></label>
                    <input type="text" name="ug_institution" id="ug_institution" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6>UG Location </h6></label>
                    <input type="text" name="ug_location" id="ug_location" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6>UG CGPA      </h6></label>
                    <input type="text" name="ug_cgpa" id="ug_cgpa" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6>UG Year of passing </h6></label>
                    <input type="text" name="ug_yearofpassing" id="ug_yearofpassing" className="col-lg-8"/>



                </div>
                <div className="col-lg-6 p-3  bg-dark ">
                 <h3 className="text-center">HSC Details</h3>
                    <label className="col-lg-3 p-2"> <h6>HSC Standard </h6></label>
                    <input type="text" name="hsc_standard" id="hsc_standard" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6> HSC Institution </h6></label>
                    <input type="text" name="hsc_institution" id="hsc_institution" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6>HSC Location </h6></label>
                    <input type="text" name="hsc_location" id="hsc_location" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6>HSC Percentage      </h6></label>
                    <input type="text" name="hsc_percentage" id="hsc_percentage" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6>HSC Year of passing </h6></label>
                    <input type="text" name="hsc_yearofpassing" id="hsc_yearofpassing" className="col-lg-8"/>



                </div>
                <div className="col-lg-6 p-3  bg-dark ">
                 <h3 className="text-center">SSLC Details</h3>
                    <label className="col-lg-3 p-2"> <h6>SSLC Standard </h6></label>
                    <input type="text" name="sslc_standard" id="sslc_standard" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6> SSLC Institution </h6></label>
                    <input type="text" name="sslc_institution" id="sslc_institution" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6>SSLC Location </h6></label>
                    <input type="text" name="sslc_location" id="sslc_location" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6>SSLC Percentage      </h6></label>
                    <input type="text" name="sslc_percentage" id="sslc_percentage" className="col-lg-8"/>

                    <label className="col-lg-3 p-2"> <h6>SSLC Year of passing </h6></label>
                    
                    <input type="text" name="sslc_yearofpassing" id="sslc_yearofpassing" className="col-lg-8"/>



                </div>

               

             
                 
            </div>
            <div className="text-center p-1"><button   type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary">submit </button> 
            <input type="hidden" name="userid" id="userid" value={userid} className="form-control"/>
            <Link to="/dashboard" >&nbsp;
                <button className="btn btn-danger">Goback </button>    
            </Link>
                 </div>
         </form>
     </div>
     <div className="container p-5">
        <div className="row">
            <div className="col-lg-2">&nbsp;</div>
            <div className=" table-responsive col-lg-8">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>PG Degree</th>
                            <th>PG Institution</th>
                            <th>PG Location</th>
                            <th>PG CGPA</th>
                            <th>PG year of passing</th>
                            <th>edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            vieweducation.map((v,i)=>(
                                <tr>
                                    <td>{v.pg_degree}</td>
                                    <td>{v.pg_institution}</td>
                                    <td>{v.pg_location}</td>
                                    <td>{v.pg_cgpa}</td>
                                    <td>{v.pg_yearofpassing}</td>
                                    <button type="button" name="data_del" id="data_del" className="btn btn-danger" onClick={()=>{delete1(v.id)}}>Delete</button>
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