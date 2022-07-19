import { useEffect, useState, useCallback, useRef } from "react";
import "./gamelist.css";

import Games from "./games";

const GameList = () => {
  let [games, setGames] = useState([]);
  const [fetchGames, setFetchedGames] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isAscending, setAscending] = useState(false);
  const [isError, setError] = useState(null);
  const inputRef = useRef("");

  const fetchGamesHandler = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setFetchedGames(data);
      setGames(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchGamesHandler();
  }, [fetchGamesHandler]);

  const scoreSortHandler = () => {
    if (isAscending) {
      let sortedGames = games.sort((gameA, gameB) => {
        return gameA.score < gameB.score ? 1 : -1;
      });
      setGames([...sortedGames]);
      setAscending(false);
    } else {
      let sortedGames = games.sort((gameA, gameB) => {
        return gameA.score > gameB.score ? 1 : -1;
      });
      setGames([...sortedGames]);
      setAscending(true);
    }
  };



  const searchHandler = () => {
    const value = inputRef.current.value || "";
    if (value === "") {
      setGames(fetchGames);
    } else {
      const filteredGames = fetchGames.filter((game) => game.title == value);
      setGames(filteredGames);
    }
  };

  let content = <p>No Games found</p>;
  if (games.length > 0) content = <Games games={games} />;
  if (isLoading) content = <p>Loading....</p>;
  if (isError) {
    content = <p>{isError}</p>;
  }

  return (
    <div className="center card">
      <div className="header">
        <h2>Games</h2>
        <section className="action">
          <input placeholder="Search" ref={inputRef}></input>
          <button className="button" onClick={searchHandler}>
            Search
          </button>
          <button className="button" onClick={scoreSortHandler}>
            Sort By Score{isAscending ? "(Descending)" : "(Ascending)"}
          </button>
        </section>
      </div>
      {content};
    </div>
  );
};

export default GameList;
