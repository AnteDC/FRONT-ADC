import React, { useState,useEffect } from 'react'
import { Navbar,Container,Offcanvas,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Logo from '../images/icono.png';

export default function Barra() {
const[show, setShow] = useState(true)
const[opcionRegistro, setOpcionRegistro] = useState(false)
const[menu,setMenu]= useState(false)

useEffect(() => {

    if(sessionStorage.getItem('token')){
        setMenu(true)
        setShow(false)
        setOpcionRegistro(true)
    }
    
  
}, []);

const salir=()=>{

    sessionStorage.clear()
    window.location.href="/"

}

    return (
        <div>

        <Navbar bg="dark" variant="dark" expand={show}>
        <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        
        <Navbar.Brand  hidden={show} href="#"><i class="fas fa-user-tie"></i> Bienvenido: {sessionStorage.getItem('nombre')}</Navbar.Brand>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Link  hidden={opcionRegistro} style={{ color: '#FFF',textDecoration: 'none' }} to="/registrarCiudad" > <i className='fas fa-user-plus'></i> <Navbar.Brand > Registrarse </Navbar.Brand></Link>
        <Navbar.Brand hidden={show} href="#" onClick={()=>salir()} to="/"><i class="fas fa-user-times"></i> Cerrar sesión</Navbar.Brand>
        
 
            
            <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Opciones</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">



                <NavDropdown title="VISITANTES" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="/Portada"><i class="fas fa-user-plus"></i> Portafolio </NavDropdown.Item>
                </NavDropdown>


                
                <NavDropdown title="Registros" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="/registrarPersona"><i class="fas fa-user-plus"></i> Registrar clientes</NavDropdown.Item>

                    <NavDropdown.Item href="/registrarServicio"><i class="fas fa-user-plus"></i> Registrar servicios</NavDropdown.Item>

                    {/* <NavDropdown.Item href="/registrarCiudad"><i class="fas fa-user-plus"></i> Registro ciudad</NavDropdown.Item> */}
                </NavDropdown>

                





                <NavDropdown title="Reportes" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="/verPersonas"><i class="far fa-clipboard"></i> Ver usuarios</NavDropdown.Item>
                    {/* <NavDropdown.Item href="/verCiudad"><i class="far fa-clipboard"></i> Ver ciudades</NavDropdown.Item> */}

                    <NavDropdown.Item href="/verServicios"><i class="far fa-clipboard"></i> Ver Servicios</NavDropdown.Item>

                </NavDropdown>


               


                </Nav>
                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
                </Form>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
        </Navbar>
            
        </div>
    )
}
