import React from 'react';
import OneSearchResult from './component/OneSearchResult';

const SearchResultPage = () => {
    return (
        <div class="main-container">
            <div class="main-center">
                <div class="searchResults">
                    <div class="first-search-result-wrapper">
                        <OneSearchResult/>
                    </div>

                    <div class="search-result-wrapper">
                        <OneSearchResult/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultPage;