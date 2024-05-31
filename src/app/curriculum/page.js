import Link from 'next/link';

function page() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-indigo-600 text-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <h1 className="text-4xl font-bold mb-4">Curriculum</h1>
          <p className="text-lg mb-6 max-md:text-justify">
            Descarga mi curriculum para obtener más detalles sobre mi experiencia y habilidades.
          </p>
          <a
            href="/cv.pdf"
            download="curriculum.pdf"
            className="bg-white text-indigo-600 px-4 py-2 font-bold rounded transition duration-300 ease-in-out transform hover:scale-105"
          >
            Descargar Curriculum
          </a>
        </div>
      </div>
    </section>
  );
}

export default page