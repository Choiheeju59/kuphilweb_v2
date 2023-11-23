import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Archive from './Pages/Archive';
import Cooperate from './Pages/Cooperate';
import Exam from  './Pages/Exam'
import History from './Pages/History';
import Home from "./Pages/Home";
import Introduce from "./Pages/Introduce";
import Policy from './Pages/Policy'
import React from "react";
import Recruitment from './Pages/Recruitment';
import Etc from './Pages/Etc';
import Test from './Pages/Test';
import Worldcup from  './Pages/Worldcup'
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
            <Route path="/history" element={<History />}/>
            <Route path="/archive" element={<Archive />}/>
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/cooperate" element={<Cooperate />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/etc" element={<Etc />} />
            <Route path="/test/:id" element={<Test />} />
            <Route path="/worldcup/:id" element={<Worldcup />} />
            <Route path="/exam/:id" element={<Exam />} />
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
    text-align: center;
  }
`;

export default App;
