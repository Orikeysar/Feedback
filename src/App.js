import AboutPage from "./Pages/AboutPage.jsx";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./componets/Header.jsx";
import FeedbeckItemList from "./componets/FeedbeckItemList.jsx";
import ArrFeedBackStats from "./componets/FeedBackStats";
import FeedBackItemForm from "./componets/FeedBackItemForm.jsx";
import AboutPageIconLink from "./componets/AboutPageIconLink";
import { FeedBackProvider } from "./Context/FeedBackProvider.jsx";

function App() {

  return (
    <>
      <FeedBackProvider>
        <Router>
          <Header text="FeedBack App By Ori Keysar" />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedBackItemForm />
                    <ArrFeedBackStats />
                    <FeedbeckItemList />
                  </>
                }
              ></Route>

              <Route path="/About" element={<AboutPage />} />
            </Routes>
            <AboutPageIconLink />
          </div>
        </Router>
      </FeedBackProvider>
    </>
  );
}
export default App;
