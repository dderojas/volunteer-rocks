import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Filter from './Filter.jsx';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <p>Bunch of Frooty Tooties</p>
        <div className='filter'>
          <Filter />
        </div>
      </div>
    );
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById('app'));