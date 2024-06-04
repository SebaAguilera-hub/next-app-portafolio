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
    </>
  );
}
