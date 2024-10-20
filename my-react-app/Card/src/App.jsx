import Card from "./Card.jsx";
import "./App.css";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton.jsx";

function App() {
  const cards = Array.from({ length: 102 }, (_, i) => <Card key={i} />);
  console.log(cards);

  return (
    <div className="container">
      {cards.map((card, index) => (
        <div className="item" key={index}>
          {card}
        </div>
      ))}
      <div className="scroll-To-TopButton">{<ScrollToTopButton />}</div>
    </div>
  );
}

export default App;
