import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import SearchCard from './SearchCard';
import styles from './Styles/Search.module.css';
import getNewsData from './Utilities/Utilities';
import Paginate from './Paginate';
import Loader from 'react-loader-spinner';

const Search = () => {
  const { title } = useParams();
  const [page, setPage] = useState(0);
  const [newsData, setNewsData] = useState([]);
  const [response, setResponse] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = response.length - 1;
      }
      return prevPage;
    });
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > response.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const handlePage = (index) => {
    setPage(index);
  };
  const getData = () => {
    setLoading(true);
    getNewsData(title).then((res) => {
      console.log(res.data);
      //   response is complete data
      setResponse(Paginate(res.data.articles));
      //   console.log('data',response);
      setLoading(false);
      //   news data is current data
      setNewsData(response[0]);
    });
  };
  useEffect(() => {
    getData();
  }, [title]);

  useEffect(() => {
    let pagedata = response[page];
    setNewsData(pagedata);
  }, [page]);

  console.log(response);
  console.log(newsData);
  return (
    <>
      {isLoading && (
        <Loader
          type='Grid'
          color='#eb7e20'
          height={600}
          width={300}
          className={styles.loader__show}
          timeout={3000}
        />
      )}
      {!isLoading && (
        <div className={styles.cards}>
          <div className={styles.title}>
            <span>Search Result for:</span>
            <span>{title.toUpperCase()}</span>
          </div>
          {newsData?.map((item, i) => {
            return <SearchCard key={i} {...item} />;
          })}
        </div>
      )}
      {!isLoading && (
        <div className={styles.btnContainer}>
          <button className={styles.prevBtn} onClick={prevPage}>
            &#60; Previous
          </button>
          {response.map((item, index) => {
            return (
              <button
                key={index}
                className={index === page ? styles.activeBtn : styles.pageBtn}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className={styles.nextBtn} onClick={nextPage}>
            Next &#62;
          </button>
        </div>
      )}
    </>
  );
};

export default Search;
