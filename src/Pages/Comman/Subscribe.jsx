import React from 'react';
import styles from './Styles/Content.module.css';

function Subscribe() {
  const [email, setEmail] = React.useState('');

  const validateEmail = (em) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(em).toLowerCase());
  };

  const handelSubscribeClick = () => {
    if (email !== '') {
      let ok = validateEmail(email);
      if (ok) {
        let msg = {
          message: `${email} apply subscription for latest news.`,
          from_name: email,
          reply_to: email,
          to_name: 'Sahil Sachdev',
        };
        window.emailjs
          .send('default_service', 'template_wdw9f3m', msg)
          .then((res) => {
            console.log(res);
            alert('Subscription Applied Successfully');
            setEmail('');
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            alert('Some Errors Occured');
          });
      } else {
        alert('Invalid Email');
      }
    } else {
      alert('Invalid Email');
    }
  };
  return (
    <>
      <div className={styles.subscribe__main}>
        <p>Subscribe to stay up-to-date on all the latest news</p>
        <div className={styles.subscribe__input}>
          <input
            type='email'
            placeholder='Enter your mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div onClick={handelSubscribeClick}> Subscribe </div>
        </div>
      </div>
    </>
  );
}

export { Subscribe };
