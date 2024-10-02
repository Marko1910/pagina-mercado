import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
    return ( 
        <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Acción Ambiental</h3>
              <p className="mb-4">Trabajando juntos por un futuro sostenible.</p>
              <div className="flex justify-center items-center space-x-4">
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
     );
}
 
export default Footer;