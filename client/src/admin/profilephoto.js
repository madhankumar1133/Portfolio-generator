import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Header from './header';
import Menu from './menu';
import { Link } from 'react-router-dom';

export function Profilephoto(){

    let userid=localStorage.getItem('userid');
    const[viewphoto,setViewphoto]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:3003/View_profilephoto/'+userid)
        .then(response=>response.json())
        .then(json=>setViewphoto(json));

    },[]);

    const delete1=(id)=>{
      var key={id}
      var value={Headers:{"enctype":"multipart/form-data"}}

      axios.post("http://localhost:3003/Delete_profilephoto",key,value)
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
        var datastring=new FormData(event.target);
        var config={headers:{"enctype":"multipart/form-data"}};

        axios.post('http://localhost:3003/Add_profilephoto',datastring,config)
        .then(function(response){
            if(response.data.status ==='error'){
                alert('Efdyrdyr')
                window.location.reload();
            }
            else if(response.data.status === 'uploaded'){
                alert('File Uploaded')
                window.location.reload();
            }
            else{
                alert('contact admin')
                window.location.reload();
                
            }
        })
        .catch(function(error){
            alert(error);
            window.location.reload();
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
                    <form onSubmit={handlesubmit}>
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
                                            <input type='file' name='image' id='image' className='form-control'/>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Alternation tag</td>
                                        <td><input type='text' name='alt_text' id='alt_text' className='form-control'/></td>
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
            <div className='row mt-3'>
                <div className='col-lg-12'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <td>photo</td>
                                    <td>Alternation text</td>
                                    <td>EDIT</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    viewphoto.map((v,i)=>(
                                        <tr>
                                            <td><img src={v.url+'/'+v.filename} alr={v.alt_text}/></td>
                                            <td>{v.alt_text}</td>
                                            <td><button type="button" name="data_del" id="data_del" className="btn btn-danger" onClick={()=>{delete1(v.id)}}>Delete</button>
                                            {/* <Link to={"/profileupdate/"+v.id}><button type='submit' value="update" name="data_update" id="data_update" className='btn-success'>update</button></Link> */}
                                                </td>
                                        </tr>
                                    ))
                                }
                            </tbody>


                        </table>

                    </div>

                </div>

            </div>

        </div>    
        </>
    )
}