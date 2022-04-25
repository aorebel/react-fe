import * as React from 'react';
import {Link} from 'react-router-dom';

export default function AdminSideNav(){
    return(
        <nav class="">
            <h1 class="text-2xl font-extralight pt-4 pb-4" >Sidebar</h1>
             <hr />
            <ul class="font-light">
                <li class="pt-4 pb-4">
                    <Link to="/dashboard/menu1" class="">Menu 1</Link>
                </li>
                <li class="pt-4 pb-4">
                    <Link to="/dashboard/menu2" class="">Menu 2</Link>
                </li>
                <li class="pt-4 pb-4">
                    <Link to="/dashboard/menu3" class="">Menu 3</Link>
                </li>
                <li class="pt-4 pb-4">
                    <Link to="/dashboard/menu4" class="">Menu 4</Link>
                </li>
            </ul>
                    
            
        </nav>
    );
}