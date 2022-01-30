import React from 'react'
import { DetalleEmpleo } from '../DetalleEmpleo'
import { HeaderBanner } from '../HeaderBanner'
import { Navbar } from '../Navbar'

export const CardApp = () => {
    return (
        <>
            <Navbar />
            <HeaderBanner />
            <main className='container'>
                <DetalleEmpleo />      

            </main>
        
        </>
    )
}
