import React from 'react';
import './App.css';

const tasks = ["task 1", "task 2", "task 3", "task 4"];

const App = () => ( <ul>{ tasks.map(task => <li>{ task }</li>) }</ul> );

export default App;
