import * as React from 'react';
import {Link} from 'react-router-dom';

export default function AdminNav(){
    //let {user} = useParams();
    return(
        <nav class="flex pt-4 pb-4">
            <h1 class="flex-none pl-16 font-sans font-thin text-2xl" >AvinDev</h1>
            <ul class="flex-1 pt-2 font-sans font-light text-md ">
                <span class="float-right pr-2">
                <Link to="/dashboard/notif" class="pl-4 pr-4">Notifications</Link>
                <Link to="/dashboard/inbox" class="pl-4 pr-4">Inbox</Link>
                <Link to="/dashboard/profile" class="pl-4 pr-4">Profile</Link>|
                <Link to="/" class="pl-4 pr-4">Logout</Link>
                </span>
                
            </ul>
        </nav>
    );
}