import './gamelist.css';
import Card from './card';
const Games=(props)=>{
    const games=props.games;
    return (
      <div className="grid">
        {games.map((game) => (
          <Card game={game} key={Math.random() * 100} />
        ))}
      </div>
    );
}

export default Games;