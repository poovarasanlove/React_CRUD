import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './common/Header/header';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import CrudForm from './pages/CrudForm'
import Home from './pages/Home'
import styles from './styles/style.scss';
import { filter } from 'lodash';
import { connect} from 'react-redux'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

class App extends Component {
   render() {
      return (
         <div className="main_con">
            <Router>
               <Header />
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/Form" component={CrudForm} />
                  <Route path="/Dashboard" component={Dashboard} />
                  <Route path="/Contact" component={Contact} />
               </Switch>
            </Router>
         </div>
      );
   }
}
export default connect()(App);





