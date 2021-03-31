import React from 'react';
import Table from '../components/Table';
import Filters from '../components/Filters';

export default function StarWarsDataTables() {
  return (
    <div>
      <Filters />
      <Table />
    </div>
  );
}
