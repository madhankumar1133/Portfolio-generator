import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Menu from './menu';
import {useState,useEffect} from 'react';
import './dashboard.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export  function Dashboard(){

    let userid = localStorage.getItem('userid');
    const [userdetails,setUserdetails] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3003/Get_userdetails/'+userid)
        .then(responsive=>responsive.json())
        .then(json=>setUserdetails(json));
    },[]);
  const delete1=(id)=>{
    
   var key={id};
   var value={Headers:{"enctype":"multipart/form-data"}}

   axios.post('http://localhost:3003/Delete_personaldetails',key,value)
   .then(function(response){
    if(response.data.status==='error')
    {
        alert('Query error');
        window.location.reload();

    }
    else if(response.data.status==='success')
    {
        alert('your account was deleted');
        window.location.href='/';
    }
    else{
        alert('contact admin');
    }
   })

  }

    return(
        <>
        
        <div className="container-fluid  ">
            <div className="row">
                <Header />
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3"><Menu /></div>
                <div className="col-lg-9">
                    <div className="table-responsive mt-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr className='text-center text-primary'>
                                    <th>Name</th>
                                    <th>Fathername</th>
                                    <th>Date of Birth</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>edit</th>
                                    <th>delete</th>
                                </tr>
                            </thead>
                            <tbody className='text-center text-dark'>
                            {
                                userdetails.map((v,i)=>(
                                    <tr>
                                        <td>{v.name}</td>
                                        <td>{v.fathername}</td>
                                        <td>{v.date_of_birth}</td>
                                        <td>{v.email}</td>
                                        <td>{v.phone}</td>
                                        <td> <Link to="/updatesignup"> <button type="submit" name="data_submit" id="data_submit" value="update" className="btn btn-success">update </button> 
                                        </Link>

                                        </td>
                                        <td><button type="button" name="data_del" id="data_del" className="btn btn-danger" onClick={()=>{delete1(v.id)}}>Delete</button></td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
            <Link to="/portfolio" >
                 
                  <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary m-3">submit </button> 
   
            </Link>
        </div>
    
        </>
    )
}