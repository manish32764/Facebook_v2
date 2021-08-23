import React from 'react';
import './App.css';
import TopBlueBar from './component/TopBlueBar';
import NewsFeedPage from './pages/newsFeed/NewsFeedPage';
import TimelinePage from './pages/timeline/TimelinePage';

import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
        <React.Fragment>
            <TopBlueBar/>
            <Router>
                <switch>
                    <Route exact path="/manish">
                        <TimelinePage/>
                    </Route> 
                    <Route path="/">
                        <NewsFeedPage/>
                    </Route> 
                </switch>
            </Router>
        </React.Fragment>
    );
}

export default App;
