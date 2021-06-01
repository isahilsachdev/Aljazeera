import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { FooterContainer } from '../../Common/Footer/Containers/Footer';
import Advetisement from '../Advertisements/Advetisement';
import { EconomyWithoutFooter } from './EconomyWithoutFooter';

const footer_styles = {
  marginTop: '50%',
};

function Economy() {
  const { isLoading, isError, filter_data } = useSelector((state) => state.eco, shallowEqual);
  return (
    <>
      <EconomyWithoutFooter />
      <Advetisement />
      <div style={isLoading ? footer_styles : null}>
        <FooterContainer />
      </div>
    </>
  );
}

export { Economy };
