import { createSignal } from "solid-js";

function Search() {
  const [search, setSearch] = createSignal("");

  function handleSearch() {
    const query = search().trim();
    if (query) {
      // Create a URL with the search term. Modify the URL as needed.
      const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      
      // Open the URL in a new tab
      window.open(url, '_blank');
    } else {
      // Optionally, show an alert or provide feedback if the input is empty
      alert("Please enter a search term.");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission if inside a form
      handleSearch();
    }
  }

  return (
    <div class="flex flex-col items-center p-4">
      <input
        type="text"
        value={search()}
        onInput={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        class="border border-gray-300 rounded-lg p-2 mb-2 w-full max-w-md"
      />
      <button
        onClick={handleSearch}
        class={`bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!search().trim() && 'opacity-50 cursor-not-allowed'}`}
        disabled={!search().trim()} // Disable the button if search input is empty
      >
        Search
      </button>
    </div>
  );
}

export default Search;
