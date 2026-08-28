import CountryCard, { type Country } from "./CountryCard";

export default function HomePage({ countries }: { countries: Country[] }) {
  return (
    <main className="country-grid">
      {countries.map((country) => (
        <CountryCard key={country.alpha3Code} country={country} />
      ))}
    </main>
  );
}
