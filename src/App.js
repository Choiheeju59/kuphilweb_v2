import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Admin from "./Pages/Admin";
import Archive from "./Pages/Archive";
import ArchiveRead from "./Pages/ArchiveRead";
import Cooperate from "./Pages/Cooperate";
import Etc from "./Pages/Etc";
import Exam from "./Pages/Exam";
import History from "./Pages/History";
import Home from "./Pages/Home";
import Introduce from "./Pages/Introduce";
import NotFoundPage from "./Pages/NotFoundPage";
import Policy from "./Pages/Policy";
import Quiz from "./Pages/Quiz";
import React, { useEffect, useState } from "react";
import Recruitment from "./Pages/Recruitment";
import Test from "./Pages/Test";
import TestResult from "./Pages/TestResult";
import Worldcup from "./Pages/Worldcup";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AdminHome from "./Pages/AdminHome";
import useAuthenticated from "./hooks/useAuthenticated";
import Header from "./Components/header/Header";
import Footer from "./Components/footer/Footer";

const queryClient = new QueryClient();

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkAuthentication = useAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    const authenticate = async () => {
      const result = await checkAuthentication();
      if (result) {
        setIsAuthenticated(true);
      } else {
        navigate(`/admin`);
      }
    };
    authenticate();
  }, []);

  return isAuthenticated ? <Outlet /> : null;
};

function App() {
  useEffect(() => {
    console.log(`
_________________
|               |  
|  쿠필 화이팅!!!  |  
|______  _______|
       \\/
     /\\**/\\
    ( o_o  )_)
    ,(u  u  ,),
   {}{}{}{}{}{}  
 `);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <GlobalStyles />
        <BrowserRouter>
          <Wrap>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/introduce" element={<Introduce />} />
              <Route path="/history" element={<History />} />
              <Route path="/archive/:page" element={<Archive />} />
              <Route path="/recruitment" element={<Recruitment />} />
              <Route path="/cooperate" element={<Cooperate />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/etc" element={<Etc />} />
              <Route path="/test/:id" element={<Test />} />
              <Route path="/test/:id/result/:code" element={<TestResult />} />
              <Route path="/worldcup/:id" element={<Worldcup />} />
              <Route path="/exam/:id" element={<Exam />} />
              <Route path="/concert/:num" element={<ArchiveRead />} />
              <Route path="/quiz/:id" element={<Quiz />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="" element={<PrivateRoute />}>
                <Route path="/admin/home" element={<AdminHome />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Wrap>
          <Footer />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

const GlobalStyles = createGlobalStyle`
  ${reset}
  body{
    font-family: 'Pretendard';
    color: #101010;
    text-align: center;
  }
`;
const Wrap = styled.div`
  width: 100%;
  height: auto;

  min-height: calc(100vh - 202px);
  @media screen and (max-width: 767px) {
    min-height: calc(100vh - 152px);
  }
`;

export default App;
