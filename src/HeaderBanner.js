import React from 'react'

export const HeaderBanner = () => {
    return (
        <section className='banner'>
            <div  className='container-banner'>
                <div className='img-logo-banner'>
                    <img src="https://pbs.twimg.com/profile_images/1002122442637238273/zRcDtN3r_400x400.jpg" alt='logo-empresa'/>

                </div>
                <div className='descripcion-banner'>
                    <span className='etiqueta-trabajo'>Trabajo</span>
                    <h1>Analista financiero</h1>
                    <span className='span-descripcion-banner'>Creada el 17 de noviembre de 2021</span>
                    <span className='span-descripcion-banner'>Portoviejo - Manabí</span>

                </div>
            </div>
            
            <div className='container-boton'>
                <button 
                    className='btn-postular-ahora-banner'
                >
                    Postular<i class="fas fa-plus-circle"></i>
                </button>
            </div>
        </section>
    )
}
