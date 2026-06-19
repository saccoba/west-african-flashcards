import { useState } from 'react';
import './App.css';
import Card from './card.jsx';
import cards from './data/cards';


const App = () => {
  const [cardPool, setCardPool] = useState(cards);
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);

  const flipCard = () => {
    setFlipped(!flipped);
  };
  
  // Normalize text for comparison (Helper function)
   const normalize = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .trim();
  };

  const getCountryName = () => {
    return cardPool[currentCard].answer.split(" | ")[0];
  };


  const submitGuess = () => {
    const userGuess = normalize(guess);
    const correctAnswer = normalize(getCountryName());

    if (userGuess === correctAnswer) {
      setFeedback("Correct!");
      setCurrentStreak(currentStreak + 1);
      if (currentStreak + 1 > longestStreak) {
        setLongestStreak(currentStreak + 1);
      }
    } else {
      setFeedback("Wrong Answer. Try again.");
      setCurrentStreak(0);
    }
  };

  const nextCard = () => {
    if (currentCard < cardPool.length - 1) {
    setCurrentCard(currentCard + 1);
    setFlipped(false);
    setGuess("");
    setFeedback("");
  }
};

 const previousCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setFlipped(false);
      setGuess("");
      setFeedback("");
    }
  };

  const shuffleCards = () => {
  const shuffled = [...cardPool].sort(() => Math.random() - 0.5);

  setCardPool(shuffled);
  setCurrentCard(0);
  setFlipped(false);
  setGuess("");
  setFeedback("");
};

const markMastered = () => {
  const masteredCard = cardPool[currentCard];

  setMasteredCards([...masteredCards, masteredCard]);

  const newPool = cardPool.filter((_, index) => index !== currentCard);

  setCardPool(newPool);
  setCurrentCard(0);
  setFlipped(false);
  setGuess("");
  setFeedback("");
};
  
  return (
    <div className="App">
      <h1>🌍 African Flags Flashcards</h1>

      <p>
        Test your knowledge of African countries by identifying
        their flags and learning key facts.
      </p>

      <h3>Total Cards: {cardPool.length}</h3>

      <p>Current Streak: {currentStreak}</p>
      <p>Longest Streak: {longestStreak}</p>
      <p>Mastered Cards: {masteredCards.length}</p>

      {cardPool.length > 0 ? (
        <>
          <Card
            card={cardPool[currentCard]}
            flipped={flipped}
            flipCard={flipCard}
          />

          <div className="guess-section">
            <input
              type="text"
              placeholder="Enter your guess"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
            />
            <button onClick={submitGuess}>Submit</button>
          </div>

          <p className={feedback === "Correct!" ? "correct" : "Wrong Answer"}>
            {feedback}
          </p>

          <div className="navigation">
            <button onClick={previousCard} disabled={currentCard === 0}>
              ◀
            </button>

            <button
              onClick={nextCard}
              disabled={currentCard === cardPool.length - 1}
            >
              ▶
            </button>
          </div>

          <button onClick={shuffleCards}>Shuffle Cards</button>
          <button onClick={markMastered}>Mark as Mastered</button>
        </>
      ) : (
        <h2>You mastered all cards!</h2>
      )}
    </div>
  );
};

export default App;