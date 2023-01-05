import React from 'react';
import { isMobile } from 'react-device-detect';
import Fade from 'react-reveal/Fade';
import { links } from '../../../../utils/constants';
import { SectionContainer } from '../Layout';

import LinkedIn from './partials/linked';
import Twitter from './partials/twitter';
import Facebook from './partials/facebook';

const Footer = () => (
  <SectionContainer className="bg-dark">
    <div className="footer-layout d-f">
      <div className={`${!isMobile ? 'd-flex' : ''}`}>
        <div className="bg-dark py-4 col-12">
          <Fade bottom>
            <div className="row">
              <div
                className="col d-flex flex-column justify-content-start"
                style={{ marginBottom: isMobile ? '3.438rem' : '0', paddingLeft: '1.75rem' }}>
                <div className="text-white wl-footer-header mb-1">Features</div>
                <div className="text-white mt-2 wl-footer-link">
                  <a href={links.hollywood_vet} target="_blank" rel="noreferrer">
                    The Hollywood Vet Gala
                  </a>
                </div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.newsletter} target="_blank" rel="noreferrer">
                    Subscribe to Newsletters
                  </a>
                </div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.upcoming} target="_blank" rel="noreferrer">
                    Subscribe to Upcoming Webinars
                  </a>
                </div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.incubator} target="_blank" rel="noreferrer">
                    Business Incubator Program
                  </a>
                </div>
                <div className="text-white wl-footer-header mt-3 mb-1">VetCoin Games</div>
                <div className="text-white mt-2 wl-footer-link">
                  <a href={links.armory_smash_ios} target="_blank" rel="noreferrer">
                    Armory Smash (iOS)
                  </a>
                </div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.armory_smash_android} target="_blank" rel="noreferrer">
                    Armory Smash (Android)
                  </a>
                </div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.decipher_ios} target="_blank" rel="noreferrer">
                    Decipher Agency (iOS)
                  </a>
                </div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.decipher_android} target="_blank" rel="noreferrer">
                    Decipher Agency (Android)
                  </a>
                </div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.rampage_ios} target="_blank" rel="noreferrer">
                    Rampage (iOS)
                  </a>
                </div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.rampage_android} target="_blank" rel="noreferrer">
                    Rampage (Android)
                  </a>
                </div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.stand_ground_ios} target="_blank" rel="noreferrer">
                    Stand Your Ground (iOS)
                  </a>
                </div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.stand_ground_android} target="_blank" rel="noreferrer">
                    Stand Your Ground (Android)
                  </a>
                </div>
              </div>
              <div
                className="col d-flex flex-column justify-content-start"
                style={{ marginBottom: isMobile ? '3.438rem' : '0', paddingLeft: '1.75rem' }}>
                <div className="text-white wl-footer-header mb-1">Collaborations</div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.vetcoin_domains} target="_blank" rel="noreferrer">
                    VETCOIN Domains(.vets)
                  </a>
                </div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.vetcoin_coffee} target="_blank" rel="noreferrer">
                    VETCOIN Coffee
                  </a>
                </div>
                <div className="text-white wl-footer-header mt-3 mb-1">Downloads</div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.vetcoin_wallet} target="_blank" rel="noreferrer">
                    VetCoin Wallet
                  </a>
                </div>
                <div className="text-white mt-2 wl-footer-link">
                  <a href={links.vetcoin_whitepaper} target="_blank" rel="noreferrer">
                    VetCoin Whitepaper
                  </a>
                </div>
                <div className="text-white wl-footer-header mt-3 mb-1">Resources</div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.videos} target="_blank" rel="noreferrer">
                    Videos & Tutorials
                  </a>
                </div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.florida_veturans} target="_blank" rel="noreferrer">
                    Florida Venterans&apos; Benefits Guide 2022
                  </a>
                </div>
              </div>
              <div
                className="col d-flex flex-column justify-content-start"
                style={{ marginBottom: isMobile ? '3.438rem' : '0', paddingLeft: '1.75rem' }}>
                <div className="text-white wl-footer-header mb-1">Certification</div>
                <div className="mt-2">
                  <img
                    src="/assets/images/Vetcoin-Seal.png"
                    className="img-fluid"
                    alt="Vetcoin Seal"
                    // style={{ maxWidth: 220 }}
                  />
                </div>
                <div className="text-text-shadow mt-2  wl-footer-link">
                  EIN Assigned:
                  <br /> 87-3383836
                </div>
                <div className="text-text-shadow mt-4  wl-footer-link">
                  D-U-N-S Number:
                  <br /> 118790424
                </div>
                <div className="text-white mt-4  wl-footer-link">
                  <a href={links.irsLink} target="_blank" rel="noreferrer" className="hover">
                    IRS Determination Letter
                  </a>
                </div>
                <div className="text-white mt-4  wl-footer-link">
                  <a href={links.letter} target="_blank" rel="noreferrer" className="hover">
                    See Letter
                  </a>
                </div>
              </div>
              <div
                className="col d-flex flex-column justify-content-start"
                style={{ marginBottom: isMobile ? '3.438rem' : '0', paddingLeft: '1.75rem' }}>
                <div className="text-white wl-footer-header mb-1">Donation</div>
                <div className="mt-2">
                  <a href={links.candid_donation} target="_blank" rel="noreferrer">
                    <img
                      src="/assets/images/Platinum-Seal-of-Transparency.png"
                      className="img-fluid"
                      alt="Platinum Seal of Transparency by Candid"
                      // style={{ maxWidth: 220 }}
                    />
                  </a>
                </div>
                <div className="text-white mt-2  wl-footer-link">
                  <a
                    href={links.candid_donation}
                    target="_blank"
                    rel="noreferrer"
                    className="hover">
                    Make a Donation via Candid
                  </a>
                </div>
                <div className="mt-2">
                  <a href={links.paypal_donation} target="_blank" rel="noreferrer">
                    <img
                      src="/assets/images/QR-Code.png"
                      className="img-fluid"
                      alt="Paypal QR Code"
                      // style={{ maxWidth: 220 }}
                    />
                  </a>
                </div>
                <div className="text-white mt-2  wl-footer-link">
                  <a
                    href={links.paypal_donation}
                    target="_blank"
                    rel="noreferrer"
                    className="hover">
                    Make a Donation via PayPal
                  </a>
                </div>
              </div>
              <div
                className="col d-flex flex-column justify-content-start"
                style={{ marginBottom: isMobile ? '3.438rem' : '0', paddingLeft: '1.75rem' }}>
                <div className="text-white wl-footer-header mb-1">Contact Details</div>
                <div className="text-white mt-2  wl-footer-link">
                  <a href={links.contact} target="_blank" rel="noreferrer">
                    VETCOIN Foundation Incorporated <br />
                    17008 Lake James Rd, Odessa, FL 33556 <br />
                    United States of America
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="flex-row justify-content-between align-items-center bg-dark py-4">
        <Fade bottom>
          <div className={`d-flex flex-wrap row ${isMobile ? '' : 'mt-5'}`}>
            {!isMobile && (
              <div
                className="col-16 col-md-4 text-white text-privacy"
                style={{ marginTop: '2.5rem', textAlign: isMobile ? 'left' : '' }}>
                © VetCoin Card Powered by Sentinel Digital. All rights reserved.
              </div>
            )}
            <div
              className={`col-16 col-sm-4 col-md-4 d-flex flex-row ${
                isMobile ? 'justify-content-center' : 'justify-content-end'
              }`}
              style={{ marginTop: '2.5rem', marginLeft: isMobile ? '' : 'auto' }}>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                <LinkedIn style={{ width: 20, height: 20, marginLeft: 25 }} />
              </a>
              <a href={links.facebook} target="_blank" rel="noreferrer">
                <Facebook style={{ width: 20, height: 20, marginLeft: 25 }} />
              </a>
              <a href={links.twitter} target="_blank" rel="noreferrer">
                <Twitter style={{ width: 20, height: 20, marginLeft: 25 }} />
              </a>
            </div>
            {isMobile && (
              <div
                className="col-16 col-md-4 text-white text-privacy"
                style={{ marginTop: '2.5rem', textAlign: isMobile ? 'left' : '' }}>
                © VetCoin Powered by Sentinel Digital.
              </div>
            )}
          </div>
        </Fade>
      </div>
    </div>
  </SectionContainer>
);

export default Footer;
