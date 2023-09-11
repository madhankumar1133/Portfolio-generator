import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Signup } from './component/signup';
import { Signin } from './component/signin';
import {Dashboard} from './admin/dashboard';
import {Profilephoto} from './admin/profilephoto';
import { Education } from './admin/education';
import { Softskill } from './admin/softskill';
import { Certificate } from './admin/certificate';
import { Experience } from './admin/experience';
import { Portfolio } from './resume/portfolio';
import { Home1 } from './resume/home1';
import { About1 } from './resume/about1';
import { Education1 } from './resume/education1';
import { Certificate1 } from './resume/certificate1';
import { Softskill1 } from './resume/softskills1';
import { Contact1 } from './resume/contact1';
import { Socialmedia } from './admin/socialmedia';
import Updatesignup from './component/updatesignup';
import Profileupdate from './admin/profileupdate';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Signin/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profilephoto' element={<Profilephoto/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/softskill' element={<Softskill/>}/>
        <Route path='/certificate' element={<Certificate/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/socialmedia' element={<Socialmedia/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/home1' element={<Home1/>}/>
        <Route path='/about1' element={<About1/>}/>
        <Route path='/education1' element={<Education1/>}/>
        <Route path='/certificate1' element={<Certificate1/>}/>
        <Route path='/softskills1' element={<Softskill1/>}/>
        <Route path='/contact1' element={<Contact1/>}/>
        <Route path='/updatesignup' element={<Updatesignup/>}/>
        {/* <Route path='/profileupdate/:id' element={<Profileupdate/>}/> */}





      </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
