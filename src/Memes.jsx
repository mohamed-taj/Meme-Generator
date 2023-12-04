import React, { useEffect } from "react";
import "./meme.css";
export default function Memes() {
  const [meme, setMeme] = React.useState({});
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    async function fetchMemes() {
      const response = await fetch(" https://meme-api.com/gimme");
      const data = await response.json();
      setMeme((prev) => data);
    }
    fetchMemes();
  }, [count]);

  console.log(count);

  function changMemes() {
    setCount((prev) => {
      return prev + 1;
    });
  }

  return (
    <div className=" memes-div">
      <button onClick={changMemes}>Get a New Meme </button>
      <div className="meme-img">
        <h1>get meme {count}</h1>
        <img src={meme.url} alt="" />
      </div>
    </div>
  );
}
