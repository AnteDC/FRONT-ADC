//import React, { useEffect,useState} from 'react'
import React, { useState,useEffect } from 'react'

import Swal from 'sweetalert2'
import Axios from 'axios'
export default function RegistrarPersona() {
  const [nombres,setNombres]=useState('')
  const[apellidos,setApellidos]=useState('')
  const[direccion,setDireccion]=useState('')
  const[celular,setCelular]=useState('')
  const[estadoServicio,setEstadoServicio]=useState([])
  const[estadoServicioSelect,setEstadoServicioSelect]=useState([])
  const[servicioSolicitado,setServicioSolicitado]=useState([])
  const[servicioSolicitadoSelect,setServicioSolicitadoSelect]=useState([])


  useEffect(()=>{
    setEstadoServicio(['Ejecutado','Programado','Cancelado'])
    setEstadoServicioSelect('Ejecutado')

    setServicioSolicitado(['Ninguno','Peluquería','Veterinaria','SPA','Etología','Servicio completo'])
    setServicioSolicitadoSelect('Ninguno')

  },[])


  const guardar = async(e)=>{
    e.preventDefault()
    const usuario= {
      nombres,
      apellidos,
      direccion,
      celular,
      estadoServicio:estadoServicioSelect,
      servicioSolicitado:servicioSolicitadoSelect,
      ciudad: sessionStorage.getItem('idUsuario'),
      ciudadNombre :sessionStorage.getItem('nombre')

    }

    if(nombres===""){

      Swal.fire({
        icon:'error',
        title:"Debe escribir un nombre",
        showConfirmButton:false,
        timer:1500
      })

    }


    else if(apellidos===""){

      Swal.fire({
        icon:'error',
        title:"Debe escribir un apellido",
        showConfirmButton:false,
        timer:1500
      })

    }


    else if(direccion===""){

      Swal.fire({
        icon:'error',
        title:"Debe escribir una direccion válida",
        showConfirmButton:false,
        timer:1500
      })

    }


    else if(celular===""){

      Swal.fire({
        icon:'error',
        title:"Debe escribir un número de contacto",
        showConfirmButton:false,
        timer:1500
      })

    }


    else {

      const token = sessionStorage.getItem('token')
      const respuesta = await Axios.post('/persona/crear',usuario,{

       headers:{'autorizacion':token}


      })
      const mensaje= respuesta.data.mensaje
      console.log(mensaje)


      Swal.fire({
        icon:'success',
        title:mensaje,
        showConfirmButton:false,
        timer:1500
      })

      e.target.reset();
      setNombres("");
      setApellidos("");
      setDireccion("");
      setCelular("");





    }
  }


  return (

  

<div className="container mt-4">
        <div className="row">
          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="card-header bg-info text-center">
                <h4>Registrar Clientes</h4>
              </div>
              <div className="card-body">
                <form onSubmit={guardar}>
                  <div className="row">

                    <div className="col-md-6">
                      <label>Nombres</label>
                      <input type="text" className="form-control required" onChange={(e)=>setNombres(e.target.value)} />
                    </div>

                    <div className="col-md-6">
                      <label>Apellidos</label>
                      <input type="text" className="form-control required" onChange={(e)=>setApellidos(e.target.value)} />
                    </div>

                    <div className="col-md-6">
                      <label>Dirección</label>
                      <input type="text" className="form-control required" onChange={(e)=>setDireccion(e.target.value)} />
                    </div>

                    <div className="col-md-6">
                      <label>Celular</label>
                      <input type="text" className="form-control required" onChange={(e)=>setCelular(e.target.value)} />
                    </div>


                    {/* <div className="col-md-6">
                      <label>Cedula</label>
                      <input type="text" className="form-control required" />
                    </div> */}


                    {/* <div className="col-md-6">
                      <label>Telefono</label>
                      <input type="text" className="form-control required" />
                    </div> */}

                    <div className="col-md-6">
                      <label>Servicio Solicitado</label>

                      <select className='form-control' onChange={(e) => setServicioSolicitadoSelect(e.target.value)}>

                        {
                            servicioSolicitado.map(servicioSolicitado => (
                                <option key={servicioSolicitado}>
                                    {servicioSolicitado}

                                </option>
                            ))


                        }
                        </select>
                    </div>


                    <div className="col-md-6">
                      <label>Estado del servicio</label>
                      <select className='form-control' onChange={(e) => setEstadoServicioSelect(e.target.value)}>

                          {
                              estadoServicio.map(estadoServicios => (
                                  <option key={estadoServicios}>
                                      {estadoServicios}

                                  </option>
                              ))


                          }
                          </select>
                    </div>


                  </div>
                    <br />
                  <button type="submit" class="btn btn-outline-info">
                      
                    <span class="fa fa-save"></span> Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    
    
      
   
  );
}
