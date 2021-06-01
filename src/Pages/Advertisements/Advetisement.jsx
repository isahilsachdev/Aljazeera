import React from 'react';
import styles from './Advertisement.module.css';
import axios from 'axios';
const Advetisement = () => {
  const [ads, setAds] = React.useState([]);
  const [ad, setAd] = React.useState(0);
  const [hide, setHide] = React.useState(false);
  React.useEffect(() => {
    getAds();
    const id = setInterval(() => {
      setAd((prev) => {
        if (prev === 4) {
          setAd(0);
          return prev;
        } else {
          prev = prev + 1;
          console.log(prev);
          return prev;
        }
      });
    }, 3000);
    console.log('ads are', ads);
    return () => {
      clearInterval(id);
    };
  }, []);
  function getAds() {
    axios
      .get('https://fast-lake-64955.herokuapp.com/Advertisement')
      .then((res) => setAds(res.data))
      .catch((err) => console.log(err));
  }
  function hideAd(key) {
    setHide(true);
  }
  function openInNewTab(url) {
    console.log('hii');
    var win = window.open(url, '_blank');
    win.focus();
  }
  return (
    <div>
      {!hide && ads.length !== 0 ? (
        <div className={styles.ads}>
          <i
            className={styles.add}
            onClick={() => hideAd(ads[ad].key)}
            style={{
              color: 'red',
              fontSize: '25px',
              position: 'absolute',
              right: '65%',
            }}
            class='fas fa-times-circle'
          >
            {' '}
          </i>
          <img
            style={{ width: '480px' }}
            src={ads[ad].image}
            alt='ads'
            onClick={() => openInNewTab(ads[ad].link)}
          />
        </div>
      ) : (
        <div className={styles.ads} style={{ color: 'black' }}>
          ADVERTISEMENTS
        </div>
      )}
    </div>
  );
};

export default Advetisement;
