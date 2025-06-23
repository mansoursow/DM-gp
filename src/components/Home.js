// Home.js
import React from "react";
import Herosection from "./Herosection";
import CardsSection from "./CardsSection";
import HeroAcceuil from "./HeroAcceuil";
import Fonctionnement from "./Fonctionnement";
import Tarifs from "./Tarifs";
import Partenaire from "./Partenaire";

const Home = () => {
  return (
    <div>
      <HeroAcceuil />
      <Fonctionnement />
      <Tarifs />
      <Partenaire />
      <CardsSection />
      <Herosection />
    </div>
  );
};

export default Home;
