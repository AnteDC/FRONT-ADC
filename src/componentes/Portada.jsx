import React from 'react';
import ModalContacto from '../componentes/modales/Contactenos';
import ModalEquipo from '../componentes/modales/Equipo';
import Imagen1 from '../images/imagen1.png';
import Imagen2 from '../images/imagen2.png';
import Imagen3 from '../images/imagen3.png';

const Portada = () => {
    return (
        
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 ps-4 d-flex justify-content-center align-items-center order-2 order-md-1">
                        <div>
                            <h1>
                                ¿Quiénes somos?
                            </h1>
                            <p>
                            Somos una empresa dedicada a la atención domiliaria para mascotas, con toda clase de servicios relacionados con Veterinaria, Belleza, Celebraciones y SPA.

Desde el año 2012, contamos con un equipo altamente calificado de profesionales expertos en salud animal, ofreciendo a las mascotas excelente atención y cuidado
                            </p>

                            <h2>
                                Misión
                            </h2>
                            <p>
                            Somos un grupo de profesionales con excelente capacidad y productividad que implementa los más estictos estándares de calidad bajo principios éticos y legales, convencidos de que lo más importante que tenemos son nuestros clientes, al igual que nuestros empleados y proveedores.

                            Nos distinguimos por nuestra capacidad de trabajo en equipo, ofreciendo nuestros productos y servicios, diferenciados por el alto nivel de calidad y cumplimiento.
                            </p>

                            <h2>
                                Visión
                            </h2>
                            <p>
                            Nos proyectamos como una gran empresa especializada en productos y servicios para mascotas. Contamos con un selecto equipo de personal profesional y técnico, que busca cada día prestar un mejor servicio
                            </p>

                            <h2>
                                Valores corporativos
                            </h2>

                            <p>
                                Puntualidad, Calidad, Responsabilidad y Honestidad.
                            </p>
                            


                            



                            <div className="btn btn-info"><ModalContacto /></div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2">
                        <img alt='' src={Imagen1} className="radius-50 img-80 py-3" />
                    </div>
                </div>
                <hr className="m-5" />
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img alt='' src={Imagen2} className="radius-50 img-80 py-3" />
                    </div>
                    <div className="col-md-6 pe-4 d-flex justify-content-center align-items-center">
                        <div>
                            <h1>
                                Servicios
                            </h1>

                            <h2>
                                BELLEZA Y SPA
                            </h2>

                            <p>
                            Cuenta con el servicio de baño, grooming y peluqueria siempre enfocado a realzar la belleza de la mascota, guiándonos por los estándares mundiales de cada una de las razas, implementando técnicas de vanguardia y utilizando materiales e insumos de primera calidad, siempre dirigidos a disminuir el estrés durante el servicio para obtener una experiencia agradable y de máximo bienestar para la mascota logrando el mejor resultado, así como la tranquilidad y seguridad de nuestros clientes.
                            </p>

                            <h2>
                                ETOLOGÍA
                            </h2>

                            <p>
                            Si tu mascota es agresiva, demasiado inquieta, nerviosa o si todos los días destruye algo dentro del hogar, se orina o defeca en medio de tu sala o arriba del colchón, tal vez tiene un problema. La etología es un nuevo campo de especialidad en la medicina veterinaria, el cual se encarga de la prevención, diagnóstico y tratamiento de los problemas de comportamiento en perros y gatos.
                            </p>


                            <button className="btn btn-info">Más información</button>
                        </div>
                    </div>
                </div>
                <hr className="m-5" />
                <div className="row">
                    <div className="col-md-6 ps-4 d-flex justify-content-center align-items-center order-2 order-md-1">
                        <div>
                            <h1>
                                Nuestro equipo
                            </h1>
                            <p>
                            Nuestro equipo está compuesto por cincoexpertos profesionales participantes de MISIONTIC 2022 cuya motivación y dedicación a su trabajo es vital para el éxito.
Ofrecer a nuestros clientes y sus mascotas un entorno que no solo es seguro, sino donde además puedan disfrutar de momentos de esparcimiento, relajación y salud, independientemente del lugar de la ciudad en el que se encuentren.
 

                            </p>
                            <p>
                            Todo el personal que labora con nosotros recibe las herramientas que le ayudarán a tener éxito a través de formación, desafíos y oportunidades. Siempre son bienvenidas las ideas de aquellos que buscan el crecimiento y apoyan a nuestra empresa y a nuestros clientes.

Con una comunicación abierta ofrecemos oportunidades a nuestros equipos para que el personal se desarrolle en su profesión. Los equipos trabajan en estrecha colaboración entre ellos, en todas las ubicaciones de la ciudad, con el fin de prestar los mejores servicios.

Además de esto, promovemos las actividades de recreación, entre ellas se incluyen deportes, trabajos de voluntariado, días en familia, entre otros.
                            

                            </p>
                            <div className="btn btn-info"><ModalEquipo /></div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2">
                        <img alt='' src={Imagen3} className="radius-50 img-80 py-3" />
                    </div>

            


                </div>
            </div>
        </div>
        
    )
}




export default Portada
