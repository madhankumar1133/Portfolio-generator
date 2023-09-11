import axios from "axios";
import {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Header(){

    let userid = localStorage.getItem('userid');
    let [username,setusername] = useState('');

    useEffect(()=>{
        fetch('http://localhost:3003/View_par_user/'+userid)
        .then(responsive=>responsive.json())
        .then(json=>setusername(json.status))
    },[]);

    return(
        <>
        <div className="col-lg-3 p-5">
            <label><h1 className="text-primary">Portfolio</h1></label>
        </div>
        <div className="col-lg-6">&nbsp;</div>
        <div className="col-lg-3 text-dark p-5">
            <label ><h3>{username}</h3></label>&nbsp;
            <Link to="/signin">
                <button type="button" className="btn btn-danger">Logout</button>
            </Link>
        </div>
        </>
    )
}