import React from 'react';
import Loader from 'react-loader-spinner';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { FooterContainer } from '../../Common/Footer/Containers/Footer';
import {
  filterFeaData,
  getfeaturesData,
  saveDataInLocalStorageFea,
} from '../../Redux/Features/action';

import Advetisement from '../Advertisements/Advetisement';
import { HeaderData } from '../Economy/HeaderData';
import { ShowEco } from '../Economy/ShowEco';
import { SideEco } from '../Economy/SideEco';
import styles from '../Economy/Styles/Economy.module.css';

const footer_styles = {
  marginTop: '50%',
};

function FeaturesWithoutFooter() {
  const { isLoading, isError, fea_filter_data } = useSelector(
    (state) => state.fea,
    shallowEqual
  );
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(getfeaturesData()).then((res) => {
      if (res) {
        dispatch(filterFeaData());
        dispatch(saveDataInLocalStorageFea());
      }
    });
  };

  const redirectToUrl = (id) => {
    history.push(`/features/${id}`);
  };

  return (
    <>
      <div className={styles.main__page__main}>
        {isLoading ? (
          <Loader type='TailSpin' color='#eb7e20' height={100} width={100} timeout={3000} />
        ) : isError ? (
          'Something went wrong'
        ) : (
          <div className={styles.main__page__container}>
            {fea_filter_data &&
              fea_filter_data.map((item, i) =>
                i < 5 ? (
                  <div className={styles.head__side__eco}>
                    {i === 0 ? (
                      <div className={styles.header}>
                        <HeaderData {...item} key={item.id} redirectToUrl={redirectToUrl} />
                      </div>
                    ) : (
                      <div className={styles.side}>
                        <table>
                          <tbody>
                            <SideEco {...item} key={item.id} redirectToUrl={redirectToUrl} />
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className={styles.showall}>
                    <table>
                      <tbody>
                        <ShowEco {...item} key={item.id} redirectToUrl={redirectToUrl} />
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

export { FeaturesWithoutFooter };
