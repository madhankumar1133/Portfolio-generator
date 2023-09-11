import React from "react";
import axios from "axios";
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Menu from './menu';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Softskill()
{
    let userid=localStorage.getItem('userid');

    const[viewsoftskills,setViewsoftskills]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3003/View_softskills/'+userid)
        .then(response=>response.json())
        .then(json=>setViewsoftskills(json));
    },[]);

    const handlesubmit=(event)=>{
        event.preventDefault();
        var datastring=new FormData(event.target);
        var config={Headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:3003/Add_softskills',datastring,config)
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
  
        axios.post("http://localhost:3003/Delete_softskills",key,value)
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
          <div className="container p-5 bg-dark ">
            <h1 className="text-dark text-center p-2 bg-light" >Soft Skills</h1>
            
          <form onSubmit={handlesubmit}>  


            <div className="row p-2 text-warning ">
                <div className="col-lg-5 p-3">
    
                    <h3 className="text-center">Front End</h3>
                    <label className="col-lg-7 p-2 text-center"> <h6>HTML5</h6></label>
                    <select name="html" id="html" className="custom-select col-lg-5">
                       <option selected></option>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       {/* <option value="3.5">3.5</option> */}
                       <option value="4">4</option>
                       {/* <option value="4.5">4.5</option> */}
                       <option value="5">5</option>
                       <option value="6">6</option>
                    </select>

                    <label className="col-lg-7 p-2 text-center"> <h6>CSS</h6></label>
                    <select  name="css" id="css" className="custom-select col-lg-5">
                       <option selected></option>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       {/* <option value="3.5">3.5</option> */}
                       <option value="4">4</option>
                       {/* <option value="4.5">4.5</option> */}
                       <option value="5">5</option>
                       <option value="6">6</option>
                    </select>

                    <label className="col-lg-7 p-2 text-center"> <h6>Bootstrap</h6></label>
                    <select name="bootstrap" id="bootstrap" className="custom-select col-lg-5">
                       <option selected></option>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       {/* <option value="3.5">3.5</option> */}
                       <option value="4">4</option>
                       {/* <option value="4.5">4.5</option> */}
                       <option value="5">5</option>
                       <option value="6">6</option>
                    </select>

                    <label className="col-lg-7 p-2 text-center"> <h6>JavaScript</h6></label>
                    <select name="javascript" id="javascript" className="custom-select col-lg-5">
                       <option selected></option>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       {/* <option value="3.5">3.5</option> */}
                       <option value="4">4</option>
                       {/* <option value="4.5">4.5</option> */}
                       <option value="5">5</option>
                       <option value="6">6</option>
                    </select>
              
                   

                   
                   



                </div>
                <div className="col-lg-2 ">
                    &nbsp;

                </div>
                <div className="col-lg-5 p-3">
                <h3 className="text-center">Back End</h3>
                   
                    <label className="col-lg-7 p-2 text-center"> <h6>Java</h6></label>
                    <select  name="java" id="java" className="custom-select col-lg-5">
                       <option selected></option>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       {/* <option value="3.5">3.5</option> */}
                       <option value="4">4</option>
                       {/* <option value="4.5">4.5</option> */}
                       <option value="5">5</option>
                       <option value="6">6</option>
                    </select>

                    <label className="col-lg-7 p-2 text-center"> <h6>node Js</h6></label>
                    <select name="nodejs" id="nodejs" className="custom-select col-lg-5">
                       <option selected></option>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       {/* <option value="3.5">3.5</option> */}
                       <option value="4">4</option>
                       {/* <option value="4.5">4.5</option> */}
                       <option value="5">5</option>
                       <option value="6">6</option>
                    </select>
                   



                </div>
                <div className="col-lg-5 p-3">
    
                    <h3 className="text-center"> Frame Work</h3>
                    <label className="col-lg-7 p-2 text-center"> <h6>React Js</h6></label>
                    <select name="reactjs" id="reactjs" className="custom-select col-lg-5">
                       <option selected></option>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       {/* <option value="3.5">3.5</option> */}
                       <option value="4">4</option>
                       {/* <option value="4.5">4.5</option> */}
                       <option value="5">5</option>
                       <option value="6">6</option>
                    </select>
                    

              
                    

                </div>
                <div className="col-lg-2">
                    &nbsp;

                </div>
                <div className="col-lg-5 p-3">
                <h3 className="text-center">Database</h3>
                <label className="col-lg-7 p-2 text-center"> <h6>MySQL</h6></label>
                    <select name="mysql" id="mysql" className="custom-select col-lg-5">
                       <option selected></option>
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       {/* <option value="3.5">3.5</option> */}
                       <option value="4">4</option>
                       {/* <option value="4.5">4.5</option> */}
                       <option value="5">5</option>
                       <option value="6">6</option>
                    </select> 

                   



                </div>
      


            </div>
            <div className="text-center mt-1 ">
                
                <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary m-3">submit </button> 
                <input type="hidden" name="userid" id="userid" value={userid} className="form-control"/>
                <Link to="/dashboard" >
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
                            <th>HTML5</th>
                            <th>CSS3</th>
                            <th>Bootstrap</th>
                            <th>javascript</th>
                            <th>Java</th>
                            <th>nodejs</th>
                            <th>reactjs</th>
                            <th>mysql</th>
                            <th>edit</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            viewsoftskills.map((v,i)=>(
                                <tr>
                                    <td>{v.html}</td>
                                    <td>{v.css}</td>
                                    <td>{v.bootstrap}</td>
                                    <td>{v.javascript}</td>
                                    <td>{v.java}</td>
                                    <td>{v.nodejs}</td>
                                    <td>{v.reactjs}</td>
                                    <td>{v.mysql}</td>
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