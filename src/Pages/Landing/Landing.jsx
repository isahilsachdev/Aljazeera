import React from 'react';
import Single from './Single';
import { Economy } from '../Economy/Economy';
import { Corona } from '../Coronavirus/Corona';
import styles from './Landing.module.css';
import { Features } from '../Features/Features';
import { Opinion } from '../Opinion/Opinion';
import TopContent from './TopContent';
import { EconomyWithoutFooter } from '../Economy/EconomyWithoutFooter';
import { OpinionWithoutFooter } from '../Opinion/OpinionWithoutFooter';
import { FeaturesWithoutFooter } from '../Features/FeaturesWithoutFooter';
import { FooterContainer } from '../../Common/Footer/Containers/Footer';
const Landing = () => {
  return (
    <div className={styles.main}>
      <TopContent />
      <h1 style={{ textAlign: 'center' }}>General News</h1>
      <OpinionWithoutFooter />
      <Single
        title='2022 Kia EV6 Teased, Will Become The Brand’s First Dedicated EV - CarScoops'
        description='The EV6 could have up to 302 hp.'
        image='data:image/jpeg;base64,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'
        source='IMDB'
      />
      <h1 style={{ textAlign: 'center' }}>Entertainment News</h1>
      <EconomyWithoutFooter />
      <Single
        title='Bitcoin Suddenly Soars Toward $60,000 Price—Roaring Past $1 Trillion As Fear Grips Tech Stocks",'
        description='The bitcoin price added almost 10% over the last 24 hours, taking it within touching distance of its all-time highs...'
        image='https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F602fddbc99a798c04f9de3b0%2F0x0.jpg'
        source='TOI'
      />
      <h1 style={{ textAlign: 'center' }}>Technology News</h1>
      <FeaturesWithoutFooter />
      <Single
        title='How to Tell If You are Being Tracked by Apple AirTags'
        description='AirTags aren’t a thing yet—at least, not when we wrote this—but the oft-rumored tracking devices, about the size of a coin, should debut soon. And when they do, Apple is already building security features into iOS 14.5 to prevent people from secretly tracking…'
        image='https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/tvdl0j37zjg0vj9cnrvp.jpg'
        source='IND'
      />

      <h1 style={{ textAlign: 'center' }}>Coronavirus related news</h1>
      <Corona />
    </div>
  );
};

export default Landing;
