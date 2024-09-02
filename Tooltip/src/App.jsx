import "./App.css";
import Tooltipp from "./components/Tooltipp";

function App() {
  return (
    <>
      <div className="card">
        <Tooltipp text="count button">
          <button className="share-button">count is</button>
        </Tooltipp>
      </div>
    </>
  );
}

export default App;
