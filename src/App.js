import "./App.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./Pages/Home";
import Introduce from "./Pages/Introduce";
import Lab from './Pages/Lab'
import Playground from './Pages/Playground';
import React from "react";
import Test from './Pages/Test';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduce" element={<Introduce /> }/>
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
