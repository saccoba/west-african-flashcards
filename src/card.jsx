const Card = ({ card, flipped, flipCard }) => {
  return (
    <div className="card-container" onClick={flipCard}>
      <div className={`card ${card.region} ${flipped ? "flipped" : ""}`}>
        <div className="card-face card-front">
          <h2>{card.question}</h2>
          <img src={card.image} alt="Country Flag" className="flag" />
        </div>

        <div className="card-face card-back">
          <h2>{card.answer}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;