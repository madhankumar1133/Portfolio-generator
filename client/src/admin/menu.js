import {Link} from 'react-router-dom';

export default function Menu(){
    return(
        <>

        <div className='table-responsive'>
            <table classname='table-bordered'>
                <thead className=" shadow-sm p-3 mb-5 bg-white rounded text-center">
                     <tr >
                        <th ><h3>User Details</h3></th>
                     </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='shadow-sm p-3 mb-5 bg-white rounded text-center '>
                        <Link to="/Dashboard">Home</Link>
                        </td>
                    </tr><br/>
                    <tr className=' shadow-sm p-3 mb-5 bg-white rounded text-center'>
                        <td>
                        <Link to="/Profilephoto">Profile Photo</Link>
                        </td>
                    </tr><br/>
                    <tr className=' shadow-sm p-3 mb-5 bg-white rounded text-center'>    
                        <td>
                            <Link to="/Education">Education</Link>
                        </td>

                    </tr><br/>
                    <tr className=' shadow-sm p-3 mb-5 bg-white rounded text-center'>    
                        <td>
                            <Link to="/Softskill">Soft Skill</Link>
                        </td>

                    </tr><br/>
                    {/* <tr className=' shadow-sm p-3 mb-5 bg-white rounded text-center'>    
                        <td>
                            <Link to="/Experience">Experience</Link>
                        </td>

                    </tr><br/> */}
                    <tr className=' shadow-sm p-3 mb-5 bg-white rounded text-center'>    
                        <td>
                            <Link to="/Certificate">Certificate</Link>
                        </td>

                    </tr><br/>
                    <tr className=' shadow-sm p-3 mb-5 bg-white rounded text-center'>    
                        <td>
                            <Link to="/Socialmedia">Socialmedia</Link>
                        </td>

                    </tr>
                   
                </tbody>



            </table>

        </div>
        
        
        </>
    )
}