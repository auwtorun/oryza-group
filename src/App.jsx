import React, { useEffect, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes as Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackHome from "./components/BackHome";
import HomePage from "./pages/HomePage";
import KurikulumPage from "./pages/KurikulumPage"
import MBKMPage from "./pages/MBKMPage"
import ContactPage from "./pages/ContactPage";

export const MyContext = React.createContext();

const App = () => {
  const contextValue = {};
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Suspense
        fallback={
          <div>
            <p>Loading...</p>
          </div>
        }
      >
        <Router>
          <MyContext.Provider value={contextValue}>
            <Navbar></Navbar>
            <Switch>
              <Route path="/" exact Component={HomePage}></Route>
              <Route path="/KurikulumPage" Component={KurikulumPage}></Route>
              <Route path="/MBKMPage" Component={MBKMPage}></Route>
              <Route path="/ContactPage" Component={ContactPage}></Route>
            </Switch>
            <Footer></Footer>
            {/* <BackHome></BackHome> */}
          </MyContext.Provider>
        </Router>
      </Suspense>
    </>
  );
};
export default App;
