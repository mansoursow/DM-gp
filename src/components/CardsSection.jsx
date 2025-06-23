import React from "react";

const cards = [
  {
    title: "Achetez en Europe",
    description: "Commandez sur vos boutiques préférées comme Amazon, Asos, eBay...",
    image: "/images/dsfb.webp", // à remplacer par ton image
  },
  {
    title: "Livraison rapide",
    description: "Nous livrons vos colis partout en Afrique en toute sécurité.",
    image: "/images/dbsha.webp",
  },
  {
    title: "Suivi en temps réel",
    description: "Suivez vos colis du départ jusqu'à la livraison.",
    image: "/images/cdhx.webp",
  },
  {
    title: "Assistance 24/7",
    description: "Notre équipe est disponible pour répondre à toutes vos questions.",
    image: "/images/vhvb.jpg",
  },
];

const CardsSection = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Pourquoi choisir notre service ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <img src={card.image} alt={card.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
