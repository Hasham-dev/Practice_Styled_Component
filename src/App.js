import React from 'react'
import './App.css';
import Demo from './components/pages/Demo';
import { Wrapper } from './components/styles/ButtonStyles';

function App() {
  return (
    <div className="App">
      <Demo name="Hasham" wrapperAtt="blue" />
      <Demo name="Rizwan" wrapperAtt="seaGreen" />
    </div>
  );
}

export default App;
