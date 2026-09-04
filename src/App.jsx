import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './component/Navbar';
import ScrollToTop from './ScrollToTop';

import Home from './component/pages/Home';
import Work from './component/pages/Work';
import About from './component/pages/About';
import Contact from './component/pages/Contact';

function App() {
  return (
    <ThemeProvider>

      <div className="min-h-screen bg-beige-100 dark:bg-brown-950 text-brown-900 dark:text-beige-100 transition-colors duration-500">

        <Navbar />

        {/* Auto scroll to top */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>

    </ThemeProvider>
  );
}

export default App;