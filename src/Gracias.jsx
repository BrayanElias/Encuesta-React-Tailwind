
const App = () => {

    return (
        <div className="flex flex-col items-center justify-start h-screen bg-gray-100">
            <img className="w-24 h-16 mt-10 mb-24" src="/logo-inteligo.png" alt="" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <h1 className="text-2xl font-bold mb-3 mt-4">¡Gracias Brayan!
            </h1>
            <p className="mb-16 text-center w-[49%]">
                Hemos recopilado con éxito tu evaluación.
            </p>

            <form className="flex flex-col items-center">
                <button className="bg-blue-500 text-white px-7 py-3 rounded-3xl flex items-center pl-9">
                    Inteligo
                </button>
            </form>
        </div>
    );
};

export default App;
