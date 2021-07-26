import "./styles.css";
import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Protected from "./Protected";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const _toggleIsLoggedIn = () => setIsLoggedIn(!isLoggedIn);

  return (
    <Router>
      <div>
        <button onClick={_toggleIsLoggedIn}>
          {isLoggedIn ? "logout" : "login"}
        </button>
        <nav>
          <Link to="/">Home</Link>
          {isLoggedIn && <Link to="/blog">Blog</Link>}
          <Link to="/about">About</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Protected isLoggedIn={isLoggedIn}>
            <Blog />
          </Protected>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <h2>Page not found</h2>
          <Link to="/">Click here to go to the homepage.</Link>
        </Route>
      </Switch>
    </Router>
  );
}
