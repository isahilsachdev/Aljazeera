import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { filterOpinionData, getOpinionData } from '../../Redux/Opinion/action';
import { saveDataInLocalStorage } from '../../Redux/Economy/action';
import { HeaderData } from '../Economy/HeaderData';
import { ShowEco } from '../Economy/ShowEco';
import { SideEco } from '../Economy/SideEco';
import styles from '../Economy/Styles/Economy.module.css';
import style from './Opinion.module.css';
import { useHistory } from 'react-router';
import Loader from 'react-loader-spinner';
import Advetisement from '../Advertisements/Advetisement';

function OpinionWithoutFooter() {
  const { isLoading, isError, data } = useSelector((state) => state.opinion, shallowEqual);
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(getOpinionData()).then((res) => {
      if (res) {
        dispatch(filterOpinionData());
        dispatch(saveDataInLocalStorage());
      }
    });
  };

  const redirectToUrl = (id) => {
    history.push(`/opinion/${id}`);
  };
  return (
    <>
      <div className={styles.main__page__main}>
        {isLoading ? (
          <Loader type='ThreeDots' color='#eb7e20'  height={600}
          width={300} timeout={3000} className = {styles.loader__show} />
        ) : isError ? (
          'Something went wrong'
        ) : (
          <div className={styles.main__page__container}>
            {data?.map((item, i) =>
              i < 5 ? (
                <div className={styles.head__side__eco}>
                  {i === 0 ? (
                    <div className={styles.header}>
                      <i
                        style={{
                          fontSize: '50px',
                          color: 'orange',
                          float: 'left',
                        }}
                        class='fas fa-quote-left'
                      ></i>
                      <p className={style.headings}>Opinion</p>
                      <HeaderData {...item} key={item.id} redirectToUrl={redirectToUrl} />
                      <i
                        style={{
                          fontSize: '15px',
                          color: 'orange',
                          float: 'left',
                        }}
                        class='fas fa-quote-left'
                      ></i>
                      <p className={style.author}> {item.author}</p>
                      <p className={style.date}> {item.date}</p>
                    </div>
                  ) : (
                    <div className={styles.side}>
                      <table>
                        <tbody>
                          <SideEco {...item} key={item.id} redirectToUrl={redirectToUrl} />
                          <tr>
                            <td></td>
                            <td>
                              <span>
                                <i
                                  style={{
                                    fontSize: '15px',
                                    color: 'orange',
                                    float: 'left',
                                    marginLeft: '40px',
                                  }}
                                  class='fas fa-quote-left'
                                ></i>
                                <p className={style.smallauthor}> {item.author}</p>
                                <p className={style.date}> {item.date}</p>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ) : (
                <div className={styles.side}>
                  <table>
                    <tbody>
                      <ShowEco {...item} key={item.id} redirectToUrl={redirectToUrl} />
                      <tr>
                        <td></td>
                        <td>
                          <span>
                            <i
                              style={{
                                fontSize: '15px',
                                color: 'orange',
                                float: 'left',
                                marginLeft: '40px',
                              }}
                              class='fas fa-quote-left'
                            ></i>
                            <p className={style.smallauthor}> {item.author}</p>
                            <p className={style.date}> {item.date}</p>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </>
  );
}

export { OpinionWithoutFooter };
