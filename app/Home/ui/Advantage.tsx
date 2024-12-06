import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faLeaf, faStar } from "@fortawesome/free-solid-svg-icons";

export const AdvantageSection = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Frescura */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-purple-100 p-4 rounded-full mb-4">
            <FontAwesomeIcon icon={faLeaf} size="2x" className="text-purple-500" />
          </div>
          <h3 className="text-[24px] font-bold text-purple-600 leading-[24px] mb-2">
            Frescura garantizada
          </h3>
          <p className="text-gray-600 max-w-[400px]">
            Nuestros productos se elaboran diariamente con los ingredientes más frescos, asegurando su sabor y calidad.
          </p>
        </div>

        {/* Calidad Artesanal */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-purple-100 p-4 rounded-full mb-4">
            <FontAwesomeIcon icon={faStar} size="2x" className="text-purple-500" />
          </div>
          <h3 className="text-[24px] font-bold text-purple-600 leading-[24px] mb-2">
            Calidad artesanal
          </h3>
          <p className="text-gray-600 max-w-[400px]">
            Cada muffin, torta y postre está hecho a mano, con amor y atención a los detalles, para ofrecerte una experiencia única.
          </p>
        </div>

        {/* Personalización */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-purple-100 p-4 rounded-full mb-4">
            <FontAwesomeIcon icon={faBirthdayCake} size="2x" className="text-purple-500" />
          </div>
          <h3 className="text-[24px] font-bold text-purple-600 leading-[24px] mb-2">
            Personalización
          </h3>
          <p className="text-gray-600 max-w-[400px]">
            Creamos diseños personalizados para tus ocasiones especiales, desde cumpleaños hasta eventos corporativos.
          </p>
        </div>
      </div>
    </section>
  );
};
