import * as React from 'react';
import {Link} from 'react-router-dom';

export default function SinglaPageNav(){
    return(
        <nav class="flex pt-8 pb-8">
            <h1 class="flex-none pl-16 font-sans font-thin text-3xl" >AvinDev</h1>
            <ul class="flex-1 pt-2 font-sans font-light text-lg ">
                <span class="float-right pr-16">
                <Link to="/" class="pl-4 pr-4">Home</Link>|
                <Link to="/about" class="pl-4 pr-4">About</Link>|
                <Link to="/gallery" class="pl-4 pr-4">Gallery</Link>|
                <Link to="/dashboard" class="pl-4 pr-4">Dashboard</Link>
                </span>
                
            </ul>
        </nav>
    );
}