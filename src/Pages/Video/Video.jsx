import React from 'react';
import YouTube from 'react-youtube';
import { FooterContainer } from '../../Common/Footer/Containers/Footer';
import styles from './Video.module.css';
const Video = () => {
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
  // normal
  const opts = {
    height: '340',
    width: '550',
    playerVars: {
      autoplay: 2,
    },
  };
  //big
  const opts2 = {
    height: '580',
    width: '810',
    playerVars: {
      autoplay: 2,
    },
  };
  //short
  const opts3 = {
    height: '160',
    width: '240',
    playerVars: {
      autoplay: 2,
    },
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <div style={{ background: 'black', color: '#fff', marginTop: '0px' }}>
      <div className={styles.header}>
        <div className={styles.big_card}>
          <h1>"Senegal protests: Demonstrators demand Ousmane Sonko's release?"</h1>
          <YouTube videoId='2OFXE767dyo' opts={opts2} onReady={onReady} />
        </div>
        <div className={styles.side_card}>
          <br />
          <div>
            <h1>"Top UK scientists warn of new Covid surge if lockdown eased too quickly"</h1>

            <YouTube
              className={styles.youtube}
              videoId='NbON1RrE3ZI'
              opts={opts3}
              onReady={onReady}
            />
          </div>
          <div>
            <h1>"The Vanishing of Flight 370"</h1>
            <YouTube
              className={styles.youtube}
              videoId='kd2KEHvK-q8'
              opts={opts3}
              onReady={onReady}
            />
          </div>
          <div>
            <h1>"Jumping From Space! - Red Bull Space Dive"</h1>
            <YouTube
              className={styles.youtube}
              videoId='E9oKEJ1pXPw'
              opts={opts3}
              onReady={onReady}
            />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {vidArr.map(({ title, link }) => (
          <div className={styles.vid_card} key={title}>
            <YouTube className={styles.youtube} videoId={link} opts={opts} onReady={onReady} />
            <br />
            <h2>{title}</h2>
          </div>
        ))}
      </div>
      <FooterContainer />
    </div>
  );
};

export default Video;
