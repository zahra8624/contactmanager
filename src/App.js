import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";

import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import Test from "./components/test/Test";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "./context";
function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />

              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
            </switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
