import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import StartRating from "./StartRating";

const Fortalezas = () => {
    const [selectedColaborador, setSelectedColaborador] = useState('');
    const [fortalezas, setFortalezas] = useState(''); // Estado para el primer textarea
    const [oportunidades, setOportunidades] = useState(''); // Estado para el segundo textarea
    const navigate = useNavigate(); // Hook para manejar la navegación

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificar si los textarea están vacíos
        if (fortalezas.trim() === "" || oportunidades.trim() === "") {
            alert('Por favor, escribe algo en ambos campos');
            return; // Evita continuar si hay campos vacíos
        }

        // Verifica si el colaborador está seleccionado
        if (selectedColaborador === "") {
            navigate('/gracias');
            return;
        }

        // Si todo está bien, navega a la ruta de evaluación
        navigate('/gracias');
    };

    return (
        <div className="flex flex-col items-center justify-start h-screen bg-gray-100">
            <img className="w-24 h-16 mt-10 mb-10" src="/logo-inteligo.png" alt="" />
            <h1 className="text-xl mb-10">Escribe las fortalezas y oportunidades de mejora.</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="flex space-x-4 w-full justify-center">
                    <div className='w-full relative'>
                        <p className='absolute -top-2 left-6 bg-white px-3 text-blue-500 text-sm font-medium rounded-xl'>Fortalezas</p>
                        <textarea
                            value={fortalezas}
                            onChange={(e) => setFortalezas(e.target.value)} // Maneja el cambio en el primer textarea
                            placeholder="Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500..."
                            className="text-xs outline-none border hover:border-blue-500 transition-all duration-500 cursor-pointer rounded-lg p-6 resize-none overflow-hidden w-full h-40"
                        />
                    </div>
                    <div className='relative w-full'>
                    <p className='absolute -top-2 left-6 bg-white px-3 text-blue-500 text-sm font-medium rounded-xl'>Oportunidades de mejora</p>
                        <textarea
                            value={oportunidades}
                            onChange={(e) => setOportunidades(e.target.value)} // Maneja el cambio en el segundo textarea
                            className="text-xs outline-none border hover:border-blue-500 transition-all duration-500 cursor-pointer rounded-lg p-6 resize-none w-full h-40 overflow-hidden"
                        />
                    </div>

                </div>
                <div>
                    <h1 className="text-xl mb-5 mt-10">¿Qué tan satisfecho te sientes con el desempeño de Carlos Palma?</h1>
                    <StartRating />
                </div>
                <button className="bg-blue-500 text-white mt-10 px-7 py-3 rounded-3xl flex items-center pl-9">
                    Finalizar
                </button>
            </form>
        </div>
    );
};

export default Fortalezas;
