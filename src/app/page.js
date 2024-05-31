import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-gradient-to-b from-indigo-600 to-indigo-400 text-white py-20 min-h-screen">
        <div className="text-center px-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Sebastián Aguilera</h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-8">Desarrollador Web.</h2>
          <Link href="/about" passHref>
            <button className="bg-white text-indigo-600 px-4 py-2 font-bold rounded">Saber más</button>
          </Link>
        </div>
      </section>
      
      <section className="flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-indigo-600 to-indigo-400 text-white py-20 min-h-screen">
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl mb-8">Donde la Simpleza y la Elegancia se Encuentran</h2>
          <p className="mb-8 text-lg md:text-xl">Transformo tus ideas en páginas web elegantes y funcionales. Mi enfoque en diseño minimalista asegura una experiencia de usuario impecable y sofisticada, pero por sobre todo simple y sencilla.</p>
          <div className="flex max-md:justify-center">
            <Link href="/projects" passHref>
              <button className="bg-white text-indigo-600 px-4 py-2 font-bold rounded">Saber Más</button>
            </Link>
          </div>  
        </div>
        
        <div className="w-full md:w-1/2 hidden custom-lg:block px-4">
          <Image
            src="/images/imagen-home.png" // Ruta de tu imagen
            alt="Descripción de la imagen"
            width={500} // Ancho deseado
            height={300} // Alto deseado
            className="w-full h-auto rounded-xl border-4 border-opacity-50 border-white"
          />
        </div>
      </section>
    </>
  );
}
