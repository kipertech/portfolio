import React, { useState } from 'react';
import ReactPageScroller from 'react-page-scroller';

// Components
import ScreenHello from "./screens/screen_hello";
import ScreenTimeline from "./screens/screen_timeline";

const App = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (number) => setCurrentPage(number);

    const handleBeforePageChange = (number) => console.log(number);

    return(
        <React.Fragment style={{ display: 'flex', flex: 1, width: '100vw', height: '100vh' }}>
            <ReactPageScroller
                pageOnChange={handlePageChange}
                onBeforePageScroll={handleBeforePageChange}
                customPageNumber={currentPage}>
                {/* First Page */}
                <ScreenHello/>

                {/* Second Page */}
                <ScreenTimeline/>
            </ReactPageScroller>
        </React.Fragment>
    )
}

export default App;
