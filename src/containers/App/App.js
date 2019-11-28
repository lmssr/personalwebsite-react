import React, { Component } from 'react';
import './App.css';
import Card from '../../elements/Card/Card'
import Button from '../../elements/Button/Button'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Scene from '../../components/Threejs/Scene'

// function App() {
//   return (
//     <div className="App">
//       <Header className="App-header" />
//       <Card />
//       <Card />
//       <Scene />
//       <Button />
//       <Footer />
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Card />
        <Scene />
        <Button />
        <Footer />
      </div>
    );
  }
}

export default App;
