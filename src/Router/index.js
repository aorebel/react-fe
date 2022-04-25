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
                <AdminRouter />
            )
            
        case '/':
            return(
                <>
                <SinglePageRouter />
                <h1>You are currently on the <b>{location.pathname.toString().replace("/", "")}</b> page!</h1>
                </>
            );
        case '/about':
            return(
                <>
                 <SinglePageRouter />
                <h1>You are currently on the <b>{location.pathname.toString().replace("/", "")}</b> page!</h1>
                </>
            );
        case '/gallery':
            return(
                <>
                 <SinglePageRouter />
                <h1>You are currently on the <b>{location.pathname.toString().replace("/", "")}</b> page!</h1>
                </>
            );
        // case '/dashboard/profile':
        //     return(
        //         <>
        //         <AdminRouter />
        //         <h1>You are currently on the <b>{location.pathname.toString().replace("/", "")}</b> page!</h1>
        //         </>
        //     );
    }
    
}