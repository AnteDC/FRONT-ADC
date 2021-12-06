import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Barra from './componentes/Barra';
import RegistrarPersona from './componentes/RegistrarPersona';
import RegistrarServicio from './componentes/RegistrarServicio';
import VerPersonas from './componentes/VerPersonas'
import VerServicios from './componentes/VerServicios'
import RegistrarCiudad from './componentes/RegistrarCiudad';
import VerCiudad from './componentes/VerCiudad'
import Login from './componentes/Login'
import Index from './componentes/Index'
import Portada from './componentes/Portada'
import "./estilos.css";
import Footer from './componentes/Footer';



function App() {
  return (

    

    <Router>
     <Barra/>
    
   <Route path='/' exact component={Login}/>
   <Route path='/index' exact component={Index}/>
   <Route path='/Portada' exact component={Portada}/> 
   <Route path='/registrarPersona' exact component={RegistrarPersona}/>
   <Route path='/registrarServicio' exact component={RegistrarServicio}/>
   <Route path='/verPersonas' exact component={VerPersonas}/>
   <Route path='/verServicios' exact component={VerServicios}/>
   <Route path='/registrarCiudad' exact component={RegistrarCiudad}/>
   <Route path='/verCiudad' exact component={VerCiudad}/>
   <Footer />
    </Router>


   
  );
}

export default App;
