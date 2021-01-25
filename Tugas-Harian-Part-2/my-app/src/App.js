import React from 'react';
import './App.css';
import Gabungkan from './Tugas-9/Tugas-9.js';
import Tampilkan from './Tugas-10/Tugas-10.js';
import Timer from './Tugas-11/Tugas-11.js';

function App() {
  return (
    <div className="App">
      {/* SOAL 1*/}
      <Gabungkan/>
      {/* SOAL 2*/}
      <Tampilkan/>
      {/*SOAL 3*/}
      <Timer/>
    </div>
  );
}

export default App;
