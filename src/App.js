import React, { Component } from 'react';
import './App.css';
import Table from './Components/Table';
import JsonFetching from './Components/JsonFetching'

class App extends Component {
  render() {
    return (
      <div>
        <Table />
        <JsonFetching />
      </div>
    );
  }
}

export default App;