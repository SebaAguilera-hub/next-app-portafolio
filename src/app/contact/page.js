import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const page = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <p className="text-lg mb-8">Puedes contactarme a través de los siguientes medios:</p>
      <p className="mb-4"><FaEnvelope className="inline mr-2" /> tu-correo@example.com</p>
      <p><FaPhone className="inline mr-2" /> +1234567890</p>
    </div>
  </section>
  )
}

export default page