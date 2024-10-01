import React from "react";
import "./App.css";
import img1 from "../src/assets/img1.png";
import img2 from "../src/assets/img2.png";
import img3 from "../src/assets/img3.png";
import img4 from "../src/assets/img4.png";
import img5 from "../src/assets/img5.png";
import img6 from "../src/assets/img6.png";
import img7 from "../src/assets/img7.png";
import img8 from "../src/assets/img8.png";
import img9 from "../src/assets/img9.png";
import img10 from "../src/assets/img10.png";
import img11 from "../src/assets/img11.png";
import img12 from "../src/assets/img12.png";
import img13 from "../src/assets/img3.png";
import img14 from "../src/assets/img4.png";
import img15 from "../src/assets/img5.png";

// Bilder-Array
const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

// Zufällige Zahlen für Layout (Beispiel: 50 Elemente mit Zahlenpaaren)
function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

// Generiere die digits-Liste und füge zusätzliche Arrays hinzu
const digits = Array.from({ length: 50 }, () => [
  randomNumber(4),
  randomNumber(4),
]).concat([
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [2, 2],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [2, 2],
  [1, 1],
  [1, 1],
  [12, 12],
  [12, 12],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [12, 12],
  [1, 1],
  [12, 12],
  [12, 12],
  [1, 1],
  [12, 12],
  [1, 1],
  [12, 12],
  [4, 4],
  [1, 1],
  [1, 1],
  [12, 12],
  [1, 1],
  [1, 1],
  [4, 4],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
  [1, 1],
]);

function App() {
  const [selectedImage, setSelectedImage] = React.useState(null); // Zustand für das ausgewählte Bild

  const openOverlay = (image) => {
    setSelectedImage(image); // Setze das ausgewählte Bild
  };

  const closeOverlay = () => {
    setSelectedImage(null); // Schließe das Overlay
  };

  return (
    <div className="albums">
      {/* Overlay für ausgewähltes Bild */}
      <div className={`overlay ${selectedImage ? "open" : ""}`}>
        {selectedImage && (
          <div className="overlay-inner">
            <button className="close" onClick={closeOverlay}>
              X Close
            </button>
            <img src={selectedImage} alt="Selected" />
          </div>
        )}
      </div>

      {/* Galerie mit Bildern */}
      <h1>Grid Gallery</h1>
      <section className="gallery">
        {digits.map((digit, index) => {
          const randomImage = images[digit[1] - 1]; // Wähle ein zufälliges Bild basierend auf den zufälligen Zahlen
          const className = `item h${digit[0]} v${(index % 4) + 1}`; // Zufällige Klassennamen für Layout
          return (
            <div
              key={index}
              className={className}
              onClick={() => openOverlay(randomImage)} // Öffne Overlay mit Bild
            >
              <img
                src={randomImage}
                alt={`Album ${index + 1}`}
                className="album_artwork"
              />
              <div className="item__overlay">
                {" "}
                <button className="btn">View</button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
