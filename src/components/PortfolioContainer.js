import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/PortfolioPage';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');//set page when first loaded

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div id='page-container'>
      <div id="content-wrap">

        <header className="d-flex justify-content-between">
          <h1 className='myName'>
            Connor Hollis
          </h1>
          {/* We are passing the currentPage from state and the function to update it */}
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* Here we are calling the renderPage method which will return a component  */}
        </header>

        <main class='display-10'>
          {renderPage()}
        </main>

      </div>

    </div>
  );
}
