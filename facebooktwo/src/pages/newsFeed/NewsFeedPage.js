import React from 'react';
import NewsFeed from './component/NewsFeed';
import LeftSideMenu from './../../component/LeftSideNavigationMenu';
import SearchResultPage from './../searchResult/SearchResultPage';
import { BrowserRouter as Router, Route, useRouteMatch} from "react-router-dom";

const NewsFeedPage = () => {
    let { path, url } = useRouteMatch();

    return (
        <React.Fragment>
            <LeftSideMenu/>
            <switch>
                    <Route path="/search"><SearchResultPage/></Route> 
                    <Route exact path={url}><NewsFeed/></Route> 
            </switch>
        </React.Fragment>
   );
};

export default NewsFeedPage;