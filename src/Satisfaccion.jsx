import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Satisfaccion = () => {
    const [respuestas, setRespuestas] = useState({}); // Objeto para almacenar las respuestas seleccionadas
    const navigate = useNavigate(); // Hook para manejar la navegación

    const aspectos = [
        'La amabilidad, trato cordial y atento',
        'La resolución e informe del estatus a sus solicitudes de manera clara y comprensible',
        'El seguimiento adecuado a las tareas y pendientes',
        'La proactividad al adelantarse a sus requerimientos y necesidades',
        'La gestión y la disposición al atender sus consultas',
        'La calidad del servicio y sus entregables',
        'El cumplimiento y entrega oportuna de los compromisos adquiridos',
        'El conocimiento necesario para el desempeño de su cargo',
        'Conocen y cumplen con sus procedimientos'
    ];

    // Función para manejar la selección de satisfacción
    const handleSatisfaccion = (index, satisfaccion) => {
        setRespuestas(prev => ({ ...prev, [index]: satisfaccion })); // Almacena la respuesta seleccionada
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        const totalAspectos = aspectos.length;
        const respuestasCompletas = Object.keys(respuestas).length === totalAspectos;

        if (respuestasCompletas) {
            navigate('/serviciosBrindados'); // Navega a la ruta de evaluación si todo está completo
        } else {
            alert('Por favor, responde todas las preguntas antes de continuar.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-start h-screen bg-gray-100 px-4">
                <img className="w-24 h-16 mt-5 mb-4" src="/src/assets/logo-inteligo.png" alt="Logo Inteligo" />
                <h1 className="text-xl font-bold mb-5 text-center">¿Qué tan satisfecho estás con estos aspectos?</h1>

                <div className="w-full max-w-4xl"> {/* Contenedor para limitar el ancho */}
                    {aspectos.map((aspecto, index) => (
                        <div key={index} className="flex items-center justify-between">
                            {/* Aplicar tachado si se ha seleccionado una respuesta */}
                            <p className={`text-left w-2/3 text-sm ${respuestas[index] ? 'line-through text-blue-500' : ''}`}>
                                {aspecto}
                            </p>

                            <div className="flex w-1/3 justify-end">
                                {/* Botones para seleccionar satisfacción */}
                                <button
                                    type="button" // Se especifica que es un botón normal para evitar que envíe el formulario
                                    className={`text-xl p-2 rounded-full ${respuestas[index] === 'happy' ? 'bg-green-300' : ''}`}
                                    onClick={() => handleSatisfaccion(index, 'happy')}
                                >
                                    🙂
                                </button>
                                <button
                                    type="button"
                                    className={`text-xl p-2 rounded-full ${respuestas[index] === 'neutral' ? 'bg-yellow-300' : ''}`}
                                    onClick={() => handleSatisfaccion(index, 'neutral')}
                                >
                                    😐
                                </button>
                                <button
                                    type="button"
                                    className={`text-xl p-2 rounded-full ${respuestas[index] === 'sad' ? 'bg-red-300' : ''}`}
                                    onClick={() => handleSatisfaccion(index, 'sad')}
                                >
                                    🙁
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-7 py-3 rounded-3xl flex items-center pl-9 mt-4"
                >
                    Continuar
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-4 ml-1">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </form>
    );
};

export default Satisfaccion;
