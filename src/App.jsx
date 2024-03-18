import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import { find } from "./utils/find";
import Card from "./components/Card";

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
      {Object.keys(data).forEach((i, index) => {
        // console.log({ i, index });
        return <Card key={index} title={i} value={data[i]} />;
      })}

      <Form
        findFn={findFn}
        setError={setError}
        setData={setData}
        setCompleted={setCompleted}
      />
      {error === "" && !completed && (
        <div>
          {Object.keys(data).map((i, index) => {
            // console.log({ title, value });
            return <Card key={index} title={i} value={data[i]} />;
          })}
        </div>
      )}
      {completed && <p>Count Down is over What's your next adventures?</p>}
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
