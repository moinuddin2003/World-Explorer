export type Country = {
  name: string;
  population: number;
  region: string;
  capital?: string;
  flags: {
    png: string;
  };
  alpha3Code: string;
};

export default function CountryCard({ country }: { country: Country }) {
  return (
    <article className="country-card">
      <img
        className="country-card__flag"
        src={country.flags.png}
        alt={`${country.name} flag`}
      />

      <div className="country-card__content">
        <h2>{country.name}</h2>

        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>

        <p>
          <strong>Region:</strong> {country.region}
        </p>

        <p>
          <strong>Capital:</strong> {country.capital || "N/A"}
        </p>
      </div>
    </article>
  );
}
