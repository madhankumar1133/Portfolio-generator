import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export function Signup()
{
    
  const handlesubmit=(event)=>
  {
      event.preventDefault();
      var datastring=new FormData(event.target);
      var config={headers:{"enctype":"multipart/form-data"}};

      axios.post('http://localhost:3003/Regiester',datastring,config)
      .then(function(response){
        if(response.data.status === 'error'){
            alert('error');
            window.location.href="./signin";
        }
        else if(response.data.status === 'Registered'){
            alert('Successfully Registered');
            window.location.href="./signin";
        }
        else{
            alert('Contact Admin');
            window.location.href="./signin";
        }
    })
    .catch(function(error){
        alert('Error');
        window.location.href="./signin";
    })
  }


    return(
        <>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-3'>&nbsp;</div>
              <div className='col-lg-6'>
                <form onSubmit={handlesubmit}>
                  <div className='table-responsive mt-4'>
                    <table className=' table table-bordered'>
                      <thead>
                        <tr>
                          <th colSpan={2} className='text-center'>Registration Form</th>
                        </tr>
                      </thead>
                      <tbody className='text-center'>
                        <tr>
                          <td><label>Username</label></td>
                          <td><input type='text' name='username' id='username' className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>Password</label></td>
                          <td><input type='password' name='password' id='password' className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>name</label></td>
                          <td><input type='text' name='name' id='name' className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>Fathername</label></td>
                          <td><input type='text' name='fathername' id='fathername' className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>Date Of Birth</label></td>
                          <td><input type='date' name='date_of_birth' id='date_of_birth' className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>Email Id</label></td>
                          <td><input type='email' name='email' id='email' className='form-control'/></td>
                        </tr>
                        <tr>
                          <td><label>Phone number</label></td>
                          <td><input type='number' name='phone' id='phone' className='form-control'/></td>
                        </tr>
                        <tr>
                          <td colSpan={2}>
                            <button type='submit' name='data_submit' id='data_submit' value='submit' className='btn btn-primary'  >Register</button>
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



