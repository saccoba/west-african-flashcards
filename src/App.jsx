import { useState } from 'react';
import './App.css';
import Card from './card.jsx';
import sierraLeone from './assets/SierraLeone.png';
import ghana from './assets/Ghana.png';
import nigeria from './assets/Nigeria.png';
import liberia from './assets/Liberia.png';
import gambia from './assets/Gambia.png';
import senegal from './assets/Senegal.png';
import guinea from './assets/Guinea.png';
import guineaBissau from './assets/GuineaBissau.png';
import coteDIvoire from './assets/CoteDIvoire.png';
import togo from './assets/Togo.png';
import benin from './assets/Benin.png';
import burkinaFaso from './assets/BurkinaFaso.png';
import mali from './assets/Mali.png';
import niger from './assets/Niger.png';
import mauritania from './assets/Mauritania.png';
import capeVerde from './assets/CapeVerde.png';
import algeria from './assets/Algeria.png';
import egypt from './assets/Egypt.png';
import libya from './assets/Libya.png';
import morocco from './assets/Morocco.png';
import sudan from './assets/Sudan.png';
import tunisia from './assets/Tunisia.png';
import burundi from './assets/Burundi.png';
import comoros from './assets/Comoros.png';
import djibouti from './assets/Djibouti.png';
import eritrea from './assets/Eritrea.png';
import ethiopia from './assets/Ethiopia.png';
import kenya from './assets/Kenya.png';
import madagascar from './assets/Madagascar.png';
import malawi from './assets/Malawi.png';
import mauritius from './assets/Mauritius.png';
import mozambique from './assets/Mozambique.png';
import rwanda from './assets/Rwanda.png';
import seychelles from './assets/Seychelles.png';
import somalia from './assets/Somalia.png';
import tanzania from './assets/Tanzania.png';
import uganda from './assets/Uganda.png';
import zambia from './assets/Zambia.png';
import zimbabwe from './assets/Zimbabwe.png';
import angola from './assets/Angola.png';
import cameroon from './assets/Cameroon.png';
import chad from './assets/Chad.png';
import gabon from './assets/Gabon.png';
import botswana from './assets/Botswana.png';
import eswatini from './assets/Eswatini.png';
import lesotho from './assets/Lesotho.png';
import namibia from './assets/Namibia.png';



const cards = [
  {
    image: sierraLeone,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "Sierra Leone | Capital: Freetown | Independence: April 27, 1961"
  },
  {
    image: ghana,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "Ghana | Capital: Accra | Independence: March 6, 1957"
  },
  {
    image: nigeria,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "Nigeria | Capital: Abuja | Independence: October 1, 1960"
  },
  {
    image: liberia,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "Liberia | Capital: Monrovia | Independence: July 26, 1847"
  },
  {
    image: gambia,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "The Gambia | Capital: Banjul | Independence: February 18, 1965"
  },
  {
    image: senegal,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "Senegal | Capital: Dakar | Independence: April 4, 1960"
  },
  {
    image: guinea,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "Guinea | Capital: Conakry | Independence: October 2, 1958"
  },
  {
    image: guineaBissau,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "Guinea-Bissau | Capital: Bissau | Independence: September 24, 1973"
  },
  {
    image: coteDIvoire,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "Côte d'Ivoire | Capital: Yamoussoukro | Independence: August 7, 1960"
  },
  {
    image: togo,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "Togo | Capital: Lomé | Independence: April 27, 1960"
  },
  {
    image: benin,
    region: "west",
    category: "easy",
    question: "Which West African country does this flag belong to?",
    answer: "Benin | Capital: Porto-Novo | Independence: August 1, 1960"
  },
  {
    image: burkinaFaso,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "Burkina Faso | Capital: Ouagadougou | Independence: August 5, 1960"
  },
  {
    image: mali,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "Mali | Capital: Bamako | Independence: September 22, 1960"
  },
  {
    image: niger,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "Niger | Capital: Niamey | Independence: August 3, 1960"
  },
  {
    image: mauritania,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "Mauritania | Capital: Nouakchott | Independence: November 28, 1960"
  },
  {
    image: capeVerde,
    region: "west",
    question: "Which West African country does this flag belong to?",
    answer: "Cape Verde | Capital: Praia | Independence: July 5, 1975"
  },
  {
    image: algeria,
    region: "north",
    question: "Which West African coutry does this flag belong to?",
    answer: "Algeria | Capital: Algiers | Independence: July 5, 1962"
  },
  {
    image: morocco,
    region: "north",
    question: "Which West African coutry does this flag belong to?",
    answer: "Morocco | Capital: Rabat | Independence: March 2, 1956"
  },
  {
    image: tunisia,
    region: "north",
    question: "Which West African coutry does this flag belong to?",
    answer: "Tunisia | Capital: Tunis | Independence: March 20, 1956"
  },
  {
    image: libya,
    region: "north",
    question: "Which West African coutry does this flag belong to?",
    answer: "Libya | Capital: Tripoli | Independence: December 24, 1951"
  },
  {
    image: egypt,
    region: "north",
    question: "Which West African coutry does this flag belong to?",
    answer: "Egypt | Capital: Cairo | Independence: February 28, 1922"
  },
  {
    image: sudan,
    region: "north",
    question: "Which West African coutry does this flag belong to?",
    answer: "Sudan | Capital: Khartoum | Independence: January 1, 1956"
  },
  {
    image: burundi,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Burundi | Capital: Gitega | Independence: July 1, 1962"
  },
  { 
    image: rwanda,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Rwanda | Capital: Kigali | Independence: July 1, 1962"
  },
  {
    image: uganda,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Uganda | Capital: Kampala | Independence: October 9, 1962"
  },
  {
    image: kenya,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Kenya | Capital: Nairobi | Independence: December 12, 1963"
  },
  {
    image: tanzania,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Tanzania | Capital: Dodoma | Independence: December 9, 1961"
  },
  {
    image: ethiopia,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Ethiopia | Capital: Addis Ababa | Independence: May 13, 1941"
  },
  {
    image: somalia,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Somalia | Capital: Mogadishu | Independence: July 1, 1960"
  },
  {
    image: djibouti,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Djibouti | Capital: Djibouti | Independence: June 27, 1977"
  },
  {
    image: eritrea,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Eritrea | Capital: Asmara | Independence: May 24, 1993"
  },
  {
    image: seychelles,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Seychelles | Capital: Victoria | Independence: June 29, 1976"
  },
  {
    image: mauritius,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Mauritius | Capital: Port Louis | Independence: March 12, 1968"
  },
  {
    image: malawi,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Malawi | Capital: Lilongwe | Independence: July 6, 1964"
  },
  {
    image: zambia,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Zambia | Capital: Lusaka | Independence: October 24, 1964"
  },
  {
    image: mozambique,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Mozambique | Capital: Maputo | Independence: June 25, 1975"
  },
  {
    image: madagascar,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Madagascar | Capital: Antananarivo | Independence: June 26, 1960"
  },
  {
    image: comoros,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Comoros | Capital: Moroni | Independence: July 6, 1975"
  },
  {
    image: zimbabwe,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Zimbabwe | Capital: Harare | Independence: April 18, 1980"
  },
  {
    image: angola,
    region: "central",
    question: "Which West African coutry does this flag belong to?",
    answer: "Angola | Capital: Luanda | Independence: November 11, 1975"
  },
  {
    image: cameroon,
    region: "central",
    question: "Which West African coutry does this flag belong to?",
    answer: "Cameroon | Capital: Yaoundé | Independence: January 1, 1960"
  },
  {
    image: chad,
    region: "central",
    question: "Which West African coutry does this flag belong to?",
    answer: "Chad | Capital: N'Djamena | Independence: August 11, 1960"
  },
  {
    image: somalia,
    region: "east",
    question: "Which West African coutry does this flag belong to?",
    answer: "Somalia | Capital: Mogadishu | Independence: July 1, 1960"
  },
  {
    image: gabon,
    region: "central",
    question: "Which West African coutry does this flag belong to?",
    answer: "Gabon | Capital: Libreville | Independence: August 17, 1960"
  },
  {
    image: botswana,
    region: "south",
    question: "Which West African coutry does this flag belong to?",
    answer: "Botswana | Capital: Gaborone | Independence: September 30, 1966"
  },
  {
    image: namibia,
    region: "south",
    question: "Which West African coutry does this flag belong to?",
    answer: "Namibia | Capital: Windhoek | Independence: March 21, 1990"
  },
  {
    image: lesotho,
    region: "south",
    question: "Which West African coutry does this flag belong to?",
    answer: "Lesotho | Capital: Maseru | Independence: October 4, 1966"
  },
  {
    image: eswatini,
    region: "south",
    question: "Which West African coutry does this flag belong to?",
    answer: "Eswatini | Capital: Mbabane | Independence: September 6, 1968"
  },
];


const App = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  const nextCard = () => {
    let randomIndex = Math.floor(Math.random() * cards.length);

    while (randomIndex === currentCard) {
      randomIndex = Math.floor(Math.random() * cards.length);
    }

    setCurrentCard(randomIndex);
    setFlipped(false);
  };

  return (
    <div className="App">
      <h1>🌍 African Flags Flashcards</h1>

      <p>
        Test your knowledge of African countries by identifying
        their flags and learning key facts.
      </p>

      <h3>Total Cards: {cards.length}</h3>

      <Card
        card={cards[currentCard]}
        flipped={flipped}
        flipCard={flipCard}
      />

      <div className="navigation">
        <button onClick={nextCard}>◀</button>
        <button onClick={nextCard}>▶</button>
      </div>
    </div>
  );
};

export default App;