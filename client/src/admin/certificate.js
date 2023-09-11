import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Menu from './menu';
import 'bootstrap/dist/css/bootstrap.min.css';


export function Certificate()
{    

    let userid=localStorage.getItem('userid');

    const[viewcertificate,setViewcertificate]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3003/View_certificate/'+userid)
        .then(response=>response.json())
        .then(json=>setViewcertificate(json));
    },[]);

    const handlesubmit=(event)=>{
        event.preventDefault();
        var datastring=new FormData(event.target);
        var config={Headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:3003/Add_certificate',datastring,config)
        .then(function(response)
        {
            if(response.data.status==='error')
            {
                alert('error');
                window.location.reload();
            }
            else if(response.data.status==='uploaded')
            {
                alert('successfully uploaded');
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
  
        axios.post("http://localhost:3003/Delete_certificate",key,value)
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
          <div className="container p-5 text-warning bg-dark">
          <h1 className="text-center">Certification</h1>
          <form onSubmit={handlesubmit}>
            <div className="row ">
                
                <div className="col-lg-2">
                    &nbsp;

                </div>
                <div className="col-lg-8 p-5 bg-dark">
                    <label className="col-lg-3 p-3">TYPE:</label>
                    <input type='text' name='filetext' id='filetext' placeholder=" Enter  the name of certification" className=' col-lg-7'/>

                    <label className="col-lg-3 p-3">FILENAME:</label>
                    <input type='file' name='filename' id='filename' className=' col-lg-7'/>



                </div>
                <div className="col-lg-2">
                    &nbsp;

                </div>
               

                <div className="col-lg-3">
                    &nbsp;

                </div>
                <div className="col-lg-2">
                    
                    
                    {/* <button className="btn btn-success m-3">Add </button>  */}
                </div>
                <div className="col-lg-2">
                    
                   <button type="submit" name="data_submit" id="data_submit" value="submit"  className="btn btn-primary m-3">submit </button> 
                   <input type="hidden" name="userid" id="userid" value={userid} className="form-control"/>
                </div>
                <div className="col-lg-2">
                    
                    <Link to="/dashboard" >
                     <button className="btn btn-danger m-3">Goback </button>    
                    </Link>
                </div>
                <div className="col-lg-3">
                    &nbsp;

                </div>

            </div>
          </form>



          <div className="container p-5">
             <div className="row">
               <div className="col-lg-2">&nbsp;</div>
               <div className=" table-responsive col-lg-8 text-light">
                <table className="table table-bordered">
                    <thead>
                        <tr className="text-light">
                            <th>course name</th>
                            <th>filename</th>
                            <th>edit</th>
                           

                        </tr>
                    </thead>
                    <tbody className="text-light">
                        {
                            viewcertificate.map((v,i)=>(
                                <tr>
                                    <td>{v.filetext}</td>
                                    <td>{v.filename}</td>
                                    <td><button type="button" name="data_del" id="data_del" className="btn btn-danger" onClick={()=>{delete1(v.id)}}>Delete</button></td>
                                   
                                 </tr>
                            ))
                        }
                    </tbody>
                </table>
                 </div>
                  <div className="col-lg-2">&nbsp;</div>
            
                 </div>
                 </div>
          </div>
        </>
    );

}