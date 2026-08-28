import { useState } from "react";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import countries from "./data.json";

function App() {
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <>
      <Navbar />
      <SearchBar search={search} setSearch={setSearch} />
      <HomePage countries={filteredCountries} />
    </>
  );
}
export default App;
