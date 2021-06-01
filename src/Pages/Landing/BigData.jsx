import React from 'react';
import styles from './TopContent.module.css';

const BigData = ({ title, image }) => {
  return (
    <div className={styles.big_data}>
      <br />
      <h1>{title}</h1>
      <br />
      <img src={image} alt='news' />
      <div className={styles.additional_info}>
        <div>
          <h1>RELATED NEWS</h1>
          <br />
          <p>
            In televised address to mark a year of the pandemic, Biden acknowledged
            <br /> Americans losses and offered hope for the future.
          </p>
        </div>
        <br />
        <div>
          <h1>KEEP READING</h1>
          <br />
          <p>
            The July 4 date is a new goal for the president, who has warned <br /> Americans of
            further pain and death from a virus that has already killed more than 530,000{' '}
            <br /> people in the United States, more than any other country <br /> in the
            world. Coronavirus-related lockdowns and restrictions have cost millions of <br />{' '}
            jobs. In a recounting of the toll the pandemic has taken on the nation, <br />{' '}
            Biden said: “Photos and videos from 2019 feel like they were <br /> taken in
            another era. The last vacation. The last birthday with friends. The last holiday{' '}
            <br /> with extended family.
          </p>
        </div>
        <div>
          <h3>
            <li>Transcript of Biden’s first prime-time national address</li>
          </h3>
          <h3>
            <li>Biden signs $1.9 trillion COVID-19 pandemic relief bill</li>
          </h3>
          <h3>
            <li>Tanzania President John Magufuli ‘in India with COVID-19’</li>
          </h3>
          <h3>
            <li>COVID-19 has already wiped out 6 million jobs, EU study finds</li>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BigData;
