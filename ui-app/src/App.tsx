import React from 'react';
import './App.css';
import { Anchor, Grommet, Box } from 'grommet';
import DemoPage from './DemoPage';

function App() {
  return (
    <div className="App">
     <Grommet>
      <DemoPage/>
      <Box margin={'20px'}>
        <Anchor 
          href={"https://forms.gle/XW8PLFjzEEg2JPKj9"}
          target="_blank"
        >Click here to provide Feedback</Anchor>
      </Box>
     </Grommet>
    </div>
  );
}

export default App;
