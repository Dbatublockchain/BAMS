import React from 'react';
import {Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './containers/navbar/Header';
import Create from './components/Create/Create';
import Home from './components/Home/Home';
import Update from './components/Update/Update';
import WriteOff from './components/WriteOff/WriteOff';
import Member from './components/Member/Member';
import Inspection from './components/Inspection/Inspection';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
        <Header />
        <Routes>
          <Route path="BAMS/" element={<Home />} />
          <Route path="/BAMS/Create" element={<Create />} />
          <Route path="/BAMS/Update" element={<Update />} />
          <Route path="/BAMS/WriteOff" element={<WriteOff />} />
          <Route path="/BAMS/Update/:hash" element={<Update />} />
          <Route path="/BAMS/WriteOff/:hash" element={<WriteOff />} />
          <Route path="/BAMS/Inspection" element={<Inspection />} />
          <Route path="/BAMS/Inspection/:hash" element={<Inspection />} />
          <Route path="/BAMS/Member" element={<Member />} />
        </Routes></div>
        </BrowserRouter>
    </div>
  );
}

export default App;
