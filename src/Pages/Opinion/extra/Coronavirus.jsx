// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAds, getHealthNews } from "../../Redux/action";

// import styles from "./Corona.module.css";

// import Advetisement from "../Advetisement";
// //4462cfb164cd00d0ee49f9176a359747
// const Coronavirus = () => {
//   const [show , setShow] = React.useState(true)  
//   const [Ads , setAds] = React.useState([])
//   const dispatch = useDispatch();
//   const data = useSelector((state) => state.data);
//   //   console.log(data[0], "here", typeof data[0][0]);
//   const hideAd = () => {
//       setShow(false)
//   }
//   React.useEffect(() => {
//     dispatch(getHealthNews());
//     dispatch(getAds())
//     // const newDaata = data?.filter((item) => item.image === null)
//     // setFilterData( newDaata)
//     // console.log(filterData,"filtered")
//   }, []);
//   return (
//     <div className={styles.page}>
//       <div>
//         <p className={styles.heading}>Coronavirus Pandemic</p>
//       </div>

//       {data ? (
//         <div className={styles.top}>
//           <div className={styles.item1}>
//             <div className={styles.bigImage}>
//               <img className={styles.bigImage} src={data[0].image} alt="img" />
//             </div>
//             <div className={styles.bigTitle}>{data[0].title}</div>
//           </div>

//           <div className={styles.item2}>
//             <img src={data[1].image} alt="img" />
//             {data[0].title}
//           </div>
//           <div className={styles.item3}>
//             <img src={data[2].image} alt="img" />
//           </div>
//           <div className={styles.item4}>
//             <img src={data[1].image} alt="img" />
//           </div>
         
//           <div className={styles.ads}>     
//             { show && Ads?.map((item ,i) => Math.floor(Math.random() * 6) === i ? <Advetisement {...item} hideAd={hideAd}/> : "") }
//           </div>
//         </div>
//       ) : (
//         <div>..Loading</div>
//       )}

//       {/* {
//             data?.map((item , index) => index < 4 ? <BigCard/> :"")
//         } */}

//       {/* {
//             data?.map((item , index) => index < 4 ?  <div className={styles.top}>{index === 0 ? <div className={styles.item1}>
//             <div className={styles.bigImage}><img src="" alt="img"/></div>
//             <div className={styles.bigTitle}></div>
//           </div>:index === 1 ? <div className={styles.item2}>two</div>:index === 2 ? <div className={styles.item3}>three </div>: <div className={styles.item4}>four</div>} </div>  : "")
//         } */}

//       {/* <div className={styles.top}> 
//         {
           
//         data?.map((item , index) => index < 5 && 
//         { index === 0 ? <div className={styles.item1}>
//           <div className={styles.bigImage}><img src={item.urlToImage} alt="img"/></div>
//           <div className={styles.bigTitle}>{item.title}</div>
//         </div>:<div className={styles.item2}>two</div>})

//         }
//         </div> */}
//     </div>
//   );
// };

// export default Coronavirus;
