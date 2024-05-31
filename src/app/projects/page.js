import React from 'react';

const projects = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/300', // Reemplaza con tus URLs de imagen
    link1: 'https://enlace1.com',
    link2: 'https://enlace2.com',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/300',
    link1: 'https://enlace1.com',
    link2: 'https://enlace2.com',
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/300',
    link1: 'https://enlace1.com',
    link2: 'https://enlace2.com',
  },
  {
    id: 4,
    imageUrl: 'https://via.placeholder.com/300',
    link1: 'https://enlace1.com',
    link2: 'https://enlace2.com',
  },
];
const ProjectsPage = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-indigo-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-left max-md:text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">MIS PROYECTOS</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group">
              <img src={project.imageUrl} alt={`Project ${project.id}`} className="w-full h-auto rounded-lg shadow-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.link1} className="bg-white text-indigo-600 px-4 py-2 mx-2 rounded font-bold hover:bg-indigo-600 hover:text-white transition-colors duration-300">Enlace 1</a>
                <a href={project.link2} className="bg-white text-indigo-600 px-4 py-2 mx-2 rounded font-bold hover:bg-indigo-600 hover:text-white transition-colors duration-300">Enlace 2</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
