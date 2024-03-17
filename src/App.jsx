import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [diff, setDiff] = useState(0);
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // const datetime = new Date();
  // const target = new Date("2024-03-30T19:48");
  const ref = useRef();
  const diff = useRef(0);
  const find = () => {
    const days = Math.floor(diff.current / (1000 * 60 * 60 * 24));
    console.log({ days });
    diff.current = Math.floor(diff.current % (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff.current / (1000 * 3600));
    console.log({ hours });
    diff.current = Math.floor(diff.current % (1000 * 3600));
    const minutes = Math.floor(diff.current / (1000 * 60));
    console.log({ minutes });
    diff.current = Math.floor(diff.current % (1000 * 60));
    const seconds = Math.floor(diff.current / 1000);
    setData({ days, hours, minutes, seconds });
  };
  const timer = () => {
    if (diff.current < 0) {
      setError("set date-time must not be previous date-time than current");
    } else {
      find();
    }
  };

  console.log({ data });

  return (
    <>
      <h1>Count Down Timer</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          diff.current = new Date(ref.current.value) - new Date();
          console.log({ diff: diff.current }, typeof diff.current);
          // setDiff(new Date(ref.current.value) - new Date());
          timer();
          // console.log("ref:", ref.current.value);
        }}
      >
        <input
          type="datetime-local"
          ref={ref}
          required
          onBlur={() => {
            setError(null);
          }}
        />
        <button type="submit">click</button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
