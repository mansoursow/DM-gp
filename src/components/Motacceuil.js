import BlurText from "./BlurText";

const Motacceuil = () => {
  return (
    <BlurText
      text="Avec DM-GP acheter en ligne n'a jamais ete aussi facile!"
      delay={150}
      animateBy="words"
      direction="top"
      className="text-2xl mb-8"
    />
  );
};

export default Motacceuil;
