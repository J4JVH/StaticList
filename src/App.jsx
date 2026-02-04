import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function MostrarAlumnos()
{
  const [alumnos, SetAlumnos] = useState([
    { nombre: 'Juan', apellido: 'Nalvares', edad: 18, ciclo: 4 },
    { nombre: 'María', apellido: 'García', edad: 22, ciclo: 5 },
    { nombre: 'Pedro', apellido: 'López', edad: 21, ciclo: 4 },
    { nombre: 'Ana', apellido: 'Martínez', edad: 19, ciclo: 3 },
    { nombre: 'Luis', apellido: 'Hernández', edad: 23, ciclo: 5 },
    { nombre: 'Sofía', apellido: 'Rodríguez', edad: 20, ciclo: 4 },
    { nombre: 'Carlos', apellido: 'Gómez', edad: 18, ciclo: 2 },
    { nombre: 'Lucía', apellido: 'Fernández', edad: 21, ciclo: 6 },
    { nombre: 'Javier', apellido: 'Díaz', edad: 22, ciclo: 4 },
    { nombre: 'Marta', apellido: 'Sánchez', edad: 19, ciclo: 3 }
  ]);
  
  return (
    <>
    <div className='table-frame-STL container mt-4'>
      <div className='color-frame-text-STL'>
        <h1>Lista de Alumnos</h1>
      </div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Ciclo</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno, index) => (
            <tr key={index}>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellido}</td>
              <td>{alumno.edad}</td>
              <td>{alumno.ciclo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <button className="btn btn-primary mt-3" onClick={() => SetAlumnos([])}>Eliminar Todos los Alumnos</button>
    </>
  );
}

function Navbar()
{
  return (
  <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
    <div className="container-fluid">
        <a className="navbar-brand" href="index.html">StaticList</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
            <a className="nav-link disabled" aria-current="page" href="#">Registrar Alumnos</a>
            <a className="nav-link disabled" href="#">Editar Alumnos</a>
        </div>
        </div>
    </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <MostrarAlumnos />
    </>
  );
}

export default App
