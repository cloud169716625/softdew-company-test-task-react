/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { isMobile } from 'react-device-detect';
import FAQ from '../../../assets/faq';

const FaqModal = () => (
  <div className="modal fade faq-modal" id="modal-faq" tabIndex="-1" role="dialog">
    <div
      className={`modal-dialog ${isMobile ? '' : 'modal-dialog-centered'}`}
      style={{ minHeight: '100vh' }}
      role="document">
      <div className="modal-content" style={{ minHeight: isMobile ? '100vh' : '' }}>
        <span
          type="button"
          className="close d-block w-100 text-end pe-3"
          data-dismiss="modal"
          aria-label="Close">
          <img alt="Close" src="/assets/images/close.svg" className="p-2" />
        </span>
        <div className="modal-body">
          <div className="faq-section">
            <header>
              <h2>FAQs</h2>
              <p>Answers to the most frequently asked questions.</p>
            </header>
            {FAQ.map((f) => (
              <>
                <details>
                  <summary>
                    <h4>{f.FAQ}</h4>
                    <span className="material-symbols-outlined arrow down" />
                  </summary>
                  <p>{f.Answers}</p>
                </details>

                <hr />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FaqModal;
