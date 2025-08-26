import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
        
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen algunos Testimonios</h1>
        <Testimonio 
          nombre='Juan Pérez'
          pais='United States'
          imagen='m1'
          cargo='Desarrollador Frontend'
          empresa='xestion'
          testimonio='lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <Testimonio 
          nombre='Sarah Johnson'
          pais='Canada'
          imagen='m2'
          cargo='Ingeniera de Software'
          empresa='TechSolutions'
          testimonio='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
        <Testimonio 
          nombre='Michael Smith'
          pais='Australia'
          imagen='h1'
          cargo='Desarrollador Full Stack'
          empresa='WebWorks'
          testimonio='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        />
        </div>
              
    </div>
  );
}

export default App;