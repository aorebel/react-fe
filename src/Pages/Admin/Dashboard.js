import * as React from 'react';
import { useParams } from 'react-router-dom';

export default function Dashboard() {
    let { user }=useParams();
    return(
        <div>
            <h1 class="font-mono text-2xl">Hello to Dashboard {user}!</h1>
        </div>
    );
}