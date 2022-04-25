import * as React from 'react';
import { Routes, Route} from 'react-router-dom';
import { SinglePageLayout } from './SinglePageLayout.js';
import { AdminLayout } from './AdminLayout.js';
import Home from '../../Pages/Home.js';
import Dashboard from '../../Pages/Admin/Dashboard.js';

export const SinglePageRouter = () => {
    return(
        <>
        <SinglePageLayout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </SinglePageLayout>
        
        </>
    );
}
export const AdminRouter = () => {
    return(
        <>
        <AdminLayout>
            <Routes>
                <Route path="/dashboard/:user" element ={<Dashboard />} />
            </Routes>
        </AdminLayout>
        </>
        )
}