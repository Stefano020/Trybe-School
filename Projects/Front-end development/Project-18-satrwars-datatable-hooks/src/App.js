import React from 'react';
import StarWarsDataTable from './pages/StarWarsDataTables';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <StarWarsDataTable />
    </Provider>
  );
}

export default App;
