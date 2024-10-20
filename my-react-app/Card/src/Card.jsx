import profilePic from "./assets/profilePic.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile pricture" />
      <h2 className="card-title"> Shafeeq</h2>
      <p className="card-text">I make Youtube video and play video games</p>
    </div>
  );
}

export default Card;
