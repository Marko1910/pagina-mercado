import { Leaf, Menu, User, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return ( 
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600 mr-2" />
            <span className="font-bold text-xl text-green-800">Acción Ambiental</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to={"/"} className="text-gray-600 hover:text-green-600">Inicio</Link>
            <a href="#" className="text-gray-600 hover:text-green-600">Proyectos</a>
            <a href="#" className="text-gray-600 hover:text-green-600">Sobre Nosotros</a>
            <a href="#" className="text-gray-600 hover:text-green-600">Contacto</a>
            <Link to={"login"}>
              <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300 flex items-center">
                <User className="h-4 w-4 mr-2" />
                Login
              </button>
            </Link>
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
            <Link to="login">
              <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300 flex items-center my-2">
                <User className="h-4 w-4 mr-2" />
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header; 
