import React from 'react';
import styles from '../Video/Video.module.css';
import YouTube from 'react-youtube';
import { FooterContainer } from '../../Common/Footer/Containers/Footer';
const Live = () => {
  const opts2 = {
    height: '580',
    width: '810',
  };
  const opts3 = {
    height: '160',
    width: '300',
    playerVars: {
      autoplay: 2,
    },
  };
  const vidArr = [
    { link: 'i0ZabxXmH4Y', title: 'What is COVID-19' },
    { link: 'NAV3CmA5rBU', title: 'Covid: India coronavirus outbreak in 200 seconds' },
    { link: '9ezzpuOqkX4', title: 'Mobile phones have killed photography' },
    { link: 'pJY0mBWHPw4', title: 'School for tired teens' },
    { link: 'fvtrRGmv7aU', title: 'What is artificial intelligence? ' },
    { link: 'ekZZZPRxWtI', title: 'Children: New billionaires' },
    { link: 'FnloKzEAX7o', title: 'Nature Makes You Happy' },
    { link: 'yWOqeyPIVRo', title: 'Malalas Story ' },
    { link: 'cSKGa_7XJkg', title: 'How trees secretly talk to each other' },
    { link: 'EsqdBz-_noQ', title: 'Inside One of New York’s Deadliest Zip Codes ' },
    { link: 'lxuH5iVoXfQ', title: 'Good Sport - Inspirational Short Film' },
    { link: 'qtujkNnCYCc', title: 'The Boy Who Learned to Fly | Usain Bolt' },
  ];
  return (
    <div style={{ background: 'black', color: 'white' }}>
      <div
        style={{
          margin: '0px auto',
          paddingTop: '10px',
        }}
        className={styles.big_card}
      >
        <h2 style={{ fontSize: '50px', fontWeight: '700' }}>Live News</h2>
        <p style={{ textDecoration: 'underline', cursor: 'pointer' }}>
          {' '}
          Click below to enjoy live stream.
        </p>
        <YouTube
          className={styles.live_header}
          videoId='-upyPouRrB8'
          opts={opts2}
          autoplay={true}
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap ' }}>
        {vidArr.map(({ title, link }) => (
          <div className={styles.live_card} key={title}>
            <YouTube className={styles.youtube} videoId={link} opts={opts3} />
            <br />
            <h1>{title}</h1>
          </div>
        ))}
      </div>
      <FooterContainer />
    </div>
  );
};

export default Live;
