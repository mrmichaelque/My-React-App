const [visibleItems, setVisibleItems] = useState(10);

const loadMoreItems = () => {
    setVisibleItems(prevState => prevState + 10);
};

return (
    // ...
    <ul className="list">
        {filteredData.slice(0, visibleItems).map((item, index) => (
            <li key={index} className="list-item">{item}</li>
        ))}
    </ul>
  { visibleItems < filteredData.length && <button onClick={loadMoreItems}>Load more</button> }
  // ...
);