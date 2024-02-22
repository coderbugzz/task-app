import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Tasks from './component/Tasks';
import AddTask from './component/AddTask';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



