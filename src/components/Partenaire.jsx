import { motion } from "framer-motion";
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";
import screenshot3 from "../assets/screenshot3.png";

const partenaires = [
  {
    image: screenshot1,
    commentaire: "Commande reçue en 5 jours à Dakar, super service !",
    nom: "Fatou D.",
  },
  {
    image: screenshot2,
    commentaire: "Je commande tous les mois grâce à DM-GP.",
    nom: "Ibrahima S.",
  },
  {
    image: screenshot3,
    commentaire: "Livraison rapide et fiable même sans carte bancaire.",
    nom: "Khadim N.",
  },
];

const Partenaire = () => {
  return (
    <section
      id="partenaires"
      className="py-20 px-6 lg:px-20 bg-[#001126] text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Ils nous font déjà confiance
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Des clients réels, des résultats concrets. Voici ce qu’ils pensent de
          DM-GP.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {partenaires.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={p.image}
              alt="Capture"
              className="rounded-md w-full h-48 object-cover mb-4"
            />
            <p className="italic text-gray-200 mb-2">"{p.commentaire}"</p>
            <p className="text-sm text-gray-400 text-right">– {p.nom}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partenaire;
