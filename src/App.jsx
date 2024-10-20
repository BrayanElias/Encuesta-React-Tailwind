import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [selectedColaborador, setSelectedColaborador] = useState('');
  const navigate = useNavigate(); // Hook para manejar la navegación

  const colaboradores = ['Brayan Elias', 'Jhonatan Quispe', 'Ramon Zorochaqui'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedColaborador) {
      alert('Por favor selecciona un colaborador');
    } else {
      navigate('/evaluacion'); // Navega a la ruta de evaluación
    }
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gray-100">
      <img className="w-24 h-16 mt-10 mb-24" src="/public/logo-inteligo.png" alt="" />
      <h1 className="text-2xl font-bold mb-3">Hola Brayan!</h1>
      <p className="mb-16 text-center w-[49%]">
        Has sido seleccionado para evaluar a los siguientes colaboradores en sus responsabilidades.
        Por favor, contesta las preguntas de forma objetiva tomando en cuenta la interacción y el
        servicio recibido durante el año 2024.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="mb-20">
          {colaboradores.map((colaborador, index) => (
            <label
              key={index}
              className={`mr-4 bg-white p-4 rounded-2xl cursor-pointer transition-all duration-300 ${selectedColaborador === colaborador
                ? 'border-2 border-blue-500'
                : 'border-2 border-gray-300'
                }`}
            >
              <input
                type="radio"
                name="colaborador"
                value={colaborador}
                onChange={() => setSelectedColaborador(colaborador)}
                className="mr-2"
              />
              {colaborador}
            </label>
          ))}
        </div>

        <button className="bg-blue-500 text-white px-7 py-3 rounded-3xl flex items-center pl-9">
          Evaluar
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-4 ml-1">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default App;
