import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Home from "./Pages/Home";
import Introduce from "./Pages/Introduce";
import Lab from './Pages/Lab'
import Playground from './Pages/Playground';
import Test from './Pages/Test';
import Board from './Pages/Board';
import BoardRead from './Pages/BoardRead';
import BoardCreate from './Pages/BoardCreate';

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
          <Route path="/board" element={<Board />} />
          <Route path="/board/read/:id" element={<BoardRead />} />
          <Route path="/board/create" element={<BoardCreate />} />
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
