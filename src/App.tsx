import React from 'react';
import Excercises from './components/Exercises/Excercises'
import logo from './logo.png'
function App() {

  const style = {
    width: '115px',
    display: 'flex',
    /* justify-content: center; */
    /* align-items: center; */
    margin: 'auto',
    padding: '20px'
  }

  return (
    <div>
      <div className="logo">
        <img style={style} src={logo} alt=""/>
      </div>
      <Excercises />
    </div>
  );
}

export default App;
