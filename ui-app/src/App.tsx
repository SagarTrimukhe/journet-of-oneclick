import React from 'react';
import './App.css';
import { Grommet } from 'grommet';
import DemoPage from './DemoPage';

function App() {
  return (
    <div className="App">
     <Grommet>
      <DemoPage/>
     </Grommet>
    </div>
  );
}

export default App;
