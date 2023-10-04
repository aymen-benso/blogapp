import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import BlogDetail from './components/BlogPost';

function App() {
  return (
    <Router>
     <Blog />
      <Routes>
        <Route path="/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;