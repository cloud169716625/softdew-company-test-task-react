/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import SubscribeModal from '../Landing/modals';
import { MODAL_SCREENS } from '../Landing/modals/constants';
import SubscribeForm from '../Landing/modals/subscribeForm';
import Success from '../Landing/modals/success';
import FaqModal from '../Landing/modals/faq';
import { TermsConditions, Header, Footer } from '../Landing/partials';
import PageLayout, { SectionContainer } from '../Landing/partials/Layout';
import { mergeEmptyCells } from '../../utils/helpers';

const Tc = ({ content }) => {
  const [currentScreen, setCurrentScreen] = useState(MODAL_SCREENS[0]);

  const Content = content ? () => documentToReactComponents(content) : () => <p />;

  useEffect(() => {
    if (content) {
      mergeEmptyCells();
    }
  }, [content]);

  return (
    <PageLayout>
      <Header />
      <SectionContainer>
        <section className="tc mt-5 mb-5 pb-5 w-100">
          <Content />
        </section>
      </SectionContainer>
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

export default Tc;
