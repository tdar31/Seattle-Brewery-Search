import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Cards from "./pages/Cards";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/map" component={Map} />
                    <Route exact path="/cards" component={Cards} />
                    <Route exact path="/books" component={Books} />
                    <Route exact path="/books/:id" component={Detail} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
