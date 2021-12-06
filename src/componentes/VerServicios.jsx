import MaterialTable from 'material-table'
import React, { useState,useEffect } from 'react'
import Swal from 'sweetalert2'
import Axios from 'axios'
import { Modal,Button } from 'react-bootstrap';

function BasicSearch() {

  const [servicios,setServicios]=useState([])
  const [idServicio,setIdServicio]=useState('')
  const [nombre,setNombres]=useState('')
  const [precio,setPrecio]=useState('')
 
  
  const[categoria,setCategoria]=useState([])
  const[categoriaSelect,setCategoriaSelect]=useState([])
  const[prestador,setPrestador]=useState([])
  const[prestadorSelect,setPrestadorSelect]=useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{
    obtenerServicios()

    setCategoria(['Belleza','Veterinaria','Spa','Etología'])
   

    setPrestador(['ANA PEREZ','JUAN SOLER','EVA VIÑA','SAUL PIO','SOL GOMEZ','LUZ REYES'])
    


 

  },[])


  const obtenerServicios = async()=>{

    const id = sessionStorage.getItem('idUsuario')
    const token = sessionStorage.getItem('token')
    const respuesta = await Axios.get('/servicio/listarServiciosCiudad/'+id,{
      headers:{'autorizacion':token}
    })

    console.log(respuesta)
    setServicios(respuesta.data)
      

  }

  const obtenerServicio= async(idParametro)=>{
    
    setShow(true)
    const id = idParametro
    const token = sessionStorage.getItem('token')
    const respuesta = await Axios.get('/servicio/listar/'+id,{
      headers:{'autorizacion':token}
    })

    console.log(respuesta.data)
    setIdServicio(respuesta.data._id)
    setNombres(respuesta.data.nombre)
    setPrecio(respuesta.data.precio) 
    setCategoriaSelect(respuesta.data.categoria)
    setPrestadorSelect(respuesta.data.prestador)
    

  }


  const actualizar= async (e)=>{

    e.preventDefault();
    const id = idServicio
    const token = sessionStorage.getItem('token')
    const servicio ={

      nombre,
      precio,
      categoria:categoriaSelect,
      prestador: prestadorSelect


    }

    const respuesta = await Axios.put('/servicio/actualizar/'+id,servicio,{
      headers:{'autorizacion':token}

    })
    const mensaje = respuesta.data.mensaje
    obtenerServicios()

    Swal.fire({
      icon:'success',
      title:mensaje,
      showConfirmButton:false,
      timer:1500
    })

    setShow(false)
  }


  const eliminar = async (id)=>{


    const token = sessionStorage.getItem('token')
    const respuesta = await Axios.delete('/servicio/eliminar/'+id,{
      headers:{'autorizacion':token}

    })
    const mensaje = respuesta.data.mensaje
    Swal.fire({
      icon:'success',
      title:mensaje,
      showConfirmButton:false,
      timer:1500
    })
   
    obtenerServicios()


  }





  const data =
  servicios.map((servicio)=>({
    id:servicio._id,
    nombre:servicio.nombre,
    precio:servicio.precio,
    prestador:servicio.prestador,
    categoria:servicio.categoria

  }))



    return (
        <div className="container">
           <br />
      <MaterialTable
        title="RELACIÓN DE SERVICIOS"
        columns={[
    
          { title: 'ID', field: 'id' },
          { title: 'NOMBRE DEL SERVICIO', field: 'nombre' },
          { title: 'PRECIO DEL SERVICIO', field: 'precio' },          
          { title: 'PRESTADOR DEL SERVICIO', field: 'prestador' },
          { title: 'CATEGORIA DEL SERVICIO', field: 'categoria' },
         
       
        ]}
        data={data}       
        options={{
          search: true,
          actionsColumnIndex:-1,
          initialPage:1
         
        }}

        actions={[
          {
            icon:'delete',
            tooltip:'Eliminar',
            onClick:(event,rowData)=>eliminar(rowData.id)

          },

          {
            icon:'edit',
            tooltip:'editar',
            onClick:(event,rowData)=>obtenerServicio(rowData.id)
         


          }
                ]}
      />

        <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Editar servicio</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <div className="container mt-4">
        <div className="row">
          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="card-header bg-info text-center">
                <h4>Registrar Servicio</h4>
              </div>
              <div className="card-body">
                <form onSubmit={'guardar'}>
                  <div className="row">

                    <div className="col-md-6">
                      <label>Nombre</label>
                      <input type="text" className="form-control required" onChange={(e)=>setNombres(e.target.value)} value={nombre} />
                    </div>


                    <div className="col-md-6">
                      <label>Precio</label>
                      <input type="text" className="form-control required" onChange={(e)=>setPrecio(e.target.value)} value={precio} />
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

                      <select className='form-control' onChange={(e) => setPrestadorSelect(e.target.value)} value={prestadorSelect}>

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
                      <select className='form-control' onChange={(e) => setCategoriaSelect(e.target.value)} value={categoriaSelect}>

                          {
                              categoria.map(categorias => (
                                  <option key={categorias}>
                                      {categorias}

                                  </option>
                              ))


                          }
                          </select>
                    </div>


                  </div>
                    <br />
                 
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={actualizar}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>          

      </div>
    )
  }
  export default BasicSearch
