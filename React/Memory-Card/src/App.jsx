import { useEffect, useState } from "react";
import cartoons from "./components/cartoons";

function App() {
  const animalList = {
    "White cat": "",
    Peakcock: "",
    Fox: "",
    Manul: "",
    "White Bear": "",
    Tiger: "",
    Caracal: "",
    Axolotl: "",
    "Red Panda": "",
    Dragon: "",
    Raccoon: "",
    Hamster: "",
  };

  const [animalImages, setAnimalImages] = useState(animalList);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [mySet, setMyset] = useState(new Set());

  useEffect(() => {
    async function fetchImages() {
      const updatedImages = await cartoons(animalList);
      setAnimalImages(updatedImages);
    }
    fetchImages();
  }, []);

  function shuffle() {
    let array = Object.keys(animalImages);

    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    let shuffledArray = {};
    for (let elem of array) {
      shuffledArray[elem] = animalImages[elem];
    }

    setAnimalImages(shuffledArray);
  }

  function scores(name) {
    if (mySet.has(name)) {
      setBestScore(score);
      setScore(0);
      setMyset(new Set());
    } else {
      setMyset((prevSet) => {
        const newSet = new Set(prevSet);
        newSet.add(name);
        setScore(score + 1);
        return newSet;
      });
    }
  }

  function handleClick(name) {
    shuffle();
    scores(name);
  }

  return (
    <div id="container">
      <header id="header">
        <div id="head">
            <h1>Savanna Shuffle Memory Game</h1>
            <p id="topic">
                Get points by clicking on an image but don't click on any more than
                once!
            </p>
        </div>
        <div id="score">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
        </div>
      </header>
      <section>
        {Object.entries(animalImages).map(([name, url]) => (
            <div 
                key={name} 
                onClick={() => handleClick(name)}
                className="animal"
            >
            {url ? (
                <img
                style={
                    { 
                    width: "300px", 
                    height: "300px" }
                }
                src={url}
                alt={name}
                />
            ) : (
                <p
                style={
                    { 
                    width: "300px", 
                    height: "300px" }
                }
                >Loading... </p>
            )}
            <p>{name}</p>
            </div>
        ))}
      </section>
      
    </div>
  );
}

export default App;