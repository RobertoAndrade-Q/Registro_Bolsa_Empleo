import React, { useEffect, useState } from 'react';
import instance from '../utils/Instance';

export const RegistroApp = () => {

    const [estado,setEstado] = useState(false); 
    const [listaTipoIdentificaciones, setlistaTipoIdentificaciones] = useState([]);
    const [tipoUsuario, setTipoUsuario] = useState([]);
    const [objRegister, setObjRegister] = useState({
        ct_tipoidentificacion:0,
        numeroidentificacion:'',
        nombrecompleto:'',
        razon_social:'',
        correo:'',
        ct_tipousuario:0,
        contrasena:'',
        confirmacontrasena:'',
        observacion:''
    });

    useEffect(()=>{
        instance.get('/detallecatalogo/child/1')
        .then(resp => {

            if (resp.data.statusCode === 200){
                setlistaTipoIdentificaciones(resp.data.data);
            } else{
                console.log('Hubo un error');
            }
        });
        instance.get('/detallecatalogo/child/2')
        .then(resp => {

            if (resp.data.statusCode === 200){
                setTipoUsuario(resp.data.data);
            } else{
                console.log('Hubo un error');
            }
        });
    }, [])


    const createChangeHandler = e => {
        const { name } = e.target;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setObjRegister(prev => ({ ...prev, [name]: value }));
    }
    

    function saveRegistro ()  {
        console.log(objRegister);
        instance.post('/usuario/create',objRegister)
        .then(resp => {
            if (resp.data.statusCode === 200){
                alert('creado');
            } else{
                console.log('Hubo un error');
            }
        });
    }
    return (
        <section className='fondo-principal'>
            <div className="contenedor-registro">
                <div className="header-registro">
                    {/* <span><i class="fas fa-home"></i></span> */}
                    <a href="/">
                        <img src="https://www.utm.edu.ec/images/pagina_nueva/logo.png" alt="Logo UTM " />
                    </a>
                </div>
                <h1>Registrate</h1>
                <form action="">
                    <select 
                     name="ct_tipoidentificacion" 
                     value={objRegister.ct_tipoidentificacion}
                     onChange={createChangeHandler}
                    >
                        <option selected value={0} disabled>Tipo de identificación</option>
                        { listaTipoIdentificaciones.map((value, index) => {
                            return (
                                <option value= {value.id} >{value.descripcion}</option>
                            )
                        })

                        }
                    </select>
                    

                    <input 
                        type="text" 
                        name="numeroidentificacion"
                        maxLength={13}
                        value={objRegister.numeroidentificacion}
                        placeholder="Ingrese numero identificacion..." 
                        onChange={createChangeHandler}
                    />
                     <input 
                        type="text" 
                        name="nombrecompleto"
                        value={objRegister.nombrecompleto}
                        onChange={createChangeHandler}
                        placeholder="Nombre reprersentante"
                    />
                    <input 
                        type="text" 
                        name="razon_social"
                        value={objRegister.razon_social}
                        onChange={createChangeHandler}
                        placeholder="Nombre o razón social"
                    />
                    <input 
                        type="email" 
                        name="correo"
                        value={objRegister.correo}
                        onChange={createChangeHandler}
                        placeholder="Correo electrónico"
                    />
                    <input 
                        type="password" 
                        name="contrasena"
                        value={objRegister.contrasena}
                        onChange={createChangeHandler}
                        placeholder="Contraseña"
                    />
                    <select 
                    name="ct_tipousuario" 
                    value={objRegister.ct_tipousuario}
                    onChange={createChangeHandler}
                    >
                        <option selected disabled value={0}>Tipo de Cuenta</option>
                        { tipoUsuario.map((value, index) => {
                            return (
                                <option value= {value.id} >{value.descripcion}</option>
                            )
                        })

                        }
                    </select>
                    <textarea 
                    name="observacion"
                    value={objRegister.observacion}  onChange={createChangeHandler} id="" cols="30" rows="10" maxlength="255" placeholder="Describase a usted y a sus servicios"></textarea>
                    <button
                        type='button'
                        className='boton-registro'
                        onClick={saveRegistro}
                    >
                        Registrarse
                    </button>
                </form>
                
            </div>
        </section>
    )
}

