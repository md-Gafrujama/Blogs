import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog1 from './components/Blog1';
import Blog2 from './components/Blog2';
import FrontPage from './components/Frontpage';

  function App() {
  return (
   
     <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/buyers-content-help" element={<Blog1/>} />
          <Route path="/buyer-journey" element={<Blog2/>} />
      </Routes>
    </Router>
   
  );
}

export default App


