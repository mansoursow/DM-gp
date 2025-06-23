import { motion } from "framer-motion";
import { Link } from "react-scroll";
import amazon from "../assets/amazon.png";
import ebay from "../assets/ebay.png";
import asos from "../assets/asos.png";
import airplane from "../assets/airplane.png";
import packageBox from "../assets/package.png";

const HeroAcceuil = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-start text-white px-6 lg:px-20 overflow-hidden"
      style={{ backgroundColor: "#001126" }}
    >
      {/* Images décoratives : droite sur desktop, centrées en dessous du texte sur mobile */}
      <div className="absolute right-10 top-1/4 hidden md:grid grid-cols-2 gap-6 z-0">
        <img src={ebay} alt="eBay" className="w-44" />
        <img src={amazon} alt="Amazon" className="w-44" />
        <img src={packageBox} alt="Package" className="w-40" />
        <img src={airplane} alt="Airplane" className="w-48" />
        <img src={asos} alt="Asos" className="w-44 col-span-2 mx-auto" />
      </div>

      {/* Texte animé */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-2xl text-left z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.6)]">
          ACHETER EN LIGNE
        </h1>
        <h2 className="text-2xl md:text-3xl text-pink-400 font-semibold mb-6">
          DANS N’IMPORTE QUEL SITE
        </h2>
        <p className="text-lg md:text-xl font-light text-white mb-4">
          <strong>DM-GP</strong>, c’est{" "}
          <strong>
            la solution pour acheter sur Amazon, eBay, Asos, et tous les sites
            du monde
          </strong>
          , même si tu es en Afrique. Grâce à notre{" "}
          <strong>plugin ou notre application</strong>, vous{" "}
          <strong>
            renseignez automatiquement une adresse de livraison en Afrique
          </strong>{" "}
          au moment de votre commande — même si le site marchand ne propose pas
          cette option de base.
        </p>
        <ul className="list-disc list-inside text-white text-lg md:text-xl font-light space-y-1 mb-8">
          <li>✔️ Plus de frontières</li>
          <li>✔️ Plus d’excuses</li>
          <li>✔️ Une logistique intelligente pour toute l’Afrique</li>
        </ul>
        <Link
          to="apropos"
          smooth={true}
          duration={600}
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          DM-GP
        </Link>
      </motion.div>

      {/* Images sur mobile (centrées en dessous du texte) */}
      <div className="mt-12 grid grid-cols-2 gap-4 w-full justify-items-center md:hidden z-10">
        <img src={ebay} alt="eBay" className="w-28" />
        <img src={amazon} alt="Amazon" className="w-28" />
        <img src={packageBox} alt="Package" className="w-24" />
        <img src={airplane} alt="Airplane" className="w-28" />
        <img src={asos} alt="Asos" className="w-32 col-span-2" />
      </div>
    </section>
  );
};

export default HeroAcceuil;
