import React from 'react';

const Navbar = ({ setPage }: { setPage: React.Dispatch<string> }) => {
  return (
    <nav>
      <button onClick={() => setPage('planets')}>Planets</button>
      <button onClick={() => setPage('people')}>People</button>
    </nav>
  );
};

export default Navbar;
