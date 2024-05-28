

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center bg-indigo-600 text-white py-20 min-h-screen relative">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-black w-60 h-60 md:w-96 md:h-96 rounded-full"></div>
      </div>
      <div className="container mx-auto text-center relative z-20 px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Sebastián Aguilera</h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl mb-8">Desarrollador Web.</h2>
        <a href="/about" className="bg-white text-indigo-600 px-4 py-2 rounded">Saber Más</a>
      </div>
    </section>
  );
}
