import react from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Home1 } from './home1';
import { About1 } from './about1';
import { Education1 } from './education1';
import { Certificate1 } from './certificate1';
import { Softskill1 } from './softskills1';
import { Contact1 } from './contact1';


export function Portfolio()
{
    return(
        <>
        <Home1/>
        <About1/>
        <Education1/>
        <Softskill1/>
        <Certificate1/>
        <Contact1/>

        </>
    );
}