import React, { useState, useEffect } from 'react';

function SearchBar({ data }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        setResults(
            data.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, data]);
    useEffect(() => {
        if (debouncedSearchTerm) {
            setFilteredData(data.filter(item => item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())));
        } else {
            setFilteredData(data);
        }
    }, [debouncedSearchTerm]);
    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <ul>
                {results.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}