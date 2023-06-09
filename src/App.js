import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import Navbar from './Navbar';


function App() {
  return (
    <div id='body'>
      <Sidebar />
      <Navbar />
      <Main />
    </div>
  )
}

export default App