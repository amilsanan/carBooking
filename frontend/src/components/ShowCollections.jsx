// import React,{useState,useEffect} from "react";
// import axios from 'axios';
// import { Navigate, useNavigate } from 'react-router-dom'

// function ShowCollections() {
  // const navigate = useNavigate();
//   const [datas,SetDatas]=useState([])

//   useEffect(()=>{
//     axios.get("http://localhost:5000/admin/getCars").then(async(res)=>{
//       await SetDatas(res.data)
//      console.log('====....',datas);
// })
//   },[])

  // const onClickImage =async (id) => {
  //   console.log('button clicked',id);
  //   navigate(`/carView/${id}`)
  // }

//   return <div className="cars index" id="view">
//   <div className="je3-header js-header _no-max-width _with-search">
//     <header>
//       <button className="je2-button js-hamburger-menu _noborder" aria-label="Menu">
//         <svg width={20} height={14} viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
//           <path d="M0 13.0444H20" strokeWidth="1.6" />
//           <path d="M0 7.04443H20" strokeWidth="1.6" />
//           <path d="M0 1.04443H20" strokeWidth="1.6" />
//         </svg>
//       </button>
//       <a href="/" className="je2-button _noborder" aria-label="JamesEdition">
//         <svg className="je2-icon"><use xlinkHref="#logo-new" /></svg>
//         <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M16 0C7.36932 0 2 0.737706 2 0.737706C2 0.737706 2 9.66955 2 16.1362C2 21.6573 4.07286 24.8065 8.19987 27.022L16 31L23.8001 27.022C27.9295 24.8065 30 21.6573 30 16.1362C30 9.66955 30 0.737706 30 0.737706C30 0.737706 24.633 0 16 0ZM14.7015 6.01604C14.2243 6.20747 14.0652 6.46193 14.0652 7.06424V16.0778C14.0652 18.5407 13.0896 19.3018 11.2717 19.7126C9.9756 20.0068 8.05481 19.5539 8.05481 19.5539L7.84191 17.8497L8.16009 17.7423C8.71223 18.7975 9.38135 19.6403 10.4248 19.4068C11.5478 19.1523 11.4542 16.0801 11.4542 16.0801C11.4542 16.0801 11.4542 7.56382 11.4542 7.06657C11.4542 6.46193 11.3115 6.20747 10.8342 6.01838V5.78025H10.8506H14.6898H14.7062V6.01604H14.7015ZM23.5872 19.2387H15.6093V19.0169C16.0866 18.8115 16.2457 18.557 16.2457 17.9687V7.06657C16.2457 6.46193 16.0866 6.20747 15.6093 6.01838V5.78025H23.4141L23.5896 7.81362H23.2246C22.7473 6.6697 22.0127 6.17712 20.7704 6.17712H19.8954C19.1467 6.17712 18.8449 6.43158 18.8449 7.06657V11.8336H20.2931C21.3272 11.8336 21.8372 11.4998 21.9495 10.7364H22.2841V13.4538H21.9495C21.9027 12.6437 21.4231 12.2935 20.2931 12.2935H18.8449V17.824C18.8449 18.1112 18.8777 18.3166 18.9408 18.445C19.0836 18.7158 19.4977 18.8419 20.1995 18.8419H20.995C21.9495 18.8419 22.6046 18.6037 23.1614 18.0481C23.4632 17.747 23.6083 17.5089 23.8305 16.9206L24.1651 17.063L23.5872 19.2387Z" fill="#151515" />
//         </svg>
//       </a>
//       <div className="je3-search-field js-search-field ">
//         <div className="je3-search-field__input">
//           <div className="je3-search-field__placeholder js-placeholder">
//             <svg><use xlinkHref="#search-icon" /></svg>
//             <p>Search Cars</p>
//           </div>
//           <label>
//             <button className="je2-button _noborder js-back" aria-label="Back">
//               <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M19.1666 10L1.66663 10" stroke="#151515" strokeWidth="1.6" />
//                 <path d="M10 18.3332L1.66667 9.99984L10 1.6665" stroke="#151515" strokeWidth="1.6" />
//               </svg>
//               <svg><use xlinkHref="#search-icon" /></svg>
//             </button>
//             <input type="text" autoComplete="off" className="js-search-text" name="search" placeholder="Search Cars" enterkeyhint="search" data-url data-hj-allow defaultValue aria-label="Search Cars" />
//           </label>
//           <button className="je2-button _noborder js-clear" aria-label="Clear">
//             <svg viewBox="0 0 32 32">
//               <path d="M26.6 6.80002L25.2 5.40002L16 14.6L6.80002 5.40002L5.40002 6.80002L14.6 16L5.40002 25.2L6.80002 26.6L16 17.4L25.2 26.6L26.6 25.2L17.4 16L26.6 6.80002Z" />
//             </svg>
//             <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M9.99998 19.1668C15.0626 19.1668 19.1666 15.0628 19.1666 10.0002C19.1666 4.93755 15.0626 0.833496 9.99998 0.833496C4.93737 0.833496 0.833313 4.93755 0.833313 10.0002C0.833313 15.0628 4.93737 19.1668 9.99998 19.1668Z" fill="#ADADAD" stroke="#ADADAD" strokeWidth="1.6" />
//               <path d="M14.1666 5.8335L5.83331 14.1668" stroke="white" strokeWidth="1.6" />
//               <path d="M5.83331 5.8335L14.1666 14.1668" stroke="white" strokeWidth="1.6" />
//             </svg>
//           </button>
//         </div>
//         <div className="je3-search-field__suggestions js-search-suggestions" />
//       </div>
//       <ul>
//         <li>
//           <a href="/buyer/feed" className="je2-button js-menu-link _noborder" data-click-area="Just for You">
//             <span>Just for You</span>
//           </a>
//         </li>
//       </ul>
//       <ul className="je2-user-controls js-user-controls">
//         <li>
//           <a className="je2-user-controls__saved" href="/buyer/saved-listings">
//             Saved
//             <div>1</div>
//           </a>
//         </li>
//         <li>
//           <button type="button" className="je2-user-controls__account js-account" aria-haspopup="true" aria-expanded="false">
//             <span className="je2-notification-circle js-notification-circle " />
//             <p>Amil</p>
//           </button>
//         </li>
//         <nav className="je2-account-dropdown js-account-dropdown _v2 _hidden _empty" style={{height: '216px'}}>
//           <div className="je3-spinner">
//             <div />
//             <div />
//             <div />
//           </div>
//         </nav>
//       </ul>
//     </header>
//     <div className="je3-filter-bar js-je3-filterbar">
//       <button className="je2-button js-filter-button" aria-label="Filters">
//         <span>
//           Filters
//         </span>
//         <div className="je2-button__badge" />
//         <svg viewBox="0 0 14 14">
//           <ellipse cx="10.15" cy="4.2001" rx="2.1" ry="2.1" strokeWidth="1.6" fill="none" />
//           <path d="M1.40002 4.19995L8.40002 4.19995" strokeWidth="1.6" />
//           <ellipse cx="3.85" cy="9.79995" rx="2.1" ry="2.1" strokeWidth="1.6" fill="none" />
//           <path d="M5.59998 9.80005L12.6 9.80005" strokeWidth="1.6" />
//         </svg>
//       </button>
     
//       <div className="je2-select _with-placeholder _hidden" data-name="model_id">
//         <svg className="je2-select__right-icon"><use xlinkHref="#arrow-down" /></svg>
//         <select name id aria-label><option value>Model</option></select>
//         <span>Model</span>
//       </div>
//       <button className="je2-button js-filter-button" data-type="year">
//         <div className="je2-button__temporary" />
//         <span>Year</span>
//         <svg><use xlinkHref="#arrow-down" /></svg>
//       </button>
//       <button className="je2-button js-filter-button" data-type="car-price">
//         <div className="je2-button__temporary" />
//         <span>Price</span>
//         <svg><use xlinkHref="#arrow-down" /></svg>
//       </button>
//       <button className="je2-button js-filter-button" data-type="car-type">
//         <span>Body Style</span>
//         <div className="je2-button__badge" />
//         <svg><use xlinkHref="#arrow-down" /></svg>
//       </button>     
//     </div>    
//   </div>
//   <div id="page_content" className>
//     <section className="je2-search-page _v2 _without-map">
//       <div className="je2-search-page__left-side">
//         <nav className="je3-breadcrumbs " aria-label="Breadcrumb">
//           <ol>
//             <li>
//               <a href="/cars">Cars</a>
//             </li>
//           </ol>
//         </nav>
//         <div className="je2-search-page__header">
//           <div className="je2-search-page__header__left">
//             <h1>Luxury Cars for Sale</h1>
//           </div>
//           <div className="je2-search-page__header__right ">
//             <span>
//               500+ listings
//             </span>
//             <div>
//               <span>Sort:</span>
//               <div className="je2-select  _with-placeholder">
//                 <svg className="je2-select__right-icon"><use xlinkHref="#arrow-down" /></svg>
//                 <select name="order" id="order" aria-label="order"><option value="premium">Premium</option>
//                   <option value="popular">Popular</option>
//                   <option value="recent">Recent</option>
//                   <option value="price_asc">Price lowest first</option>
//                   <option value="price_desc">Price highest first</option>
//                   <option value="mileage_asc">Mileage Low to High</option>
//                   <option value="mileage_desc">Mileage High to Low</option>
//                   <option value="year_asc">Year Low to High</option>
//                   <option value="year_desc">Year High to Low</option></select>
//                 <span>Premium</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="je2-grid _serp_results">
//           <div className="je2-grid__content">

// {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
//  {datas.map((item,index) => (
        
      
//             <div className="ListingCard _with-cars-logo _initialized" data-id={12491845} data-price-usd={1200000} data-country-code="US" data-country="United States" data-country-subdivision="TX" data-city="Flower Mound" data-office-id={148546} data-agent-id={-1} data-category="Car" data-brand="Shelby" data-model="Cobra" data-position="Search" data-serp-position={1} data-type="Listing card">
//               <a onClick={()=>onClickImage(item._id)} target="_blank" className="js-link">                
//                 <div className="ListingCard__picture">
//                   <div className="slider">
//                     <div className="slider__left-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
//                     <div className="slider__right-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
//                     <div className="swiper-container" style={{overflow: 'hidden'}}>
//                       <div className="swiper-wrapper" style={{transition: 'transform 150ms ease 0s', width: '2325px', display: 'flex', flexDirection: 'row'}}>
//                         <div className="swiper-slide-active swiper-slide" style={{backgroundImage: 'url("data:image/jpeg', width: '465px', marginRight: '0px'}}>
//                           <img  importance="high" alt="2023 Shelby Cobra rwd in Flower mound, TX, United States 1" src={item.imagename}/>
//                         </div>                        
//                       </div>                    
//                     </div>
//                   </div>
//                 </div>
//                 <div className="ListingCard__description">
//                   <div className="ListingCard__price">
//                     Rs.{item.price}
//                   </div>
//                   <div className="ListingCard__tags">
//                     <span className="ListingCard__tag">{item.name}</span>
//                   </div>
//                   <div className="ListingCard__title">
//                     Flower mound, TX, United States
//                   </div>                                  
//                   </div>
//               </a>
//             </div>    
//             ))}
//           </div>
//         </div>

//         {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
//         <div className="je2-search-page__pagination js-pagination-serp">
//           <a href="https://www.jamesedition.com/cars/all?page=2" className="je2-button " data-next="true">
//             <span>Next</span>
//           </a>
//           <div className="Pagination js-pagination">
//             <div className="Pagination__pages">
//               <span className="_active" data-page={1}>
//                 1
//               </span>
//               <a aria-label={2} href="/cars/all?page=2">
//                 <span data-page={2}>2</span>
//               </a>
//               <a aria-label={3} href="/cars/all?page=3">
//                 <span data-page={3}>3</span>
//               </a>
//               <span>…</span>
//               <a className="_last" aria-label={50} href="/cars/all?page=50">
//                 <span data-page={50}>50</span>
//               </a>
//               <a aria-label={2} href="/cars/all?page=2">
//                 <span className="_next" data-page={2}>
//                   <svg><use xlinkHref="#short-arrow" /></svg>
//                 </span>
//               </a>
//             </div>            
//           </div>
//         </div>
//       </div>
      
      
//     </section>
//     <div className="je2-search-page__seo-container js-seo-container _no-max-width">
//     </div>
   
//   </div>
// </div>
// }

// export default ShowCollections;

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import "./styles.css";
import { Navigate, useNavigate } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'


export default function ShowCollections() {


  const [slice, setSlice] = useState('all cars')
  const [com, setCom] = useState([])


// useEffect(()=>{
//    axios.get(`http://localhost:5000/admin/getCompanies`).then(async(res)=>{
//     console.log("456",res.data);
//    await setCom(res.data)
//    if(comFilter=='all Cars'){
//     setCom()
//   }
   
//   })
// },[comFilter])

  const [offset, setOffset] = useState(0);
  const [carsData, setCarsData] = useState([]);
  const [perPage, setPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [postData, setPostData] = useState([]);
  const navigate = useNavigate();


  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOffset(offset);
  };

  useEffect(() => {
    const onClickImage =async (id) => {
    console.log('button clicked',id);
    navigate(`/carView/${id}`)
  }
    const receivedData = async () => {
      const res = await axios.get(`http://localhost:5000/admin/getCars`);
      const data = res.data;
      console.log('kjhkuhklujhkulj',data);
      const carsData = data.slice(offset, offset + perPage);
      const postData = (() => (
        // <React.Fragment >
          <div className="cars index" id="view">
  <div className="je3-header js-header _no-max-width _with-search">
    <header>
      <button className="je2-button js-hamburger-menu _noborder" aria-label="Menu">
        <svg width={20} height={14} viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 13.0444H20" strokeWidth="1.6" />
          <path d="M0 7.04443H20" strokeWidth="1.6" />
          <path d="M0 1.04443H20" strokeWidth="1.6" />
        </svg>
      </button>
      <a href="/" className="je2-button _noborder" aria-label="JamesEdition">
        <svg className="je2-icon"><use xlinkHref="#logo-new" /></svg>
        <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 0C7.36932 0 2 0.737706 2 0.737706C2 0.737706 2 9.66955 2 16.1362C2 21.6573 4.07286 24.8065 8.19987 27.022L16 31L23.8001 27.022C27.9295 24.8065 30 21.6573 30 16.1362C30 9.66955 30 0.737706 30 0.737706C30 0.737706 24.633 0 16 0ZM14.7015 6.01604C14.2243 6.20747 14.0652 6.46193 14.0652 7.06424V16.0778C14.0652 18.5407 13.0896 19.3018 11.2717 19.7126C9.9756 20.0068 8.05481 19.5539 8.05481 19.5539L7.84191 17.8497L8.16009 17.7423C8.71223 18.7975 9.38135 19.6403 10.4248 19.4068C11.5478 19.1523 11.4542 16.0801 11.4542 16.0801C11.4542 16.0801 11.4542 7.56382 11.4542 7.06657C11.4542 6.46193 11.3115 6.20747 10.8342 6.01838V5.78025H10.8506H14.6898H14.7062V6.01604H14.7015ZM23.5872 19.2387H15.6093V19.0169C16.0866 18.8115 16.2457 18.557 16.2457 17.9687V7.06657C16.2457 6.46193 16.0866 6.20747 15.6093 6.01838V5.78025H23.4141L23.5896 7.81362H23.2246C22.7473 6.6697 22.0127 6.17712 20.7704 6.17712H19.8954C19.1467 6.17712 18.8449 6.43158 18.8449 7.06657V11.8336H20.2931C21.3272 11.8336 21.8372 11.4998 21.9495 10.7364H22.2841V13.4538H21.9495C21.9027 12.6437 21.4231 12.2935 20.2931 12.2935H18.8449V17.824C18.8449 18.1112 18.8777 18.3166 18.9408 18.445C19.0836 18.7158 19.4977 18.8419 20.1995 18.8419H20.995C21.9495 18.8419 22.6046 18.6037 23.1614 18.0481C23.4632 17.747 23.6083 17.5089 23.8305 16.9206L24.1651 17.063L23.5872 19.2387Z" fill="#151515" />
        </svg>
      </a>
      <div className="je3-search-field js-search-field ">
        <div className="je3-search-field__input">
          <div className="je3-search-field__placeholder js-placeholder">
            <svg><use xlinkHref="#search-icon" /></svg>
            <p>Search Cars</p>
          </div>
          <label>
            <button className="je2-button _noborder js-back" aria-label="Back">
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1666 10L1.66663 10" stroke="#151515" strokeWidth="1.6" />
                <path d="M10 18.3332L1.66667 9.99984L10 1.6665" stroke="#151515" strokeWidth="1.6" />
              </svg>
              <svg><use xlinkHref="#search-icon" /></svg>
            </button>
            <input type="text" autoComplete="off" className="js-search-text" name="search" placeholder="Search Cars" enterkeyhint="search" data-url data-hj-allow defaultValue aria-label="Search Cars" />
          </label>
          <button className="je2-button _noborder js-clear" aria-label="Clear">
            <svg viewBox="0 0 32 32">
              <path d="M26.6 6.80002L25.2 5.40002L16 14.6L6.80002 5.40002L5.40002 6.80002L14.6 16L5.40002 25.2L6.80002 26.6L16 17.4L25.2 26.6L26.6 25.2L17.4 16L26.6 6.80002Z" />
            </svg>
            <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99998 19.1668C15.0626 19.1668 19.1666 15.0628 19.1666 10.0002C19.1666 4.93755 15.0626 0.833496 9.99998 0.833496C4.93737 0.833496 0.833313 4.93755 0.833313 10.0002C0.833313 15.0628 4.93737 19.1668 9.99998 19.1668Z" fill="#ADADAD" stroke="#ADADAD" strokeWidth="1.6" />
              <path d="M14.1666 5.8335L5.83331 14.1668" stroke="white" strokeWidth="1.6" />
              <path d="M5.83331 5.8335L14.1666 14.1668" stroke="white" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
        <div className="je3-search-field__suggestions js-search-suggestions" />
      </div>
      <ul>
        <li>
          <a href="/buyer/feed" className="je2-button js-menu-link _noborder" data-click-area="Just for You">
            <span>Just for You</span>
          </a>
        </li>
      </ul>
      <ul className="je2-user-controls js-user-controls">
        <li>
          <a className="je2-user-controls__saved" href="/buyer/saved-listings">
            Saved
            <div>1</div>
          </a>
        </li>
        <li>
          <button type="button" className="je2-user-controls__account js-account" aria-haspopup="true" aria-expanded="false">
            <span className="je2-notification-circle js-notification-circle " />
            <p>Amil</p>
          </button>
        </li>
        <nav className="je2-account-dropdown js-account-dropdown _v2 _hidden _empty" style={{height: '216px'}}>
          <div className="je3-spinner">
            <div />
            <div />
            <div />
          </div>
        </nav>
      </ul>
    </header>
    <div className="je3-filter-bar js-je3-filterbar">
    <div className="add_car_input_wrapper">
           
             
          </div>
      <button className="je2-button js-filter-button" aria-label="Filters">
        <span>
          Filters
        </span>
        <div className="je2-button__badge" />
        <svg viewBox="0 0 14 14">
          <ellipse cx="10.15" cy="4.2001" rx="2.1" ry="2.1" strokeWidth="1.6" fill="none" />
          <path d="M1.40002 4.19995L8.40002 4.19995" strokeWidth="1.6" />
          <ellipse cx="3.85" cy="9.79995" rx="2.1" ry="2.1" strokeWidth="1.6" fill="none" />
          <path d="M5.59998 9.80005L12.6 9.80005" strokeWidth="1.6" />
        </svg>
      </button>
     
      <div className="je2-select _with-placeholder _hidden" data-name="model_id">
        <svg className="je2-select__right-icon"><use xlinkHref="#arrow-down" /></svg>
        <select name id aria-label><option value>Model</option></select>
        <span>Model</span>
      </div>
      {/* //////////////////////////////// */}
      <div className="je2-select _with-placeholder" data-name="brand_id">
        <svg className="je2-select__right-icon"><Icon name='home' size='mini' /></svg>
        <select name id aria-label  onChange={(e) => setComFilter( e.target.value )}>
        
        <optgroup label="">
            <option value="all Cars">All cars</option>
            <option value="ferrari">Ferrari</option>
                      
            </optgroup></select>
        <span>Companies</span>
      </div>
      {/* //////////////////////// */}
      <button className="je2-button js-filter-button" data-type="car-price">
        <div className="je2-button__temporary" />
        <span>Price</span>
        <svg><use xlinkHref="#arrow-down" /></svg>
      </button>
      <button className="je2-button js-filter-button" data-type="car-type">
        <span>Body Style</span>
        <div className="je2-button__badge" />
        <svg><use xlinkHref="#arrow-down" /></svg>
      </button>     
    </div>    
  </div>
  <div id="page_content" className>
    <section className="je2-search-page _v2 _without-map">
      <div className="je2-search-page__left-side">
        <nav className="je3-breadcrumbs " aria-label="Breadcrumb">
          <ol>
            <li>
              <a href="/cars">Cars</a>
            </li>
          </ol>
        </nav>
        <div className="je2-search-page__header">
          <div className="je2-search-page__header__left">
            <h1>Luxury Cars for Sale</h1>
          </div>
          <div className="je2-search-page__header__right ">
            <span>
              500+ listings
            </span>
            <div>
              <span>Sort:</span>
              <div className="je2-select  _with-placeholder">
                <svg className="je2-select__right-icon"><use xlinkHref="#arrow-down" /></svg>
                <select name="order" id="order" aria-label="order"><option value="premium">Premium</option>
                  <option value="popular">Popular</option>
                  <option value="recent">Recent</option>
                  <option value="price_asc">Price lowest first</option>
                  <option value="price_desc">Price highest first</option>
                  <option value="mileage_asc">Mileage Low to High</option>
                  <option value="mileage_desc">Mileage High to Low</option>
                  <option value="year_asc">Year Low to High</option>
                  <option value="year_desc">Year High to Low</option></select>
                <span>Premium</span>
              </div>
            </div>
          </div>
        </div>
        <div className="je2-grid _serp_results">
          <div className="je2-grid__content">

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
 {/* {datas.map((item,index) => ( */}
 { carsData.map((pd) => (
        
      
            <div className="ListingCard _with-cars-logo _initialized" data-id={12491845} data-price-usd={1200000} data-country-code="US" data-country="United States" data-country-subdivision="TX" data-city="Flower Mound" data-office-id={148546} data-agent-id={-1} data-category="Car" data-brand="Shelby" data-model="Cobra" data-position="Search" data-serp-position={1} data-type="Listing card">
              <a onClick={()=>onClickImage(pd._id)} target="_blank" className="js-link">                
                <div className="ListingCard__picture">
                  <div className="slider">
                    <div className="slider__left-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                    <div className="slider__right-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                    <div className="swiper-container" style={{overflow: 'hidden'}}>
                      <div className="swiper-wrapper" style={{transition: 'transform 150ms ease 0s', width: '2325px', display: 'flex', flexDirection: 'row'}}>
                        <div className="swiper-slide-active swiper-slide" style={{backgroundImage: 'url("data:image/jpeg', width: '465px', marginRight: '0px'}}>
                          <img  importance="high" alt="2023 Shelby Cobra rwd in Flower mound, TX, United States 1" src={pd.imagename}/>
                        </div>                        
                      </div>                    
                    </div>
                  </div>
                </div>
                <div className="ListingCard__description">
                  <div className="ListingCard__price">
                    Rs.{pd.price}
                  </div>
                  <div className="ListingCard__tags">
                    <span className="ListingCard__tag">{pd.name}</span>
                  </div>
                  <div className="ListingCard__title">
                    Flower mound, TX, United States
                  </div>                                  
                  </div>
              </a>
            </div>    
            ))}
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        
      </div>
      
      
    </section>
    <div className="je2-search-page__seo-container js-seo-container _no-max-width">
    </div>
   
  </div>
</div>
        // </React.Fragment>
      ));
      // setData(data);
      setPageCount(Math.ceil(data.length / perPage));
      setPostData(postData);
    };
    receivedData();
  }, [offset, perPage]);

  return (
    <div>
      {postData}
      <ReactPaginate
        previousLabel={"<prev"}
        nextLabel={"next>"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        // marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
