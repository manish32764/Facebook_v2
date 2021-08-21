import React from 'react';

const SearchResultPage = () => {
    return (
        <div class="main-container">
            <div class="main-center">
                <div class="searchResults">
                    <div class="first-search-result-wrapper">
                        <div class="one-search-result">
                            <img src="https://picsum.photos/701" class="small-circle-image" />
                            <div class="search-result-person-info">
                                <span class="search-result-person-name">Manish Kumar</span>
                                <span class="search-result-person-name">Friend</span>
                                <span class="search-result-person-name top-margin-nine-px">13 Mutual Friend</span>
                                <span class="search-result-person-name">Works at Dell</span>
                            </div>
                            <button class="loginBtn loginBtn--facebook">Add Friend</button>
                        </div>
                    </div>

                    <div class="search-result-wrapper">
                        <div class="one-search-result">
                            <img src="https://picsum.photos/702" class="small-circle-image" />
                            <div class="search-result-person-info">
                                <span class="search-result-person-name">Manish Kumar</span>
                                <span class="search-result-person-name">Friend</span>
                                <span class="search-result-person-name top-margin-nine-px">13 Mutual Friend</span>
                                <span class="search-result-person-name">Works at Dell</span>
                            </div>
                            <button class="loginBtn loginBtn--facebook">Add Friend</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultPage;