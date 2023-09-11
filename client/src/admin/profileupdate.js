import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Header from './header';
import Menu from './menu';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from'axios';

export default function Profileupdate(){
    let userid=localStorage.getItem('userid');
    const {id}=useParams(); 
    
    const [filename,setFilename]=useState('');
    const [alt_text,setAlt_text]=useState('');

    useEffect(()=>{
        fetch('http://localhost:3003/Profile_up_get/'+id)
        .then(response=>response.json())
        .then(function(res)
        {
            setFilename(res[0].filename);
            setAlt_text(res[0].alt_text);
        })
        .catch(function(error){
            alert(error);
            window.location.reload();
        }
        )
    },[])


    const handleupdate= async (event)=>{
        
        event.preventDefault();
        var datastring =new FormData(event.target);
        var config={Headers:{'enctype':'multipart/form-data'}}

        await axios.put('http://localhost:3003/Update_profilephoto/'+id+'',datastring,config)
        .then(function(response)
        {
            if(response.data.status==='error')
            {
                alert('query error');
                window.location.href = "/";
            }
            else if(response.data.status==='success')
            {
                alert('successfully regiestered');
                window.location.href ="/dashboard";
            }
            else{
                alert('conact admin');
                window.location.href = "/";
            }
        })

        .catch(function(error)
        {
            if(error)
            {
                alert('Error');
                window.location.href = "/";
            }
        })

    }

    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <Header />
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3"><Menu /></div>
                <div className="col-lg-9">
                    <form onSubmit={handleupdate}>
                        <div className="table-responsive mt-3">
                            <table width={50} className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Profilephoto</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td>photo</td>
                                        <td>
                                        <input type='hidden' name='userid' id='userid' value={userid}/>
                                            <input type='file' name='image' id='image'  onChange={(e)=>setFilename(e.target.value)} className='form-control'/>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Alternation tag</td>
                                        <td><input type='text' name='alt_text' id='alt_text' value={alt_text} onChange={(e)=>setAlt_text(e.target.value)} className='form-control'/></td>
                                    </tr>
                                    <tr>
                                         <td colSpan={2}>
                                           <button type="submit" name="data_submit" id="data_submit"
                                                    value="submit" className="btn btn-primary">
                                                submit
                                            </button>
                                         </td>
                                    </tr>
                                </tbody>

                            </table>

                        </div>

                    </form>
                </div>
            </div>
            
        </div>
        </>
    );
}