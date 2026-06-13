const Card = ({ card, flipped, flipCard }) => {
  return (
    <div
      className={`card ${card.region}`}
      onClick={flipCard}
    >
      {flipped ? (
        <h2>{card.answer}</h2>
      ) : (
        <>
          <h2>{card.question}</h2>

          <img
            src={card.image}
            alt="Country Flag"
            className="flag"
          />
        </>
      )}
    </div>
  );
};

export default Card;