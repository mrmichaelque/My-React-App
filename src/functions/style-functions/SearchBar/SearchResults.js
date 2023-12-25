return (
    <div>
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
            />
            <button type="submit">Search</button>
        </form>
        <ul>
            {filteredData.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);