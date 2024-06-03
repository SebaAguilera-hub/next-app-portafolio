import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-customBg text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-left max-md:text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Sobre mí</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <Image src="/images/meta.png" alt="Descripción de la imagen 1" width={500} height={300} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Mis metas</h3>
              <ul className="list-disc list-inside space-y-2">
                 <li>Conseguir un puesto de desarrollador </li>
                 <li>Construir proyectos importantes</li>
                 <li>Perfeccionar mis habilidades de desarrollo</li>
                 <li>Emprender un proyecto personal</li>
                 <li>Ahorrar e invertir</li>
              </ul>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <Image src="/images/logro.png" alt="Descripción de la imagen 2" width={500} height={300} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Mis logros y experiencias</h3>
              <p>A lo largo de mi carrera profesional he cursado <span className='font-bold'> certificaciones</span> en diferentes plataformas de aprendizaje como: <span className='font-bold'>platzi</span> y <span className='font-bold'>udemy</span>, mi títulación en la <span className='font-bold'>universidad</span>. Finalmente he trabajado en equipos de desarrollo creando y mejorando sistemas informáticos.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
            <Image src="/images/calendario.png" alt="Descripción de la imagen 3" width={500} height={300} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Actualidad</h3>
              <p>Actualmente me sigo perfeccionando en el arte de crear aplicaciones web con todo típo de herramientas como: React, Node, Next, etc. Hoy por hoy estoy terminando mis estudios en el bootcamp dictado por la Universidad del desarollo como fullstack.</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-12">
          <Link href="/projects" passHref>
            <button className="bg-white text-indigo-600 px-4 py-2 font-bold rounded">Mis Proyectos</button>
          </Link>
          {/* <Link href="/contact" passHref>
            <button className="bg-white text-indigo-600 px-4 py-2 font-bold rounded ml-4">Contacto</button>
          </Link> */}
        </div>
      </div>
    </section>
  );
}

export default page;
