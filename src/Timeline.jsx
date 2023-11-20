// App.js
import React from 'react';
import Timeline from './Timeline';

const eventsData = [
  {
    date: '2022-01-01',
    title: 'Event 1',
    description: 'Description for Event 1.',
  },
  {
    date: '2022-02-15',
    title: 'Event 2',
    description: 'Description for Event 2.',
  },
  {
    date: '2022-05-20',
    title: 'Event 3',
    description: 'Description for Event 3.',
  },
];

const App = () => {
  return (
    <div>
      <h1>Timeline Component Example</h1>
      <Timeline events={eventsData} />
    </div>
  );
};

export default App;
