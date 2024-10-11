import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";  // Importa los estilos del carrusel
import "slick-carousel/slick/slick-theme.css";  // Importa el tema por defecto

export const Carrusel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {Array.from({length: 3}).map((_, i)=>(
        <div className="w-full h-screen">
          <img
            className="w-full h-full object-cover"
            src="/imagenes/imagen 1.webp" alt="Imagen 1" />
        </div>
      ))}
    </Slider>
  );
};

export default Carrusel;
