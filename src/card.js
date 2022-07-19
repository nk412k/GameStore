import "./card.css";

const Card = (props) => {
  if (props.game.title) {
    return (
      <div className="game-item">
        <div className="card game-item__content ">
          <h3>{props.game.title}</h3>
          <div className="head1 ">
            <p>Platform</p>
            <p>Genre</p>
          </div>
          <div className="head2 ">
            <p>{props.game.platform}</p>
            <p>{props.game.genre}</p>
          </div>
          <div className="head3 ">
            <p>Rating</p>
            <p>Editor Choice</p>
          </div>
          <div className="head4 ">
            <p>{props.game.score}</p>
            <p>{props.game.editors_choice}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Card;
