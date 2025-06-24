import { useState } from "react";
import Home from "./New";
function App() {
  let [user, setUser] = useState({ name: "nallasivam", username: "Kowshik sharan " })
  return (
    <>
      <Home name="Kowshik sharan" usenmae="nallasivam" />
    </>
  );
}
export default App;