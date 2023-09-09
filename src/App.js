import "./App.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Board from './Pages/Board';
import BoardCreate from './Pages/BoardCreate';
import BoardRead from './Pages/BoardRead';
import History from './Pages/History';
import Home from "./Pages/Home";
import Introduce from "./Pages/Introduce";
import Lab from './Pages/Lab'
import Playground from './Pages/Playground';
import React from "react";
import Test from './Pages/Test';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduce" element={<Introduce /> }/>
            <Route path="history" element={<History />}/>
            <Route path="/test" element={<Test />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/lab" element={<Lab />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
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
