import * as React from 'react';
import AdminSideNav from '../Nav/AdminSideNav';
import AdminNav from '../Nav/AdminNav';

export const AdminLayout = ({children}) =>{
    return(
        <>
            
            <div class="grid grid-rows-3 grid-cols-8 grid-flow-col gap-4">
                <div class="row-span-3 col-span-1">
                    <AdminSideNav />
                </div>
                <div class="col-span-7">
                    <AdminNav />
                    
                </div>
                <div className="w-full" class="row-span-2 col-span-7">{children}</div>
            </div>
            
        </>
    );
}