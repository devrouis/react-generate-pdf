import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import PdfView from './components/PdfView';
import NotFound from './components/NotFound';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => {

  return (
    <Provider store={store}>
      <Router basename="/reviewreport">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="view-pdf" element={<PdfView />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
