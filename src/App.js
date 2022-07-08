import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./components/home-page/Homepage";
import "./styles.scss";

const App = () => {
  // HTML Projects

  const Tribute = lazy(() => import("./components/html-projects/Tribute"));
  const TechDoc = lazy(() => import("./components/html-projects/Survey"));
  const Survey = lazy(() => import("./components/html-projects/Survey"));
  const StorePage = lazy(() => import("./components/html-projects/StorePage"));

  // JS Projects

  const RomanNumerals = lazy(() =>
    import("./components/javascript-projects/RomanNumerals")
  );
  const Palindrome = lazy(() =>
    import("./components/javascript-projects/Palindrome")
  );
  const CaesarCipher = lazy(() =>
    import("./components/javascript-projects/CaesarCipher")
  );
  const CashRegister = lazy(() =>
    import("./components/javascript-projects/CashRegister")
  );
  const PhoneNum = lazy(() =>
    import("./components/javascript-projects/PhoneNum")
  );

  // React Projects

  const Markdown = lazy(() =>
    import("./components/react-projects/markdown-previewer/Markdown")
  );
  const DrumMachine = lazy(() =>
    import("./components/react-projects/drum-machine/DrumMachine")
  );
  const Calculator = lazy(() =>
    import("./components/react-projects/calculator/Calculator")
  );
  const Clock = lazy(() =>
    import("./components/react-projects/25-5-clock/Clock")
  );
  const RandomQuote = lazy(() =>
    import("./components/react-projects/random-quote/RandomQuote")
  );
  const Hardle = lazy(() =>
    import("./components/react-projects/clonedle/Hardle")
  );

  // API Projects
  const WeatherApp = lazy(() => import("./components/api-projects/WeatherApp"));
  const WeatherAppAdvanced = lazy(() =>
    import("./components/api-projects/WeatherAppAdvanced")
  );

  // D3 Projects
  const DisplayChart = lazy(() =>
    import("./components/d3-projects/bar-chart/DisplayChart")
  );
  const DisplayScatterGraph = lazy(() =>
    import("./components/d3-projects/scattergraph/DisplayScatterGraph")
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

            <Route path="/tribute">
              <Suspense fallback={<h1>LOADING</h1>}>
                <Tribute />
              </Suspense>
            </Route>
            <Route path="/tech-doc">
              <Suspense fallback={<h1>LOADING</h1>}>
                <TechDoc />
              </Suspense>
            </Route>
            <Route path="/survey">
              <Suspense fallback={<h1>LOADING</h1>}>
                <Survey />
              </Suspense>
            </Route>
            <Route path="/store-page">
              <Suspense fallback={<h1>LOADING</h1>}>
                <StorePage />
              </Suspense>
            </Route>
            <Route path="/roman-numerals">
              <Suspense fallback={<h1>LOADING</h1>}>
                <RomanNumerals />
              </Suspense>
            </Route>
            <Route path="/palindrome-checker">
              <Suspense fallback={<h1>LOADING</h1>}>
                <Palindrome />
              </Suspense>
            </Route>
            <Route path="/caesar-cipher">
              <Suspense fallback={<h1>LOADING</h1>}>
                <CaesarCipher />
              </Suspense>
            </Route>
            <Route path="/cash-register">
              <Suspense fallback={<h1>LOADING</h1>}>
                <CashRegister />
              </Suspense>
            </Route>
            <Route path="/phone-num">
              <Suspense fallback={<h1>LOADING</h1>}>
                <PhoneNum />
              </Suspense>
            </Route>

            <Route path="/hardle">
              <Suspense fallback={<h1>LOADING</h1>}>
                <Hardle />
              </Suspense>
            </Route>
            <Route path="/clock">
              <Suspense fallback={<h1>LOADING</h1>}>
                <Clock />
              </Suspense>
            </Route>
            <Route path="/calculator">
              <Suspense fallback={<h1>LOADING</h1>}>
                <Calculator />
              </Suspense>
            </Route>
            <Route path="/drum-machine">
              <Suspense fallback={<h1>LOADING</h1>}>
                <DrumMachine />
              </Suspense>
            </Route>
            <Route path="/markdown-previewer">
              <Suspense fallback={<h1>LOADING</h1>}>
                <Markdown />
              </Suspense>
            </Route>
            <Route path="/random-quote">
              <Suspense fallback={<h1>LOADING</h1>}>
                <RandomQuote />
              </Suspense>
            </Route>

            <Route path="/weather-app">
              <Suspense fallback={<h1>LOADING</h1>}>
                <WeatherApp />
              </Suspense>
            </Route>
            <Route path="/advanced-weather-app">
              <Suspense fallback={<h1>LOADING</h1>}>
                <WeatherAppAdvanced />
              </Suspense>
            </Route>

            <Route path="/bar-chart">
              <Suspense fallback={<h1>LOADING</h1>}>
                <DisplayChart />
              </Suspense>
            </Route>
            <Route path="/scatter-graph">
              <Suspense fallback={<h1>LOADING</h1>}>
                <DisplayScatterGraph />
              </Suspense>
            </Route>
          </Switch>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
