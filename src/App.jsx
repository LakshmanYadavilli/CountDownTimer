import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import { find } from "./utils/find";

function App() {
  const [error, setError] = useState("");
  const [completed, setCompleted] = useState(false);
  const findFn = find;
  const initial = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  const [data, setData] = useState(initial);

  return (
    <>
      <h1>Count Down Timer</h1>

      <Form
        findFn={findFn}
        setError={setError}
        setData={setData}
        setCompleted={setCompleted}
      />
      {error === "" && !completed && (
        <div>
          <h1>Days:{data.days < 10 ? `0${data.days}` : data.days}</h1>
          <h1>Hours:{data.hours < 10 ? `0${data.hours}` : data.hours}</h1>
          <h1>
            Minutes:{data.minutes < 10 ? `0${data.minutes}` : data.minutes}
          </h1>
          <h1>
            Seconds:{data.seconds < 10 ? `0${data.seconds}` : data.seconds}
          </h1>
        </div>
      )}
      {completed && <p>Count Down is over What's your next adventures?</p>}
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
