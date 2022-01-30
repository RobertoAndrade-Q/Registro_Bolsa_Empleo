import React from 'react';

export const NuevaPublicacion = () => {
  return(
    <div>
        <fieldset className='container'>
            <form 
                className='container'
            >
                <h2>Detalle de la Oferta</h2>    
                <label> Titulo de la oferta </label>
                <br />
                <input 
                    placeholder='Título'
                />
                <br />
                <br />    
                <label> Descripción deel puesto </label>
                <br />
                <textarea 
                    placeholder='Descripción de la Oferta'
                />    
                <br />
                <br />    
                <label> Habilidades </label>
                <br />
                <textarea 
                />    
                <br />
                <br />    
                <label> Ofrecemos </label>
                <br />
                <textarea 
                />    
                <br />
                <br />    
                <label> Información adicional </label>
                <br />
                <textarea 
                />
                <hr />
                <h2>Requisitos</h2>    
                
                <label> Titulaciones para esta oferta </label>
                <br />
                <textarea 
                />    
                <br />
                <br />    
                <label> Competencias </label>
                <br />
                <textarea 
                />
                <br />
                <br />    
                <label> Idiomas requeridos </label>
                <br />
                <input 
                    placeholder='Ingles, Frances, etc'
                />
                <select>
                    <option>Básico</option>
                    <option>Intermedio</option>
                    <option>Alto</option>
                    <option>Nativo</option>
                </select>
                <br />
                <br />    
                <label> Experiencia </label>
                <br />
                <textarea 
                />
                <h2>Condiciones laborales</h2>   
                <label> Jornada Laboral </label>
                <br />
                <input 
                    type="text"
                    placeholder='Jornada parcial'
                />
                <br />
                <br />    
                <label> Tipo de Contrato </label>
                <br />
                <input 
                    type="text"
                    placeholder='Contrato indefinido'
                />
                <br />
                <br />    
                <label> Remuneración </label>
                <br />
                <input 
                    type="text"
                    placeholder='$10.000 al año'
                />
                <br />
                <br />   
                <label> Horario de Trabajo </label>
                <br />   
                <input 
                    type="date"
                />
            </form>     
        </fieldset>
        
    </div>
  );

};
