import * as React from 'react';
import SinglaPageNav from '../Nav/SinglePage';

export const SinglePageLayout = ({children}) =>{
    return(
        <>
            <div className="block">
                <SinglaPageNav />
                <div className="w-full">{children}</div>
            </div>
        </>
    ); 
}