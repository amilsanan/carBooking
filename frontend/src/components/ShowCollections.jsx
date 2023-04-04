

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import "./styles.css";
import { Navigate, useNavigate } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'


export default function ShowCollections() {


  const [company, SetCompany] = useState('allCompany')
  const [allcompany, SetALLCompany] = useState([])
  const [abc, setAbc] = useState()
  const [com, setCom] = useState([])

  const [offset, setOffset] = useState(0);
  const [carsData, setCarsData] = useState([]);
  const [perPage, setPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [postData, setPostData] = useState([]);
  const [sortData, setSortData] = useState('popular');
  const navigate = useNavigate();
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * perPage;
    setCurrentPage(selectedPage);
    setOffset(offset);
  };
  const onClickImage =async (id) => {
    console.log('button clicked',id);
    navigate(`/carView/${id}`)
  }
  const [carListingsData, setCarListingsData] = useState([]);

  useEffect(()=>{
   axios.get(`http://localhost:5000/admin/getCompanies`).then(async(res)=>{
    console.log("456",res.data);
    SetALLCompany(res.data)
  
  })
},[])

// useEffect(()=>{
//   const receivedData =  () => {
//     console.log('com=',company);
//     if(company=="allCompany"){
//       setCarListingsData(carsData)
//     }else{
//       const filteredCompany = carListingsData.filter(com => com.brand === company);
//       console.log('filter=',filteredCompany);
//       setCarListingsData(filteredCompany.slice(offset, offset + perPage))
//     }
//     // else if(sortData=="price_ascending") {
    
//     // }
//     // else {

//     // }
//   };
//   receivedData();
// },[company])
  useEffect(() => {    
    const receivedData = async () => {
      let data
      const res = await axios.get(`http://localhost:5000/admin/getCars`);
      console.log('kjhklhg',res.data);
      data = res.data;
      // setCarListingsData(data)

      /////
      setCarsData(res.data)
      ////
      if(sortData=="popular"){
        // console.log('kjhkuhklujhkulj',data);
        setCarListingsData(data.slice(offset, offset + perPage));
      }
      else if(sortData=="price_ascending") {
        const sortedListings = [...data].sort((a, b) => a.price - b.price);
        console.log('sorted is',sortedListings);
        setCarListingsData(sortedListings.slice(offset, offset + perPage));
      }
      else {
        const sortedListingsDesc = [...data].sort((a, b) => b.price - a.price);
        setCarListingsData(sortedListingsDesc.slice(offset, offset + perPage));
      }
      setPageCount(Math.ceil(data.length / perPage));
      setPostData(postData);
    };
    receivedData();
  }, [offset, perPage,sortData]);

// useEffect(()=>{
  
// })



 

  return (
    <div>
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
     
     
     
      {/* //////////////////////////////// */}
      <div className="je2-select _with-placeholder" data-name="brand_id">
        <svg className="je2-select__right-icon"><Icon name='home' size='mini' /></svg>      
        <select name id aria-label  onChange={(e) => {SetCompany(e.target.value)}}>

        
        <optgroup label="">
            <option value="allCompany">All cars</option>
        {allcompany.map((item)=>(
            <option value={item.name}>{item.name}</option>
            
            ))}
                      
            </optgroup>
            </select>
        <span>Companies</span>
      </div>
      {/* //////////////////////// */}
      <button className="je2-button js-filter-button" data-type="car-price">
        <div className="je2-button__temporary" />
        <span>Price</span>
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
                <select value={sortData} onChange={(e)=>setSortData(e.target.value)} >
                  <option value="popular">Popular</option>                 
                  <option value="price_ascending">Price lowest first</option>
                  <option value="price_descending">Price highest first</option>
                  </select>
                <span>{sortData}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="je2-grid _serp_results">
          <div className="je2-grid__content">

{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
 {/* {datas.map((item,index) => ( */}
 { carListingsData.map((pd) => (
        
      !pd.isbooked &&(
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
      )
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


// 

// export default ShowCollections;

// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import ReactPaginate from 'react-paginate';
// import "./styles.css";
// import { Navigate, useNavigate } from 'react-router-dom'
// import { Icon } from 'semantic-ui-react'


// export default function ShowCollections() {


//   const [company, SetCompany] = useState('allCompany')
//   const [allcompany, SetALLCompany] = useState([])
//   const [com, setCom] = useState([])

//   const [offset, setOffset] = useState(0);
//   const [carsData, setCarsData] = useState([]);
//   const [perPage, setPerPage] = useState(3);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [pageCount, setPageCount] = useState(0);
//   const [postData, setPostData] = useState([]);
//   const [sortData, setSortData] = useState('popular');
//   // const [filterData, setFilterData] = useState('allCompany');
//   const navigate = useNavigate();
//   const handlePageClick = (e) => {
//     const selectedPage = e.selected;
//     const offset = selectedPage * perPage;
//     setCurrentPage(selectedPage);
//     setOffset(offset);
//   };
//   const onClickImage =async (id) => {
//     console.log('button clicked',id);
//     navigate(`/carView/${id}`)
//   }
//   const [carListingsData, setCarListingsData] = useState([]);

//   useEffect(()=>{
//    axios.get(`http://localhost:5000/admin/getCompanies`).then(async(res)=>{
//     console.log("456",res.data);
//     SetALLCompany(res.data)
  
//   })
// },[])

// useEffect(async()=>{
//   const res = await axios.get(`http://localhost:5000/admin/getCars`);
//   console.log('cars===',res.data);
//   setCarsData(res.data)
//   setCarListingsData(res.data)
// },[])
// // useEffect(async()=>{
// //   const receivedData = async () => {
// //     if(company=="allCompany"){
// //       setCarListingsData(carsData)
// //     }else{
// //       const filteredCompany = carListingsData.filter(com => com.brand === company);
// //       console.log('filter=',filteredCompany);
// //     }
// //     // else if(sortData=="price_ascending") {
    
// //     // }
// //     // else {

// //     // }
// //   };
// //   receivedData();
// // },[company])

//   useEffect(() => {    
//     const receivedData = async () => {
//       if(sortData=="popular"){
//         console.log('kjhkuhklujhkulj',carsData);
//         setCarListingsData(carsData.slice(offset, offset + perPage));
//       }
//       else if(sortData=="price_ascending") {
//         const sortedListings = [...carsData].sort((a, b) => a.price - b.price);
//         console.log('sorted is',sortedListings);
//         setCarListingsData(sortedListings.slice(offset, offset + perPage));
//       }
//       else {
//         const sortedListingsDesc = [...carsData].sort((a, b) => b.price - a.price);
//         setCarListingsData(sortedListingsDesc.slice(offset, offset + perPage));
//       }
//       setPageCount(Math.ceil(carsData.length / perPage));
//       setPostData(postData);
//     };
//     receivedData();
//   }, [offset, perPage,sortData]);




 

//   return (
//     <div>
//       <div className="cars index" id="view">
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
//     <div className="add_car_input_wrapper">
           
             
//           </div>
     
     
     
//       {/* //////////////////////////////// */}
//       <div className="je2-select _with-placeholder" data-name="brand_id">
//         <svg className="je2-select__right-icon"><Icon name='home' size='mini' /></svg>      
//         <select name id aria-label  onChange={(e) => {SetCompany(e.target.value)}}>

        
//         <optgroup label="">
//             <option value="allCompany">All cars</option>
//         {allcompany.map((item)=>(
//             <option value={item.name}>{item.name}</option>
            
//             ))}
                      
//             </optgroup>
//             </select>
//         <span>Companies</span>
//       </div>
//       {/* //////////////////////// */}
//       <button className="je2-button js-filter-button" data-type="car-price">
//         <div className="je2-button__temporary" />
//         <span>Price</span>
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
//                 <select value={sortData} onChange={(e)=>setSortData(e.target.value)} >
//                   <option value="popular">Popular</option>                 
//                   <option value="price_ascending">Price lowest first</option>
//                   <option value="price_descending">Price highest first</option>
//                   </select>
//                 <span>{sortData}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="je2-grid _serp_results">
//           <div className="je2-grid__content">

// {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
//  {/* {datas.map((item,index) => ( */}
//  { carListingsData.map((pd) => (
        
      
//             <div className="ListingCard _with-cars-logo _initialized" data-id={12491845} data-price-usd={1200000} data-country-code="US" data-country="United States" data-country-subdivision="TX" data-city="Flower Mound" data-office-id={148546} data-agent-id={-1} data-category="Car" data-brand="Shelby" data-model="Cobra" data-position="Search" data-serp-position={1} data-type="Listing card">
//               <a onClick={()=>onClickImage(pd._id)} target="_blank" className="js-link">                
//                 <div className="ListingCard__picture">
//                   <div className="slider">
//                     <div className="slider__left-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
//                     <div className="slider__right-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
//                     <div className="swiper-container" style={{overflow: 'hidden'}}>
//                       <div className="swiper-wrapper" style={{transition: 'transform 150ms ease 0s', width: '2325px', display: 'flex', flexDirection: 'row'}}>
//                         <div className="swiper-slide-active swiper-slide" style={{backgroundImage: 'url("data:image/jpeg', width: '465px', marginRight: '0px'}}>
//                           <img  importance="high" alt="2023 Shelby Cobra rwd in Flower mound, TX, United States 1" src={pd.imagename}/>
//                         </div>                        
//                       </div>                    
//                     </div>
//                   </div>
//                 </div>
//                 <div className="ListingCard__description">
//                   <div className="ListingCard__price">
//                     Rs.{pd.price}
//                   </div>
//                   <div className="ListingCard__tags">
//                     <span className="ListingCard__tag">{pd.name}</span>
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
        
//       </div>
      
      
//     </section>
//     <div className="je2-search-page__seo-container js-seo-container _no-max-width">
//     </div>
   
//   </div>
// </div>
//       <ReactPaginate
//         previousLabel={"<prev"}
//         nextLabel={"next>"}
//         breakLabel={"..."}
//         breakClassName={"break-me"}
//         pageCount={pageCount}
//         // marginPagesDisplayed={2}
//         pageRangeDisplayed={5}
//         onPageChange={handlePageClick}
//         containerClassName={"pagination"}
//         subContainerClassName={"pages pagination"}
//         activeClassName={"active"}
//       />
//     </div>
//   );
// }
