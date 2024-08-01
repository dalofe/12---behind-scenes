import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
    setChosenCount((prevChosenCount) => prevChosenCount + 1); //these two state updates will not
    //trigger two component function executions. Instead, React will perform a State Batching
    //which will mainly update the state as many times as the same function is called (setChousenCount in this case)
    //and after that the component function is executed
    console.log(chosenCount); //this line here will not print the update state but the old value of it
    //the reason for this is the state update is scheduled by React. It will happen pretty much
    //instantly but the line after the state update will still not get the new value of it.
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        {/* Adding the key here is forcing to throw away and to add a brand new
        Counter component //every time the chosenCount state has changed */}
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={1} />
      </main>
    </>
  );
}

export default App;
