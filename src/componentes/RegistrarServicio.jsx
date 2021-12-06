//import React, { useEffect,useState} from 'react'
import React, { useState,useEffect } from 'react'

import Swal from 'sweetalert2'
import Axios from 'axios'
export default function RegistrarServicio() {
  const [nombre,setNombres]=useState('')
  
  const[precio,setPrecio]=useState('')
  const[categoria,setCategoria]=useState([])
  const[categoriaSelect,setCategoriaSelect]=useState([])
  const[prestador,setPrestador]=useState([])
  const[prestadorSelect,setPrestadorSelect]=useState([])


  useEffect(()=>{
    setCategoria(['Belleza','Veterinaria','Spa','Etología'])
    setCategoriaSelect('Belleza')

    setPrestador(['Ninguno','ANA PEREZ','JUAN SOLER','EVA VIÑA','SAUL PIO','SOL GOMEZ','LUZ REYES'])
    setPrestadorSelect('Ninguno')

  },[])


  const guardar = async(e)=>{
    e.preventDefault()
    const usuario= {
      nombre,
      precio,
      categoria:categoriaSelect,
      prestador:prestadorSelect,
      ciudad: sessionStorage.getItem('idUsuario'),
      ciudadNombre :sessionStorage.getItem('nombre')

    }

    if(nombre===""){

      Swal.fire({
        icon:'error',
        title:"Debe escribir un nombre",
        showConfirmButton:false,
        timer:1500
      })

    }


        
    else if(precio===""){

      Swal.fire({
        icon:'error',
        title:"Debe escribir el precio del servicio",
        showConfirmButton:false,
        timer:1500
      })

    }


    else {

      const token = sessionStorage.getItem('token')
      const respuesta = await Axios.post('/servicio/crear',usuario,{

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
           
      setPrecio("");





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
                <h4>Registrar servicio</h4>
              </div>
              <div className="card-body">
                <form onSubmit={guardar}>
                  <div className="row">

                    <div className="col-md-6">
                      <label>Nombres del servicio</label>
                      <input type="text" className="form-control required" onChange={(e)=>setNombres(e.target.value)} />
                    </div>

                   

                    <div className="col-md-6">
                      <label>Precio</label>
                      <input type="text" className="form-control required" onChange={(e)=>setPrecio(e.target.value)} />
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
                      <label>Prestador del Servicio</label>

                      <select className='form-control' onChange={(e) => setPrestadorSelect(e.target.value)}>

                        {
                            prestador.map(prestador => (
                                <option key={prestador}>
                                    {prestador}

                                </option>
                            ))


                        }
                        </select>
                    </div>


                    <div className="col-md-6">
                      <label>Categoría del servicio</label>
                      <select className='form-control' onChange={(e) => setCategoriaSelect(e.target.value)}>

                          {
                              categoria.map(categoria => (
                                  <option key={categoria}>
                                      {categoria}

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
