import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login";
import ProtectedComponent from "./protectedComponent";
import LoginCallback from "./loginCallback";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/login_callback" component={LoginCallback} />
                <Route path="/protected" component={ProtectedComponent} />
            </Switch>
        </Router>
    );
}

export default App;