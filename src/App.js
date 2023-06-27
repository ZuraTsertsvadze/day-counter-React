import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Step />
    </div>
  );
}

const Step = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="step-cont">
      <button
        className="previous"
        onClick={() => {
         step &&   setStep((s) => {
            return s - 1;
          });
        }}
      >
        -
      </button>
      {`Step:${step}`}
      <button
        className="next"
        onClick={() => {
          setStep((s) => {
            return s + 1;
          });
        }}
      >
        +
      </button>
      <Counter stepValue={step} />
    </div>
  );
};

const Counter = ({ stepValue }) => {
  const [count, setCount] = useState(0);
  const date = new Date();

  const dato = () => {
    console.log(count);

    if (count === 0) {
      return (
        <div className="text-cont">
          {" "}
          {`Today is ${date.toLocaleString("default", {
            weekday: "short",
          })}  ${date.toLocaleString("default", {
            month: "short",
          })} ${date.getDate()} ${date.getFullYear()}`}{" "}
        </div>
      );
    } else {
      const dayOfMonth = date.getDate();
      const newDay = dayOfMonth + count;

      date.setDate(newDay);

      return (
        <div className="text-cont">
          {" "}
          {`${count < 0 ? count+" "+"days ago was":count +" "+ "days from today is"} ${date.toLocaleString("default", {
            weekday: "short",
          })}  ${date.toLocaleString("default", {
            month: "short",
          })} ${date.getDate()} ${date.getFullYear()}`}{" "}
        </div>
      );
    }
  };

  return (
    <div className="count-cont">
      <button
        className="previous"
        onClick={() => {
         setCount(count - stepValue);
        }}
      >
        -
      </button>
      {`Count:${count}`}
      <button
        className="next"
        onClick={() => {
          setCount(count + stepValue);
        }}
      >
        +
      </button>

      {dato()}
    </div>
  );
};

export default App;
