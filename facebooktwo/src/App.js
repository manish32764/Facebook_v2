import React from 'react';
import './App.css';
import TopBlueBar from './component/Header';
import NewsFeedPage from './pages/NewsFeedPage';
import TimelinePage from './pages/TimelinePage';

import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
        <React.Fragment>
            <TopBlueBar/>
            <Router>
                <switch>
                    <Route exact path="/manish"><TimelinePage/></Route> 
                    <Route path="/"><NewsFeedPage/></Route> 
                </switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
