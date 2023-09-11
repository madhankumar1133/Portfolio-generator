import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Menu from './menu';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Socialmedia()
{  

    let userid=localStorage.getItem('userid');

    const[viewsocialmedia,setSocialmedia]=useState([]);

    useEffect(()=>
    {
        fetch('http://localhost:3003/View_socialmedia/'+userid)
        .then(response=>response.json())
        .then(json=>setSocialmedia(json));
    },[]
    )


    const delete1=(id)=>{
        var key={id}
        var value={Headers:{"enctype":"multipart/form-data"}}
  
        axios.post("http://localhost:3003/Delete_socialmedia",key,value)
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


    const handlesubmit=(event)=>{
        event.preventDefault();
        var datastring= new FormData(event.target);
        var config={Headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:3003/Add_socialmedia',datastring,config)
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
    return(
        <>
          <div className="container-fluid">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-2">&nbsp;

                    </div>
                   
                    <div className="col-lg-8 bg-dark text-warning mt-5">
                       <form onSubmit={handlesubmit}> 
                        <h3 className="text-center p-5">Socialmedia Details</h3>
                           <label className="col-lg-4 p-2"> <h6>Git Hub link </h6></label>
                           <input type="text" name="github" id="github" className="col-lg-8"/>

                           <label className="col-lg-4 p-2"> <h6> Linked in link</h6></label>
                           <input type="text" name="linkedin" id="linkedin" className="col-lg-8"/>
                        <div className="text-center p-5 mt-2">
                          <div className="text-center p-1"><button   type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary">submit </button> 
                              <input type="hidden" name="userid" id="userid" value={userid} className="form-control"/>
                              <Link to="/dashboard" >&nbsp;
                                     <button className="btn btn-danger">Goback </button>    
                              </Link>
                          </div>
                        </div>
                      </form>

                    </div>
                    <div className="col-lg-2">&nbsp;

                    </div>

                   

                          

                </div>

            </div>





            <div className="container p-5">
             <div className="row">
               <div className="col-lg-2">&nbsp;</div>
               <div className=" table-responsive col-lg-8">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Git hub</th>
                            <th>linked in</th>
                            <th>edit</th>
                           

                        </tr>
                    </thead>
                    <tbody>
                        {
                            viewsocialmedia.map((v,i)=>(
                                <tr>
                                    <td>{v.github}</td>
                                    <td>{v.linkedin}</td>
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