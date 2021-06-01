import React from 'react';
import BigData from './BigData';
import Medium from './Medium';
import SmallData from './SmallData';
import styles from './TopContent.module.css';

const TopContent = () => {
  const top1 = {
    title: 'Gunmen kidnap forestry students in latest Nigerian mass abduction',
    image:
      'https://www.aljazeera.com/wp-content/uploads/2021/03/2021-03-03T202805Z_1984415230_RC2W3M9G66NZ_RTRMADP_3_NIGERIA-SECURITY-KIDNAPPING.jpg?resize=570%2C380',
  };
  const top2 = [
    {
      title:
        'Biden sets new goal for US vaccinations, eyes July 4 celebrations',

      image:
        'https://media.npr.org/assets/img/2019/12/17/joe-biden-0602e0a8357388c91adad8dcc6ad9b25e8ab813e.jpg',
    },
    {
      title: 'What to watch as Indo-Pacific ‘Quad’ leaders meet for first time',
      image:
        'https://www.aljazeera.com/wp-content/uploads/2021/03/000_Was8974499.jpg?resize=120%2C80',
    },
    {
      title: 'Sarah Everard: Met police face probe over suspected officer',
      image:
        'https://www.aljazeera.com/wp-content/uploads/2021/03/000_94N4WL.jpg?resize=120%2C80',
    },
    {
      title:
        'India sees worst single-day rise in COVID cases since December 24',
      image:
        'https://www.aljazeera.com/wp-content/uploads/2021/03/2021-03-11T120133Z_587149753_RC209M9A177T_RTRMADP_3_HEALTH-CORONAVIRUS-INDIA.jpg?resize=120%2C80',
    },
    {
      title: 'Iran arrests producers over controversial music video',
      image:
        'https://www.aljazeera.com/wp-content/uploads/2021/03/f6f413de5d9cb317b2862ed6691628f5.jpg?resize=120%2C80',
    },
    {
      title: '‘Hilarious joke’: Suu Kyi lawyer rejects military bribery claims',
      image:
        'https://www.aljazeera.com/wp-content/uploads/2021/02/2021-02-15T105554Z_1482146009_RC2YSL9M34CX_RTRMADP_3_MYANMAR-POLITICS.jpg?resize=120%2C80',
    },
  ];

  const top3 = {
    title: 'Syria: Oil refinery attacks raise fears of ‘grave escalation’',
    image:
      'https://www.aljazeera.com/wp-content/uploads/2021/03/%D9%86%D8%B3%D8%AE%D8%A9-%D9%85%D9%86-IMG_5360.jpg',
  };

  return (
    <div className={styles.TopContent}>
      <div className={styles.leftTop}>
        <BigData title={top1.title} image={top1.image} />
      </div>
      <div className={styles.rightTop}>
        <Medium title={top3.title} image={top3.image} />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: '15px',
            width: '100%',
            justifyContent: 'space-evenly',
            padding: '10px',
          }}
        >
          {top2.map((item) => (
            <SmallData {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopContent;
