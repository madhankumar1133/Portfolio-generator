import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Updatesignup()
{  
  
  
  let userid = localStorage.getItem('userid');
    // const {userid}=useParams();
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState('');
    const [fathername,setFathername]=useState('');
    const [date_of_birth,setDate_of_birth]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    
    useEffect(()=>{
        fetch('http://localhost:3003/Upd/'+userid)
        .then(response=>response.json())
        .then(function(res){
            setUsername(res[0].username);
            setPassword(res[0].password);
            setName(res[0].name);
            setFathername(res[0].fathername);
            setDate_of_birth(res[0].date_of_birth);
            setEmail(res[0].email);
            setPhone(res[0].phone);

        })
        .catch(function(error){
           alert(error);
        //    window.location.reload();
               
        })
    },[])
    
 const handleupdate=async(event)=>{
  event.preventDefault();
  var datastring=new FormData(event.target);
  var config={Headers:{"enctype":"multipart/form-data"}}

  axios.post('http://localhost:3003/Update_regdata/'+userid+'',datastring,config)
  .then(function(response){
    if(response.data.status==='error'){
      alert('Query error');
      window.location.reload();
    }
    else if(response.data.status==='success')
    {
      alert('update successfully');
      window.location.href="/dashboard";
    }
    else{
      alert('contact admin');
      window.location.reload();
      
    }
  })

  .catch(function(error)
  {
    if(error)
    {
      alert('error');
      window.location.reload();
    }
  })
 }
   
   

    return(
        <>
        <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-3'>&nbsp;</div>
              <div className='col-lg-6'>
                <form onSubmit={handleupdate}>
                  <div className='table-responsive mt-4'>
                    <table className=' table table-bordered'>
                      <thead>
                        <tr>
                          <th colSpan={2} className='text-center'>Regiestration Form</th>
                        </tr>
                      </thead>
                      <tbody className='text-center'>
                        <tr>
                          <td><label>Username</label></td>
                          <td><input type='text' name='username' id='username' value={username} onChange={(e)=>setUsername(e.target.value)} className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>Password</label></td>
                          <td><input type='password' name='password' id='password'value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>name</label></td>
                          <td><input type='text' name='name' id='name' value={name} onChange={(e)=>setName(e.target.value)} className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>Fathername</label></td>
                          <td><input type='text' name='fathername' id='fathername' value={fathername} onChange={(e)=>setFathername(e.target.value)} className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>Date Of Birth</label></td>
                          <td><input type='date' name='date_of_birth' id='date_of_birth' value={date_of_birth} onChange={(e)=>setDate_of_birth(e.target.value)} className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>Email Id</label></td>
                          <td><input type='email' name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>Phone number</label></td>
                          <td><input type='number' name='phone' id='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} className='form-control'/></td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <button type='submit' name='data_submit' id='data_submit' value='submit' className='btn btn-primary'  >Regiester</button>
                          </td>
                        </tr>

                      </tbody>


                    </table>

                  </div>
                </form>
                

              </div>
              <div className='col-lg-3'>&nbsp;</div>

            </div>
            
          </div>
        </>
    );
}