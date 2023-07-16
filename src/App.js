import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./components/home-page/Homepage";
import "./styles.scss";

const App = () => {


  const Hardle = lazy(() =>
    import("./components/react-projects/clonedle/Hardle")
  );

  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="App">
          <Helmet>
            <title>Jon Sutton React Developer</title>
            <link rel="canonical" href="/" />

            <meta name="description" content="My app description" />
          </Helmet>
          <Switch>
            <Route path="/" exact component={Homepage} />
          </Switch>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
