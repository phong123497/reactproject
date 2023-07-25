import { useState } from "react";
import Button from "@mui/material/Button";
import TabIndicator from "@mui/material/Tabs/TabIndicator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      {/* </div> */}

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  );
}

export default App;
