import { useState } from "react";
import "./App.css";
import { Button, HStack } from "@chakra-ui/react";
import Navbar from "./components/app-components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack> */}
      <Navbar />
      <div className="App">
        <h1>Welcome to the App</h1>
        <p>Count is: {count}</p>
        <Button onClick={() => setCount(count + 1)}>Increment Count</Button>
      </div>
    </>
  );
}

export default App;
