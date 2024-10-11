import { useState } from 'react' 
import { motion } from 'framer-motion'
import { ChevronRight, Leaf, Droplet, Sun } from 'lucide-react'
import Carrusel from '../components/carrusel';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false)

  return ( 
    <>
      {/* Encabezado de la página */}
      <div className='relative h-screen'>
        <Carrusel />
        <section className="absolute inset-0 bg-black bg-opacity-50">
          <div className='container px-4 h-full  mx-auto  flex flex-col lg:flex-row items-center'>
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <motion.h1 
                className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Acción Ambiental
              </motion.h1>
              <p className="text-xl mb-8 text-white">Juntos podemos crear un futuro sostenible para nuestro planeta.</p>
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
                src="/imagenes/imagen inicio.jpg" 
                alt="Environmental Action Illustration" 
                className="rounded-lg h-[20rem] object-cover w-full shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </section>
      </div>

      <section className="mt-8">

      </section>

      {/* Features Section */}
      <section className="bg-transparent py-20">
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
    </>
  );
}
 
export default Home;
