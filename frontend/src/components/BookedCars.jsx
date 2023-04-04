import React, { useState, useEffect } from "react";
import axios from "axios";

function BookedCars() {
  const [datas, SetDatas] = useState([]);
  const [cardata, SetcarData] = useState([]);
  
  let user = "63db2dc7f16acb5f9946089b"

  useEffect(() => {
    axios.get(`http://localhost:5000/getbookedCarsForUsers/${user}`).then(async (res) => {
      console.log('asdert',res.data);
      await SetDatas(res.data)
      res.data.map(async(item,index)=>{
         axios.get(`http://localhost:5000/getSingleCar/${item.carId}`).then(async (resp) => {
           console.log("axios car data",item.carId);
           console.log("axios data",resp.data);
           let datass =resp.data
           SetcarData(prevArray => [...prevArray, datass]);
         
           
          });       
        })  
      });
      
  }, []);

  const hi = ()=>{
    console.log(datas);
    console.log(cardata);
  } 
  
  return  <div className="buyer-saved_listings index" id="view">
  <div className="je3-header js-header">
    <header>
      <button  onClick={hi}  className="je2-button js-hamburger-menu _noborder" aria-label="Menu">
        <svg width={20} height={14} viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 13.0444H20" strokeWidth="1.6" />
          <path d="M0 7.04443H20" strokeWidth="1.6" />
          <path d="M0 1.04443H20" strokeWidth="1.6" />
        </svg>
      </button>
      <a href="/" className="je2-button _noborder" aria-label="JamesEdition">
        <svg className="je2-icon"><use xlinkHref="#logo-new" /></svg>
        
      </a>
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
            <div>3</div>
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
    <aside className="je3-hamburger js-hamburger _loading _mobile-right" aria-hidden="true">
      <nav>
        <div className="je3-spinner">
          <div />
          <div />
          <div />
        </div>
      </nav>
    </aside>
  </div>
  <div id="page_content" className>
    <div className="je2-buyer-dashboard">
      
      <section className="je2-saved-listings js-saved-listings">
        <div className="je2-buyer-dashboard__top">
          <h1>Booked listings</h1>
          <button className="je2-button _noborder _onlyicon _mobile-and-tablet-only js-listings-actions ">
            <svg width={22} height={4} viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM13 2C13 3.10457 12.1046 4 11 4C9.89543 4 9 3.10457 9 2C9 0.895431 9.89543 0 11 0C12.1046 0 13 0.895431 13 2ZM20 4C21.1046 4 22 3.10457 22 2C22 0.895431 21.1046 0 20 0C18.8954 0 18 0.895431 18 2C18 3.10457 18.8954 4 20 4Z" fill="#151515" />
            </svg>
          </button>
          
        </div>

        <div className="je2-saved-listings__grid js-grid ">
                         {cardata.map((item,index)=>(
        <div className="ListingCard _initialized" data-id={12001748} data-price-usd={429333} data-price-euro={400000} data-price={400000} data-currency="EUR" data-country-code="IT" data-country="Italy" data-country-subdivision="Lazio" data-city="Frosinone" data-office-id={102692} data-agent-id={1039628} data-category="Car" data-brand="Porsche" data-model="SAS Speedster '57 Turbo" data-location="User account" data-position="Saved listings tab" data-type="Listing card">

                        
                         <div className="ListingCard__picture">
                           <div className="slider">                      
                            
                             <div className="swiper-container" style={{overflow: 'hidden'}}>
                               <div className="swiper-wrapper" style={{transition: 'transform 150ms ease 0s', width: '2200px', display: 'flex', flexDirection: 'row'}}>
                                 <div className="swiper-slide-active swiper-slide" style={{backgroundImage: 'url("data:image/jpeg', width: '440px', marginRight: '0px'}}>
                                   <img src={item.imagename} className="je2-lazy-load _loaded" alt="Cabriolet in Frosinone, Lazio, Italy 1" />
                                 </div>
                                
                               </div>
                              
                             </div> 
                           </div>
                         </div>
                         <div className="ListingCard__description">
                           <div className="ListingCard__price">
                           {item.price}
                           </div>
                           <div className="ListingCard__tags">
                             <span className="ListingCard__tag">{item.name}</span>
                             <span className="ListingCard__tag">{item.brand}</span>
                           </div>
                           <div className="ListingCard__title">
                             Frosinone, Lazio, Italy
                           </div>
                           <div className="ListingCard__actions">
                             <div className="js-contact-button">Contact<svg><use xlinkHref="#contact" /></svg></div>
                           </div>
                         </div>
                      
                     </div>
                     ))}

          
          
        </div>
        
        
       
      </section>
    </div>
   
  </div>
</div>
}

export default BookedCars;
