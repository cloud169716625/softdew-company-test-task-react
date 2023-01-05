import React, { useState } from 'react';
import SubscribeModal from '../Landing/modals';
import { MODAL_SCREENS } from '../Landing/modals/constants';
import SubscribeForm from '../Landing/modals/subscribeForm';
import Success from '../Landing/modals/success';
import FaqModal from '../Landing/modals/faq';
import { TermsConditions, Header, Footer } from '../Landing/partials';
import PageLayout from '../Landing/partials/Layout';

const OptimusCardPrivacyPolicy = () => {
  const [currentScreen, setCurrentScreen] = useState(MODAL_SCREENS[0]);

  return (
    <PageLayout>
      <Header />
      <section
        className="tc"
        style={{ maxWidth: '900px', width: '100%', margin: '60px auto', padding: '0 20px' }}>
        <div>
          <h2>Optimus Card Privacy Policy</h2>
          <p>
            <span>
              This Privacy Policy describes what type of personal data we collect, who we share it
              with and how it is used. It also describes how we protect and secure information
              including the measures we take.
            </span>
          </p>
          <p>
            <span>
              We&nbsp;at Optimus Cards would like you to make your own decisions about your privacy.
              &nbsp;We will answer any questions you have regarding our privacy and under the new
            </span>
            <b>&nbsp;General Data Protection Regulations (GDPR)&nbsp;</b>
            <span>you are entitled to the following:</span>
          </p>
          <ul>
            <li aria-level="1">
              <b>To Request correction&nbsp;</b>
              <span>of the personal information that we hold about you.</span>
            </li>
            <li aria-level="1">
              <b>To Request erasure&nbsp;</b>
              <span>
                of your personal information. This enables you to ask us to delete or remove
                personal information where there is no good reason for us continuing to process it.
              </span>
            </li>
            <li aria-level="1">
              <b>To Object to processing&nbsp;</b>
              <span>
                of your personal information where we are relying on a legitimate interest and there
                is something which makes you want to object to processing on this ground.
              </span>
            </li>
            <li aria-level="1">
              <b>To Request the restriction of processing&nbsp;</b>
              <span>
                of your personal information. This enables you to ask us to suspend the processing
                of personal information about you.
              </span>
            </li>
            <li aria-level="1">
              <b>To Make a complaint</b>
              <span>
                &nbsp;to a supervisory body which in the United Kingdom is the Information
                Commissioner’s Office. The ICO can be contacted through this link:&nbsp;
              </span>
              <a href="https://ico.org.uk/concerns/">
                <span>https://ico.org.uk/concerns/</span>
              </a>
            </li>
          </ul>
          <p>
            <span>Information We Collect</span>
          </p>
          <p>
            <span>
              You may choose to provide personal data (such as your name, address, telephone number
              and email address) on this Web site.
            </span>
          </p>
          <p>
            <span>
              If you wish to obtain information or support from Optimus Cards, you may do so by
              contacting us through various email links or information requests on this site. The
              specific personal data that you must submit will depend upon the information or
              support that you are requesting. Optimus Cards will only use your information to
              contact you and provide the information or support you requested.
            </span>
          </p>
          <p>
            <span>Sale Or Disclosure</span>
          </p>
          <p>
            <span>
              We do not sell, trade or disclose personal data about our Web site visitors, except as
              described here. &nbsp;We may share information provided by our Web site visitors with
              service providers we have retained to perform various services on our behalf. These
              service providers are contractually bound to our privacy principles and are not
              authorised by us to use or disclose the information except as necessary to perform
              services or functions for Optimus Cards or to comply with legal requirements. We may
              also disclose information about you if we are required to do so by law&nbsp;
            </span>
            <b>or</b>
            <span>&nbsp;in response to a request from law enforcement authorities.</span>
          </p>
          <p>
            <span>Security</span>
          </p>
          <p>
            <span>
              The security of personal data is of the highest importance to Optimus Cards. We ensure
              that we maintain the appropriate technical and physical safeguards to protect personal
              data against any accidental or illegal destruction, accidental loss, alteration,
              unauthorised access or use, and all other unlawful forms of processing of the personal
              data in our possession.
            </span>
          </p>
          <p>
            <span>Privacy Policy Updates</span>
          </p>
          <p>
            <span>
              Optimus Cards reserves the right to change, amend this policy at any time, but will
              not mean that it will reduce the level of privacy protection provided. Optimus Cards
              treats privacy with the highest priority and ensures that it adheres to all data
              protection laws and regulations.
            </span>
          </p>
          <p>
            <span>Where To Contact Us</span>
          </p>
          <p>
            <span>
              If you have any questions about our information practices, please contact us by
              clicking here:&nbsp;
            </span>
            <a href="mailto:dataprotection@optimuscards.com">
              <span>dataprotection@optimuscards.com</span>
            </a>
          </p>
          <p>
            <span>Writing to us at:</span>
          </p>
          <p>
            <span>Optimus Cards UK Ltd</span>
            <span>
              <br />
            </span>
            <span>De Montfort House</span>
            <span>
              <br />
            </span>
            <span>High Street</span>
            <span>
              <br />
            </span>
            <span>Coleshill</span>
            <span>
              <br />
            </span>
            <span>Birmingham</span>
            <span>
              <br />
            </span>
            <span>B46 3BP</span>
          </p>
          <p>
            <span>© 2020 Optimus Cards UK Ltd.</span>
          </p>
          <p>&nbsp;</p>
        </div>
      </section>
      <Footer />
      <SubscribeModal screens={MODAL_SCREENS} currentScreen={currentScreen}>
        <SubscribeForm onChangeScreen={setCurrentScreen} />
        <Success onChangeScreen={setCurrentScreen} />
      </SubscribeModal>
      <TermsConditions />
      <FaqModal />
    </PageLayout>
  );
};

export default OptimusCardPrivacyPolicy;
