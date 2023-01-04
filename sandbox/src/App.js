import React, { useState } from 'react';
import './styles/App.scss'
import Form from './components/Form'
import Listing from './components/Listing';

function App() {
  const [ data, setData ] = useState([]);

  const dataHandler = ({ value }) => { setData(initialState => {
    initialState.push(value)
    return [...initialState]
  })}

  const removeDataHandler = () => {
    setData(initialState => {
      initialState.pop()
      return [...initialState]
  })}

  return (
    <div className="app">
      <div className="app__form">
        <div className="header">
          <h3>Forma</h3>
        </div>
        <Form dataHandler={dataHandler} removeDataHandler={removeDataHandler}/>
      </div>
      <div className="app__listing">
        <div className="header">
          <h3>Data</h3>
        </div>
        <Listing data={data}/>
      </div>
    </div>
  );
}

export default App;
