import React, { useEffect, useRef, useState } from "react";
import css from "./Form.module.css";

const Form = ({ findFn, setError, setData, setCompleted }) => {
  const [id, setId] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const dataTimeEle = useRef(null);
  const btnEle = useRef(null);
  const diff = useRef(0);

  const timer = () => {
    if (id !== 0) {
      clearInterval(id);
      setIsRunning(false);
      setId(0);
      setData({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    } else {
      const timerId = setInterval(() => {
        diff.current -= 1000;
        findFn(diff, setData, setError, setIsRunning, btnEle, setCompleted);
      }, 1000);
      setId(timerId);
    }
  };
  return (
    <form
      className={css.formContainer}
      onSubmit={(e) => {
        e.preventDefault();
        setError("");
        setCompleted(false);

        if (!isRunning) {
          diff.current = new Date(dataTimeEle.current.value) - new Date();
          if (diff.current < 0) setError("date-time mustn't be a past value");
          else timer();
          //   console.log("current:", diff.current);
        } else {
          timer();
        }
      }}
    >
      <input type="datetime-local" ref={dataTimeEle} required />
      <div>
        <button type="submit" ref={btnEle}>
          {isRunning ? "Clear" : "Start"}
        </button>
      </div>
    </form>
  );
};

export default Form;
