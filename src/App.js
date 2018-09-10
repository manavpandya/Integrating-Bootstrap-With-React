import React, { Component } from 'react';
import './App.css';
import Jumbotron from './react-bootstrap/Jumbotron';
import Carousel from './react-bootstrap/Carousel';
// import ReactTable from './reactstrap-components/Table';
// import ReactCard from './reactstrap-components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Using Table */}
        {/* <ReactTable/> */}

        {/* Using Card */}
        {/* <ReactCard/> */}

        {/* Using Jumbotron */}
        <Jumbotron />
        {/* Using Carousel */}
        <Carousel />
      </div>
    );
  }
}

export default App;
