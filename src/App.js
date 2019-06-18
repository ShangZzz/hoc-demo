import React from 'react';
import Dumb from './HocDemo';
import Context from './Context';


function App() {
  return (
    <div className="App">
      <Dumb name="木偶组件" color="#afa"/>
      <Context />
    </div>
  );
}

export default App;
