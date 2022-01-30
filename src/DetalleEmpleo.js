import React from 'react'
import { CardDetalleEmpleo } from './CardDetalleEmpleo'
import { MenuDetalleEmpleo } from './MenuDetalleEmpleo'

export const DetalleEmpleo = () => {
    return (
        <>
            <MenuDetalleEmpleo />
            <div className='main-container'>
                <div className='detalle-item'>
                    <h1>Detalle de la Oferta</h1>
                    <div>
                        <h3>Descripción del puesto</h3>
                        <p>Leitat somos un Centro Tecnológico de Excelencia, que tenemos como objetivo colaborar con empresas e instituciones añadiendo valor tecnológico tanto a los productos como a los procesos, y centramos nuestras tareas en la investigación, el desarrollo y la innovación industrial (I+D+2i). </p>
                    </div>
                    <div>
                        <h3>Principales funciones:</h3>
                        <ul>
                            <li>Preparación de propuestas (nacionales e internacionales)</li>
                            <li>Ejecución de proyectos de investigación.</li>
                            <li>Interpretación de resultados y redacción de informes técnicos. Presentación de resultados técnicos a clientes.</li>
                            <li>Participación en congresos para difusión de resultados y formación especializada.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Formación y requisitos del puesto:</h3>
                        <ul>
                            <li>Licenciatura/Grado en: Química, Biología, Biotecnología, Ciencias Ambientales, Ingeniería Química o similar</li>
                            <li>Opcional: Máster o Doctorado en estudios de Química, Biotecnología o Medio Ambiente</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Experiencia:</h3>
                        <p>Experiencia en tecnologías físico-químicas y/o Biotecnologícas para la obtención de compuestos activos.</p>
                    </div>
                    <div>
                        <h3>Habilidades:</h3>
                        <ul>
                            <li>Elevada capacidad de trabajo</li>
                            <li>Iniciativa propia, recursos propios, autonomía</li>
                            <li>Capacidad de trabajar en equipo</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Ofrecemos:</h3>
                        <ul>
                            <li>Incorporación inmediata</li>
                            <li>Salario según valía</li>
                            <li>Jornada flexible</li>
                            <li>Ubicación: Vilanova del Camí</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Información adicional</h3>
                        <p>Catering Subvencionado</p>
                    </div>
                    <h1>Requisitos</h1>
                    <div>
                        <h3>Titulaciones para esta oferta</h3>
                        <ul>
                            <li>Biología y Licenciado en Bioquímica</li>
                            <li>Licenciatura</li>
                            <li>Eebe - Grado en Ingeniería Química</li>
                            <li>Enginyeria Química (Eng. Superior)</li>
                            <li>Enginyeria Química (Grau)</li>
                            <li>Enginyeria Química I De Tècniques De Bioprocessos Alimentaris (Doble Grau)</li>
                            <li>Grado en Ingeniería Química</li>
                            <li>Eseiaat - Grado en Ingeniería Química</li>
                            <hr />
                            <li>Ingeniería Química, Doctorado</li>
                            <li>Ingeniería Química, Grado</li>
                            <li>Ingeniería Química Industrial</li>
                            <li>Licenciatura</li>
                            <li>Ingeniería Química, Maestría / Máster</li>
                            <li>Biología, Maestría / Máster</li>
                            <li>Ciencias Ambientales, Doctorado</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Competencias</h3>
                        <span>Flexibilidad</span>
                        <span>Trabajo en equipo</span>
                        <span>Compromiso</span>
                    </div>

                    <div className='container-idiomas-experiencia'>
                        <div>
                            <h3>Idiomas requeridos</h3>
                            <p>Inglés</p>
                            <p>Catalán</p>
                        </div>

                        <div>
                            <h3>Experiencia</h3>
                            <p> Más de 5 años</p>
                        </div>
                    </div>
                    <h1>Condiciones Laborales</h1>
                    <div>
                        <h3>Jornada laboral</h3>
                        <p>Jornada parcial</p>
                        <h3>Tipo de contrato</h3>
                        <p>Contrato indefinido</p>
                        <h3>Horario de trabajo</h3>
                        <p>Lunes a viernes 08:30h a 17:00h</p>
                        <h3>Remuneración</h3>
                        <p>$20.000 al año</p>
                    </div>

                </div>
                {/* Aquí inicia mi tarjeta */}

                <div className='detalle-item'>
                    <CardDetalleEmpleo />
                </div>


            </div>
            
            



        </>
    )
}
