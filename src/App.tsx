import React from 'react';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Input</h2>
        <p>Component Input</p>
        <p>
          <Input
            fieldName="example1"
            label="Example"
            placeholder="Type a text"
          />
          <Input
            fieldName="example2"
            label="Example with Default Value"
            placeholder="Type a text"
            defaultValue="test value"
          />
          <Input
            fieldName="example3"
            label="Example with Error Message"
            placeholder="Type a text"
            errorMessage="Please, type a number"
          />
        </p>
      </header>
    </div>
  );
}

export default App;
