import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { SinglePageRouter, AdminRouter } from './Layouts/';


export default function BaseRouter(){
    let location = useLocation();
    let { name } = useParams();
    console.log({name}.toString().split().length);
    // if (location.pathname == '/dashboard'){
    //     return(
    //         <>
            
    //         <AdminRouter />
    //         <h1>You are currently on the <b>{location.pathname.toString().replace("/", "")}</b> page!</h1>
            
    //         </>
    //     );
    // }else{
    //     return(
    //         <SinglePageRouter />
    //     );
    // }

    switch (location.pathname){
        default:
            return(
                <SinglePageRouter />
            )
            
        case '/dashboard':
            return(
                <>
                <AdminRouter />
                <h1>You are currently on the <b>{location.pathname.toString().replace("/", "")}</b> page!</h1>
                </>
            );
        case '/dashboard/notif':
            return(
                <>
                <AdminRouter />
                <h1>You are currently on the <b>{location.pathname.toString().replace("/", "")}</b> page!</h1>
                </>
            );
        case '/dashboard/inbox':
            return(
                <>
                <AdminRouter />
                <h1>You are currently on the <b>{location.pathname.toString().replace("/", "")}</b> page!</h1>
                </>
            );
        case '/dashboard/profile':
            return(
                <>
                <AdminRouter />
                <h1>You are currently on the <b>{location.pathname.toString().replace("/", "")}</b> page!</h1>
                </>
            );
    }
    
}