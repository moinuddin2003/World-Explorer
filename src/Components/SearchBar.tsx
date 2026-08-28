export default function SearchBar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (value: string) => void;
}) {
  return (
    <input
      type="search"
      value={search}
      placeholder="Search for a country..."
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}
