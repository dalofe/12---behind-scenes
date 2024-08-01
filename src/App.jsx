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
