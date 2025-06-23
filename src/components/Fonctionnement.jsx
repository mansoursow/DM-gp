import { motion } from "framer-motion";
import {
  FaStore,
  FaDownload,
  FaGlobeAfrica,
  FaCreditCard,
} from "react-icons/fa";

const Fonctionnement = () => {
  const options = [
    {
      icon: <FaStore className="text-white text-3xl" />,
      title: "Option 1 : Point Relais",
      description: (
        <>
          Remplissez manuellement les coordonnées de notre point relais en France :
          <ul className="list-disc ml-5 mt-2 text-base">
            <li>Adresse : 14 boulevard de la Chapelle, 75018 Paris</li>
            <li>Magasin : Mr Diop</li>
            <li>Code postal : 75018</li>
            <li>
              Nom sur la commande : <strong>"Votre nom + DM-GP"</strong>
            </li>
            <li>Téléphone : 0758509931</li>
          </ul>
        </>
      ),
    },
    {
      icon: <FaDownload className="text-white text-3xl" />,
      title: "Option 2 : Plugin Auto",
      description:
        "Téléchargez notre plugin pour remplir automatiquement les coordonnées de livraison sur les sites e-commerce compatibles.",
    },
    {
      icon: <FaGlobeAfrica className="text-white text-3xl" />,
      title: "Option 3 : API Internationale",
      description:
        "Les sites e-commerce peuvent intégrer notre API pour offrir la livraison partout en Afrique directement depuis leur interface.",
    },
    {
      icon: <FaCreditCard className="text-white text-3xl" />,
      title: "Option 4 : Paiement Simplifié",
      description:
        "Commandez sans compte bancaire grâce à une carte virtuelle et nos coordonnées de paiement intégrés à la plateforme.",
    },
  ];

  return (
    <section
      id="fonctionnement"
      className="py-20 px-6 sm:px-10 lg:px-20 bg-gray-900 text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Comment ça marche ?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
          Découvrez les différentes façons d’utiliser DM-GP pour recevoir vos
          colis depuis l’Europe, où que vous soyez en Afrique.
        </p>
      </div>

      <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2">
        {options.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 break-words"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold">{option.title}</h3>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              {option.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <p className="text-lg text-gray-400">
          Toutes ces options sont également disponibles dans notre application mobile.
        </p>
      </div>
    </section>
  );
};

export default Fonctionnement;
