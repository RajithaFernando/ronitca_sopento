import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
// import Navbarcomponent from './components/Navbarcomponent';
import Profile from './Components/Profile';
import Landing from './Components/Landing'
import Users from './Components/Users/Users'
// import SmsDetails from './components/SmsDetails'
function App() {
    return (
        <Router>
            <div className="App">
                {/* <Navbarcomponent /> */}
                <Route exact path="/Users" component={Users} />
                <Route exact path="/Profile" component={Profile} />
                <Route exact path="/Landing" component={Landing} />
                {/* <Route path="/SMS/:number" component={SmsDetails} /> */}

            </div>
        </Router>
    );
}

export default App;
