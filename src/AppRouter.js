import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { CardApp } from './card/CardApp';

import { Navbar } from './Navbar';
import { NuevaPublicacion } from './NuevaPublicacion';
import { RegistroApp } from './Registro/RegistroApp';

export const AppRouter = () => {
    return (
        <Router>
            <>

                <Routes>
                    <Route 
                        path="/register" 
                        element = { <RegistroApp /> } 
                    />

                    <Route 
                        path="/dashboard-empresas/new-publication" 
                        element = { <NuevaPublicacion /> } 
                    />

                    <Route path="*" element = { <CardApp />} />


                </Routes>


            </>
        </Router>
    )
}
