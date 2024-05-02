import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CountContext = createContext();

function CountProvider(props) {
  const [count, setCount] = useState(0);

  console.log(props);

  return (
    <CountContext.Provider
      value={[count, setCount]}
      {...props}
    ></CountContext.Provider>
  );
}

function CountDisplay() {
  const [count] = useContext(CountContext);

  return <div>The count is: {count}</div>;
}

function Counter() {
  const [, setCount] = useContext(CountContext);
  const increment = () => setCount((c) => c + 1);
  return (
    <button
      onClick={increment}
      className="p-4 rounded-lg text-white font-semibold bg-purple-300"
    >
      Increment
    </button>
  );
}

function App() {
  return (
    <div className="flex justify-center items-center">
      <CountProvider>
        <CountDisplay></CountDisplay>
        <Counter></Counter>
      </CountProvider>
    </div>
  );
}

export default App;
