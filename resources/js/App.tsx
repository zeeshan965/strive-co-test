import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

// Import pages
import Dashboard from './pages/Test';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
            </Routes>
        </Router>
    );
}

export default App;
