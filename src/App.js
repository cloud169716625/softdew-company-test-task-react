import React from 'react';
import './assets/styles/index.scss';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import Referral from './screens/Referral';

import Landing from './screens/Landing';

import Tc from './screens/Tc';

import PrivacyPolicy from './screens/PrivacyPolicy';

import MasterCardTerms from './screens/MasterCardTerms';

import { BASENAME } from './utils/constants';
import useContentful from './utils/content';

function App() {
  const content = useContentful();
  const { termsPage1, termsMasterCard, privacyPolicy } = content.fields;
  if (window.location.pathname === '/') {
    window.location.pathname = '/waiting-list';
  }
  return (
    <Router basename={BASENAME}>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/register" element={<Landing />} />
        <Route exact path="/congrats" element={<Referral />} />
        <Route exact path="/terms-of-use" element={<Tc content={termsPage1} />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy content={privacyPolicy} />} />
        <Route
          exact
          path="/mastercard-uk-terms"
          element={<MasterCardTerms content={termsMasterCard} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
