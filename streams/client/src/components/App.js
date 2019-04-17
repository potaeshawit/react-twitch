import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Navigate to PageTwo</Link>
    </div>
  );
};

const PageTwo = () => {
  return <div>PageTwo</div>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/pageTwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App
