import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import News from './Components/News';
import { useState } from 'react';

function App() {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#0d6efd" progress={progress} />
        <Routes>
          <Route exact path="/" element={<News
            setProgress={setProgress}
            apiKey={apiKey}
            key="general"
            pageSize={pageSize}
            country="in"
            category="general"
          />} />
        </Routes>
        <Routes>
          <Route exact path="/business" element={<News
            setProgress={setProgress}
            apiKey={apiKey}
            key="business"
            pageSize={pageSize}
            country="in"
            category="business"
          />} />
        </Routes>
        <Routes>
          <Route exact path="/entertainment" element={<News
            setProgress={setProgress}
            apiKey={apiKey}
            key="entertainment"
            pageSize={pageSize}
            country="in"
            category="entertainment"
          />} />
        </Routes>
        <Routes>
          <Route exact path="/health" element={<News
            setProgress={setProgress}
            apiKey={apiKey}
            key="health"
            pageSize={pageSize}
            country="in"
            category="health"
          />} />
        </Routes>
        <Routes>
          <Route exact path="/sports" element={<News
            setProgress={setProgress}
            apiKey={apiKey}
            key="sports"
            pageSize={pageSize}
            country="in"
            category="sports"
          />} />
        </Routes>
        <Routes>
          <Route exact path="/science" element={<News
            setProgress={setProgress}
            apiKey={apiKey}
            key="science"
            pageSize={pageSize}
            country="in"
            category="science"
          />} />
        </Routes>
        <Routes>
          <Route exact path="/technology" element={<News
            setProgress={setProgress}
            apiKey={apiKey}
            key="technology"
            pageSize={pageSize}
            country="in"
            category="technology"
          />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
