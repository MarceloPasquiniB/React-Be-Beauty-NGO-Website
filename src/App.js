import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import NotFoundPage from "./Pages/NotFoundPage";
import Home from "./Pages/Home";
import NavBar from "./Components/Functional/NavBar/NavBar";
import Products from "./Pages/Products";
import Subscribe from "./Pages/Subscribe";
import { ViewportProvider } from "./Context/ViewPortContext";
import Footer from "./Components/Functional/Footer/Footer";

function App() {
  return (
    <>
      <Reset />
      <ViewportProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
              <NavBar />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/Products">
                  <Products />
                </Route>
                <Route path="/Subscribe">
                  <Subscribe />
                </Route>
                <Route>
                  <NotFoundPage />
                </Route>
              </Switch>
              <Footer />
            </Router>
          </ThemeProvider>

      </ViewportProvider>
    </>
  );
}

export default App;
