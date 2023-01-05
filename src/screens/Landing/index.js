import React, { useState } from 'react';
import SubscribeModal from './modals';
import { MODAL_SCREENS } from './modals/constants';
import SubscribeForm from './modals/subscribeForm';
import Success from './modals/success';
import FaqModal from './modals/faq';
import { TermsConditions, Cover, Header } from './partials';
import PageLayout from './partials/Layout';

const Landing = () => {
  const [currentScreen, setCurrentScreen] = useState(MODAL_SCREENS[0]);

  return (
    <PageLayout>
      <Header />
      <Cover />
     
      <SubscribeModal screens={MODAL_SCREENS} currentScreen={currentScreen}>
        <SubscribeForm onChangeScreen={setCurrentScreen} />
        <Success onChangeScreen={setCurrentScreen} />
      </SubscribeModal>
      <TermsConditions />
      <FaqModal />
    </PageLayout>
  );
};

export default Landing;
