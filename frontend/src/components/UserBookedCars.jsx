import React from "react";

function UserBookedCars() {
    return <div>
    <div className="buyer-saved_listings index" id="view">
        <div className="je3-header js-header">
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
                <h1>Booked Cars</h1>
                <button className="je2-button _noborder _onlyicon _mobile-and-tablet-only js-listings-actions ">
                  <svg width={22} height={4} viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2ZM13 2C13 3.10457 12.1046 4 11 4C9.89543 4 9 3.10457 9 2C9 0.895431 9.89543 0 11 0C12.1046 0 13 0.895431 13 2ZM20 4C21.1046 4 22 3.10457 22 2C22 0.895431 21.1046 0 20 0C18.8954 0 18 0.895431 18 2C18 3.10457 18.8954 4 20 4Z" fill="#151515" />
                  </svg>
                </button>
                <div>
                  
                </div>
              </div>
              <div className="je2-saved-listings__grid js-grid ">
                <div className="ListingCard _initialized" data-id={12001748} data-price-usd={430200} data-country-code="IT" data-country="Italy" data-country-subdivision="Lazio" data-city="Frosinone" data-office-id={102692} data-agent-id={1039628} data-category="Car" data-brand="Porsche" data-model="SAS Speedster '57 Turbo" data-location="User account" data-position="Saved listings tab" data-type="Listing card">
                  <a href="/cars/porsche/sas-speedster-57-turbo/2019-porsche-sas-speedster-57-turbo-for-sale-12001748" title="2019 Porsche SAS Speedster '57 Turbo " target="_blank" className="js-link">
                    <div className="ListingCard__save js-heart _active" data-listing-id={12001748}>
                      <svg><use xlinkHref="#white-heart" /></svg>
                    </div>
                    <div className="ListingCard__picture">
                      <div className="slider">
                        <div className="slider__left-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                        <div className="slider__right-arrow"><div><svg><use xlinkHref="#arrow-right" /></svg></div></div>
                        <div className="swiper-container" style={{overflow: 'hidden'}}>
                          <div className="swiper-wrapper" style={{transition: 'transform 150ms ease 0s', width: '2200px', display: 'flex', flexDirection: 'row'}}>
                            <div className="swiper-slide-active swiper-slide" style={{backgroundImage: 'url("data:image/jpeg', width: '440px', marginRight: '0px'}}>
                              <img decoding="sync" className="je2-lazy-load _loaded" src="https://img.jamesedition.com/listing_images/2022/05/31/13/08/47/01b5b664-7732-4e22-8442-c006443170f7/je/556x342xcxm.jpg" alt="Cabriolet in Frosinone, Lazio, Italy 1" />
                            </div>
                           
                          </div>
                        
                        </div>
                      </div>
                    </div>
                    <div className="ListingCard__description">
                      <div className="ListingCard__tags">
                        <span className="ListingCard__tag">2019 Porsche SAS Speedster '57 Turbo </span>
                      </div>
                      <div className="ListingCard__price">
                       actual price : ₹ 35,510,080
                      </div>
                      <div className="ListingCard__price">
                       booked price :
                      </div>
                      <div className="ListingCard__title">
                       <b>to cancel booking contact the company</b>
                      </div>
                      
                    </div>
                  </a>
                </div>
              </div>             
            </section>
          </div>         
        </div>
      </div>
  </div>;
}

export default UserBookedCars;
