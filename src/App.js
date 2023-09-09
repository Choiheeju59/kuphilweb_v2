import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Home from "./Pages/Home";
import Introduce from "./Pages/Introduce";
import History from './Pages/History';
import Test from './Pages/Test';
import Worldcup from  './Pages/Worldcup'
import Exam from  './Pages/Exam'
import ExamPaper from  './Pages/ExamPaper'
import Recruitment from './Pages/Recruitment';
import Policy from './Pages/Policy'
import Cooperate from './Pages/Cooperate';

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
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/cooperate" element={<Cooperate />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/test" element={<Test />} />
            <Route path="/worldcup" element={<Worldcup />} />
            <Route path="/exam" element={<Exam />} />
            <Route path="/exam/:id" element={<ExamPaper />} />
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
