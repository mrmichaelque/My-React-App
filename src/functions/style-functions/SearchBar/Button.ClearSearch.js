import React from 'react';
import UseTheme from '../CustomThemeProvider';
import { Button } from './Button.ClearSearch';

function ClearSearchButton() {

  return (
      <form onSubmit={handleSearch}>
<input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
        />
        <button type="submit">Search</button>
        <button type="button" onClick={clearSearch}>Clear</button>
  );

}return (
          <div style={{ margin: '20px' }}>
              <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px' }}>
                  <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search..."
                      style={{ padding: '10px', width: '200px' }}
                  />
                  <button type="submit" style={{ padding: '10px' }}>Search</button>
              </form>
          </div>
          );

export default ClearSearchButton;