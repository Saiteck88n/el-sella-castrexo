import { useRef, useEffect, useState } from "react";

export default function EventPage() {
  const audioRef = useRef(null);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 13; // empieza en el segundo 13
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay bloqueado, esperando interacción del usuario.");
          setShowNotice(true);
        });
      }
    }
  }, []);

  const handleUserInteraction = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setShowNotice(false);
    }
  };

  return (
    <div onClick={handleUserInteraction} className="bg-gradient-to-b from-green-200 to-amber-100 min-h-screen font-serif relative">
      <audio ref={audioRef} loop>
        <source src="/ultimo-mohicano.mp3" type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>

      {showNotice && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black p-2 rounded shadow-lg">
          Haz clic en cualquier sitio para activar la música 🎵
        </div>
      )}

      <section className="p-8 relative">
        <h1 className="text-5xl mb-4 font-bold text-center">El Sella Castrexo</h1>
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-center mb-8">
          <p className="text-lg md:w-2/3 md:pr-8">
            Este año os proponemos juntarnos en nuestro pueblo Celanova, para que os unáis a nosotros en una fiesta histórica, que lleva más de 12 años desaparecida. Se trata del Folión Castrexo, una fiesta temática en la que nos disfrazaremos de Castrexos. Más abajo os proponemos unos trajes sencillos que hasta yo podré coser. Ante la duda se admiten consultas y costureras :)
          </p>
        <p className="text-lg text-center">Un viaje en el tiempo para celebrar nuestra herencia celta en Celanova, Ourense. Música, amistad, naturaleza y cultura en un solo fin de semana.</p>
    
          <img
            src="/portada.png"
            alt="Participantes Folión Castrexo"
            className="w-40 h-40 object-cover rounded-lg shadow-lg mt-4 md:mt-0"
          />
        </div>
  </section>

      <section className="p-8">
  <h2 className="text-3xl mb-4 font-bold">Cómo llegar</h2>
  <div className="flex flex-col items-center mt-6 space-y-2">
    <div>
      <a
        href="https://www.thetrainline.com/book/results?journeySearchType=return&origin=urn%3Atrainline%3Ageneric%3Aloc%3A33349&destination=urn%3Atrainline%3Ageneric%3Aloc%3A27205&outwardDate=2025-08-08T23%3A15%3A59&outwardDateType=departAfter&inwardDate=2025-08-10T00%3A30%3A59&inwardDateType=departAfter&selectedTab=train&splitSave=true&lang=es"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Ver trenes disponibles desde Madrid
      </a>
    </div>
    <div>
      <a
        href="https://www.google.com/travel/flights/search?tfs=CBwQAhopEgoyMDI1LTA4LTA4agwIAhIIL20vMDFmNjJyDQgCEgkvbS8wMXZjdmcaKRIKMjAyNS0wOC0xMGoNCAISCS9tLzAxdmN2Z3IMCAISCC9tLzAxZjYyQAFIAXABggELCP___________wGYAQE&hl=es&authuser=0"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        Ver aviones disponibles desde Barcelona
      </a>
    </div>
  </div>
</section>

<section className="p-8">
  <h2 className="text-3xl mb-4 font-bold">Dónde dormir</h2>
  <div className="flex flex-col items-center space-y-2">
    <a
      href="https://www.booking.com/searchresults.es.html?label=gen173nr-1BCAEoggI46AdIM1gEaEaIAQGYAQq4ARfIAQzYAQHoAQGIAgGoAgO4AozIusAGwAIB0gIkMWY1OTA1MWQtYTg3My00YWU4LWI0Y2ItMjk3MWExNmE1ZGUw2AIF4AIB&sid=2c691c34c2e29ea1a12057161a75df30&aid=304142&ss=celanova"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      Ver alojamientos en Booking
    </a>
    <p className="text-lg">Casa Migui (Plazas limitadas)</p>
    <p className="text-lg">¿Otras ofertas? ¿Venís en furgos?</p>
  </div>
</section>

      <section className="p-8">
        <h2 className="text-3xl mb-4 font-bold">Artículos y noticias</h2>
        <div className="flex flex-col items-center space-y-4">
          <a
            href="https://www.laregion.es/comarca-de-celanova/castrexa-regresara-verano-castromao_1_20250323-3459736.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            La Castrexa regresará este verano a Castromao (La Región)
          </a>
    </div>
    <div>
          <a
            href="https://www.instagram.com/folioncastrexo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Instagram del Folión Castrexo
          </a>
        </div>
      </section>

      <section className="p-8 bg-green-100">
        <h2 className="text-3xl mb-4 font-bold">Disfraces y Vestimenta</h2>
        <p className="mb-4">
          Os iremos actualizando con el material a comprar y como hacer tu propio vestido, con un patrón sencillo, pero cada uno es libre de improvisar lo que quiera.
 <div>	
Ven vestido con inspiración celta: túnicas naturales, capas, cinturones, sandalias o botas rústicas. Accesorios como amuletos, brazaletes de cuero o coronas de hojas son bienvenidos.
 </div>        
</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/Castrexa_mujer.PNG" alt="Disfraz Castrexo Mujer" className="rounded-lg shadow w-full h-auto p-2" />
          <img src="/Trajes.PNG" alt="Fiesta Castrexa" className="rounded-lg shadow w-full h-auto p-2" />
          <img src="/disfraz3.jpg" alt="Disfraz Castrexo 3" className="rounded-lg shadow w-full h-auto p-2" />
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-3xl mb-4 font-bold">Registro</h2>
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md text-center">
          <p className="mb-4">Confirma tu asistencia rellenando el formulario:</p>
          <a
            href="https://docs.google.com/forms/d/1aJ8G8zwELRzAFM3OIgqQlDrrN0-QNb0W6yg9sY5t4yg/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full"
          >
            Ir al formulario de registro
          </a>
        </div>
        <p className="text-center text-sm mt-4">*Gracias por confirmar tu asistencia.</p>
      </section>
    </div>
  );
}
