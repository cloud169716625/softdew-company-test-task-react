/* eslint-disable prefer-rest-params */
import React, { useState } from 'react';

const TERMS_STATUS_KEY = 'is_terms_accepted';

function handleStats() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());

  gtag('config', 'G-MX1Z5X56WB');
  gtag('config', 'G-E4WKB71KXT');
  gtag('config', 'G-LR2MJXQBGM');
}

const Terms = () => {
  const termsHandled = localStorage.getItem(TERMS_STATUS_KEY);
  const [isVisible, setIsVisible] = useState(!termsHandled);

  if (termsHandled && termsHandled === 'true') {
    handleStats();
  }
  if (!isVisible) {
    return <></>;
  }
  return (
    <div className="fixed-bottom p-3 bg-white container-fluid shadow">
      <div className="row">
        <p className="p-0 ps-3 m-0 col-12 col-md-8">
          By clicking &quot;Allow All&quot;, you agree to the storing of{' '}
          <a
            href="https://baanx.com/terms-of-use"
            target="_blank"
            className="link link-primary"
            rel="noreferrer">
            cookies
          </a>{' '}
          on your device to enhance your experience, analyze site usage and assist in our marketing
          efforts
        </p>
        <span className="col-12 col-md-4 text-center">
          <button
            className="btn btn-outline-primary me-2"
            style={{ width: '45%' }}
            type="button"
            onClick={() => {
              setIsVisible(false);
              localStorage.setItem(TERMS_STATUS_KEY, 'false');
            }}>
            Reject All
          </button>
          <button
            className="btn btn-primary"
            style={{ width: '45%' }}
            type="button"
            onClick={() => {
              setIsVisible(false);
              localStorage.setItem(TERMS_STATUS_KEY, 'true');
              handleStats();
            }}>
            Allow All
          </button>
        </span>
      </div>
    </div>
  );
};

export default Terms;
