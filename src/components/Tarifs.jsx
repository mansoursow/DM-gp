import { motion } from "framer-motion";

const Tarifs = () => {
  return (
    <section
      id="tarifs"
      className="py-20 px-6 lg:px-20 bg-[#a8ae8d] text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Nos Tarifs
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Une tarification simple, transparente et sans surprise.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#001126] p-8 rounded-2xl shadow-lg max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Tarification en vigueur
        </h3>
        <ul className="list-disc list-inside text-lg text-white space-y-3">
          <li>💶 10€ par kilo</li>
          <li>📦 Tout colis pesant moins de 1 kg est facturé à 10€ minimum</li>
          <li>🤝 Le paiement s’effectue à la livraison</li>
          <li>🪪 Une pièce d’identité ou un justificatif est requis lors de la réception</li>
        </ul>
        <div className="mt-8 text-center">
          <p className="text-lg">📱 Vous avez une question ?</p>
          <a
            href="https://wa.me/221775860829"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-white underline hover:text-pink-400 transition-colors"
          >
            Contactez-nous sur WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Tarifs;
