import React from "react";
import Ballpit from "./Ballpit";
import BlurText from "./BlurText";

const Footer = () => {
  return (
    <div
      id="contact" // ✅ Ancre ajoutée ici
      style={{ position: "relative", height: "100vh", width: "100%" }}
    >
      {/* Arrière-plan blanc derrière tout */}
      <div
        style={{
          backgroundColor: "",
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />

      {/* Animation Ballpit */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <Ballpit followCursor={false} />
      </div>

      {/* Contenu visible */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Merci de votre confiance
        </h1>
        <BlurText
          text="DM-GP, votre passerelle e-commerce vers l'Afrique"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl mb-8"
        />

        <p style={{ maxWidth: "600px", marginBottom: "1.5rem" }}>
          Contactez-nous pour toute question ou collaboration.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "1rem",
          }}
        >
          <p>Téléphone : +221 77 586 0829 ou +33 758 50 99 31</p>
          <p>
            WhatsApp :{" "}
            <a
              href="https://wa.me/221775860829"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              +221 77 586 0829
            </a>
          </p>
          <p>Adresse : Dakar, Sénégal</p>
        </div>

        <div
          style={{ marginTop: "2rem", fontSize: "0.875rem", color: "#64748b" }}
        >
          &copy; {new Date().getFullYear()} DM-GP. Tous droits réservés.
        </div>
      </div>
    </div>
  );
};

export default Footer;
