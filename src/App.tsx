import React, { useState } from 'react';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  const [page, setPage] = useState<string>('planets');
  return (
    <div className='App'>
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <div className='content'>
        {page === 'planets' ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default App;
