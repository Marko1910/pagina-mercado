import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Leaf, Droplet, Sun, Facebook, Twitter, Instagram, Menu, X, User } from 'lucide-react'

export default function EnvironmentalActionLanding() {
  const [isHovered, setIsHovered] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600 mr-2" />
              <span className="font-bold text-xl text-green-800">Acción Ambiental</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-green-600">Inicio</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Proyectos</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Sobre Nosotros</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Contacto</a>
              <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300 flex items-center">
                <User className="h-4 w-4 mr-2" />
                Login
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden">
              <a href="#" className="block py-2 text-gray-600 hover:text-green-600">Inicio</a>
              <a href="#" className="block py-2 text-gray-600 hover:text-green-600">Proyectos</a>
              <a href="#" className="block py-2 text-gray-600 hover:text-green-600">Sobre Nosotros</a>
              <a href="#" className="block py-2 text-gray-600 hover:text-green-600">Contacto</a>
              <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300 flex items-center my-2">
                <User className="h-4 w-4 mr-2" />
                Login
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <motion.h1 
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Acción Ambiental
          </motion.h1>
          <p className="text-xl mb-8 text-gray-700">Juntos podemos crear un futuro sostenible para nuestro planeta.</p>
          <motion.button 
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-green-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Únete al movimiento
          </motion.button>
        </div>
        <div className="lg:w-1/2">
          <motion.img 
            src="imagen inicio.jpg" 
            alt="Environmental Action Illustration" 
            className="rounded-lg h-[20rem] object-cover w-full shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestras Iniciativas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Leaf className="w-12 h-12 text-green-500" />, title: "Reforestación" },
              { icon: <Droplet className="w-12 h-12 text-blue-500" />, title: "Conservación del Agua" },
              { icon: <Sun className="w-12 h-12 text-yellow-500" />, title: "Energía Renovable" }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg shadow-md"
                whileHover={{ y: -5 }}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-600">Trabajamos incansablemente para implementar soluciones sostenibles que protejan nuestro medio ambiente y aseguren un futuro más verde.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-br from-green-100 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Impacto en la Comunidad</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
            <p className="text-xl italic mb-4">"Gracias a las iniciativas de Acción Ambiental, nuestra comunidad ha visto una transformación increíble. Los parques están más limpios, el aire es más puro, y todos nos sentimos más conectados con la naturaleza."</p>
            <p className="font-semibold">- Carlos Rodríguez, Líder Comunitario</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para hacer la diferencia?</h2>
          <p className="text-xl mb-8">Cada acción cuenta. Únete a nosotros en la lucha por un planeta más saludable.</p>
          <motion.button 
            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition duration-300 inline-flex items-center"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            Voluntario Ahora
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="ml-2" />
            </motion.div>
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Acción Ambiental</h3>
              <p className="mb-4">Trabajando juntos por un futuro sostenible.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400"><Facebook /></a>
                <a href="#" className="hover:text-green-400"><Twitter /></a>
                <a href="#" className="hover:text-green-400"><Instagram /></a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-green-400">Proyectos</a></li>
                <li><a href="#" className="hover:text-green-400">Donar</a></li>
                <li><a href="#" className="hover:text-green-400">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Boletín Informativo</h4>
              <p className="mb-4">Mantente informado sobre nuestras últimas iniciativas y eventos.</p>
              <form className="flex">
                <input type="email" placeholder="Tu email" className="rounded-l-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800" />
                <button type="submit" className="bg-green-600 text-white rounded-r-full px-4 py-2 hover:bg-green-700 transition duration-300">Suscribir</button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 Acción Ambiental. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}