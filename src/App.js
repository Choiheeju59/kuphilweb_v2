import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Home from "./Pages/Home";
import Test from './Pages/Test';
import Playground from './Pages/Playground';
import Lab from './Pages/Lab'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/lab" element={<Lab />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const GlobalStyles = createGlobalStyle`
  ${reset}
  body{
    font-family:'Noto Sans KR';
    color: #101010;
  }
`;

export default App;
