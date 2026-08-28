import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import countries from "./data.json";

function App() {
  return (
    <>
      <Navbar />
      <HomePage countries={countries} />
    </>
  );
}
export default App;
