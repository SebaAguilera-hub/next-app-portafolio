import React from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    imageUrl: '/images/proyecto4.png', // Reemplaza con tus URLs de imagen
    link1: 'https://sebaaguilera-hub.github.io/proyecto-4-react/',
    link2: 'https://github.com/SebaAguilera-hub/proyecto-4-react',
  },
   {
    id: 2,
    imageUrl: '/images/proyecto3.1.png',
     link1: 'https://aracelidc.github.io/Proyecto-3-Dashboard/index.html',
     link2: 'https://github.com/AraceliDC/Proyecto-3-Dashboard',
   },
   {
     id: 3,
     imageUrl: '/images/proyecto2.png',
     link1: 'https://sebaaguilera-hub.github.io/',
     link2: 'https://github.com/SebaAguilera-hub/repositorio-crud-udd?tab=readme-ov-file',
   },
   {
     id: 4,
     imageUrl: '/images/proyecto1.1.png',
     link1: 'https://sebaaguilera-hub.github.io/mi-repositorio-udd/',
     link2: 'https://github.com/SebaAguilera-hub/mi-repositorio-udd',
   },
];

const ProjectsPage = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-indigo-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-left max-md:text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">MIS PROYECTOS</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              <Image src={project.imageUrl} alt={`Project ${project.id}`} width={300} height={200} className="w-full h-auto rounded-lg shadow-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.link1} className="bg-white text-indigo-600 px-4 py-2 mx-2 rounded font-bold hover:bg-indigo-600 hover:text-white transition-colors duration-300">Despliegue</a>
                <a href={project.link2} className="bg-white text-indigo-600 px-4 py-2 mx-2 rounded font-bold hover:bg-indigo-600 hover:text-white transition-colors duration-300">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
