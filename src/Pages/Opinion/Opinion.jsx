import React from 'react';
import { FooterContainer } from '../../Common/Footer/Containers/Footer';
import Advetisement from '../Advertisements/Advetisement';
import { OpinionWithoutFooter } from './OpinionWithoutFooter';

const Opinion = () => {
  return (
    <div>
      <OpinionWithoutFooter />
      <Advetisement />
      <FooterContainer />
    </div>
  );
};

export { Opinion };
