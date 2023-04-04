import React, { useState, useEffect } from "react";
import axios from "axios";
import Stripe from 'react-stripe-checkout'
import { Navigate, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import './carViewModal.css'
// import StripeCheckout from 'react-stripe-checkout'

function CarView() {
  const [carDatas,SetCarDatas]=useState([])
  const [bookingPrice,setBookingPrice]=useState()
  const navigate = useNavigate();
  const { id } = useParams();
    console.log("456",id);
  // function onToken(data){
  //   console.log('vbn',data);
  //   let checkoutData = {
  //     token : data

  //   }
  //   console.log('jkl',checkoutData);
  // }
  const [showModal, setShowModal] = useState(false);

const toggleModal = (event) => {
  event.stopPropagation();
  setShowModal(!showModal);
}

  useEffect(() => {
    axios.get(`http://localhost:5000/getSingleCar/${id}`).then(async (res) => {
      console.log("====...>>>>.", res.data);
      await SetCarDatas(res.data);
      setBookingPrice(res.data.price*20/100)

    });
  }, []);
  console.log("====...>?????:;l>>>>>>>>>>>>>>>>>>>>>>.", carDatas);

  const handleToken =  (amt,token)=>{
    try {
      axios.post('http://localhost:5000/stripe',{
        token:token,
        amount:amt
      }).then(async(result)=>{
        console.log('lkjjjjj',result);
        // if(result){
           axios.post('http://localhost:5000/addBookedCars',{
            userId:"63db2dc7f16acb5f9946089b",
            carId:carDatas._id,
            image:carDatas.imagename,
          })
          // axios.post('http://localhost:5000/changeBookingStatus',{
          //   carId:carDatas._id,
          // })

          navigate('/')

        // }
      })
    } catch (error) {
      console.log(error);      
    }
  }
  const tokenHandler = (token)=>{
    
    handleToken(bookingPrice,token)
  }

  

  return (
    
    <div>
    
      <div className="cars show" id="view">
        <div className="je3-header js-header _no-sticky">
        {showModal && (
                  <div className="modal-overlay">
          <div className="modal">
          
            <button onClick={toggleModal}>&#128473;</button>
            <br />
                 <div  >
                    The booking price must be 20% of the total amount of the car        
                    <br />total amount for booking <b>{carDatas.name}</b> is <b>Rs. {bookingPrice} </b>  
                    <br /> <Stripe token={tokenHandler} stripeKey="pk_test_51Mg69KSCKTDw8Te2ZcDATxGK2CzkuTztyNVT6VVAAx8wjWvMvVjsRZpvhgOPiMPy6YIpybEUx3Tl2B75DRVMPmPd00Z8HnRmco" >
                    <button className="butnasd"> <b> Book Now</b></button></Stripe>
                    </div>
                    </div>
                    </div>
                )}
          <header>
            <button
              className="je2-button js-hamburger-menu _noborder"
              aria-label="Menu"
            >
              <svg
                width={20}
                height={14}
                viewBox="0 0 20 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 13.0444H20" strokeWidth="1.6" />
                <path d="M0 7.04443H20" strokeWidth="1.6" />
                <path d="M0 1.04443H20" strokeWidth="1.6" />
              </svg>
            </button>
            <a
              href="/"
              style={{ marginTop: "15px" }}
              className="je2-texts__heading-34"
              aria-label="JamesEdition"
            >
              Sanan Cars
            </a>
            <ul>
              <li>
                <a
                  href="/buyer/feed"
                  className="je2-button js-menu-link _noborder"
                  data-click-area="Just for You"
                >
                  <span>Just for You</span>
                </a>
              </li>
            </ul>
            <ul className="je2-user-controls js-user-controls">
              <li>
                <a
                  className="je2-user-controls__saved"
                  href="/buyer/saved-listings"
                >
                  Saved
                  <div>1</div>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="je2-user-controls__account js-account"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="je2-notification-circle js-notification-circle " />
                  <p>Amil</p>
                </button>
              </li>
              <nav
                className="je2-account-dropdown js-account-dropdown _v2 _hidden _empty"
                style={{ height: "216px" }}
              >
                <div className="je3-spinner">
                  <div />
                  <div />
                  <div />
                </div>
              </nav>
            </ul>
          </header>
          <aside
            className="je3-hamburger js-hamburger _loading _mobile-right"
            aria-hidden="true"
          >
            <nav>
              <div className="je3-spinner">
                <div />
                <div />
                <div />
              </div>
            </nav>
          </aside>
        </div>
        
       
        <div id="page_content" className="_w-bottom-offset">
          <main className="je2-listing js-listing _compact">
            <div className="je2-mobile-top-bar js-mobile-top-bar _transparent">
              <div>
                <a
                  href="https://www.jamesedition.com/cars/all?page=2"
                  className="je2-button _onlyicon"
                  aria-label="Back to search"
                >
                  <svg>
                    <use xlinkHref="#short-arrow" />
                  </svg>
                </a>
                <div className="je2-mobile-top-bar__info">
                  <p>Jaguar XKE Series I</p>
                  <span>$119,500</span>
                </div>
                <div>
                  <button
                    className="je2-button _onlyicon js-share"
                    aria-label="Share"
                  >
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3848 5L22.0002 9.61538L17.3848 14.2308"
                        stroke="#151515"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M2 18.846V15.7691C2 14.137 2.64835 12.5717 3.80242 11.4177C4.95649 10.2636 6.52174 9.61523 8.15385 9.61523H22"
                        stroke="#151515"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </button>
                  <button
                    className="je2-button _onlyicon js-heart "
                    data-listing-id={12489786}
                    aria-label="Save"
                  >
                    <svg>
                      <use xlinkHref="#heart" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="je2-listing__top _max-width _mobile-reverse">
              <nav className="je3-breadcrumbs _gray" aria-label="Breadcrumb">
                <ol>
                  <li>
                    <a href="/cars">Cars</a>
                  </li>
                  <svg>
                    <use xlinkHref="#breadcrumb-arrow" />
                  </svg>
                  <li>
                    <a href="/cars/jaguar">Jaguar</a>
                  </li>
                  <svg>
                    <use xlinkHref="#breadcrumb-arrow" />
                  </svg>
                  <li>
                    <a href="/cars/jaguar/xke">XKE </a>
                  </li>
                </ol>
              </nav>
              <div className="je2-top-gallery js-top-gallery _w-side-images " style={{ position: 'relative' }}>
                <div className="je2-top-gallery__image _2" style={{}}>
                  <picture style={{ backgroundImage: 'url("data:image/jpeg' ,position: 'relative'}}>                 
                    <img
                    style={{ position: 'relative' }}
                      src={carDatas.imagename}
                      importance="high"
                      alt="Jaguar XKE Series I in Los Angeles, CA 1 - 12489786"
                    />
                  </picture>
                  <div className="je2-top-gallery__side-images _2">
                    <div>
                      <picture
                        style={{ backgroundImage: 'url("data:image/jpeg' }}
                      >
                       
                        <img
                          src={carDatas.imagename}
                          importance="high"
                          alt="Jaguar XKE Series I in Los Angeles, CA 2 - 12489786"
                        />
                      </picture>
                      <picture
                        style={{ backgroundImage: 'url("data:image/jpeg' }}
                      >
                        
                        <img
                          src={carDatas.imagename}
                          alt="Jaguar XKE Series I in Los Angeles, CA 3 - 12489786"
                        />
                      </picture>
                    </div>
                    <div>
                      <picture
                        style={{ backgroundImage: 'url("data:image/jpeg' }}
                      >
                        <img
                          src={carDatas.imagename}
                          importance="high"
                          alt="Jaguar XKE Series I in Los Angeles, CA 4 - 12489786"
                        />
                      </picture>
                      <picture
                        style={{ backgroundImage: 'url("data:image/jpeg' }}
                      >
                        {/* <source
                          media="(max-width: 450px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/380xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/760xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 768px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/450xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/900xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 1100px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/768xxsxm.jpg,
             https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/1536xxsxm.jpg 2x"
                        />
                        <source
                          media="(max-width: 1900px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/1100xxs.jpg,
               https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/2200xxs.jpg 2x"
                        />
                        <source
                          media="(min-width: 1900px)"
                          srcSet="https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/1900xxs.jpg,
               https://img.jamesedition.com/listing_images/2023/01/31/16/07/12/507f32a9-cb8a-4967-a4ce-b221647ef35c/je/2200xxs.jpg 2x"
                        /> */}
                        <img
                          src={carDatas.imagename}
                          importance="high"
                          alt="Jaguar XKE Series I in Los Angeles, CA 5 - 12489786"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
                <div className="je2-top-gallery__controls">
                  <button
                    className="je2-button je2-top-gallery__save js-heart "
                    data-listing-id={12489786}
                    data-saved="Saved"
                    data-location="Gallery block"
                    aria-label="Save"
                  >
                   
                    <span>Save</span>
                  </button>
                  
                  <div className="je2-top-gallery__details">
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="je2-listing__body-wrapper">
              <div className="je2-listing__body">
                <div className="je2-listing__section">
                  <div className="je2-listing-info _compact">
                    <div>
                      <h1> <b> {carDatas.name} </b></h1>
                      <div className="je2-listing-info__price">
                      <b>Rs.
                      {carDatas.price}      </b>  
                                     
                      </div>
                    </div>
                    <div>
                      <p> <b>Brand:  {carDatas.brand} </b></p>
                    </div>
                    <div>
                      <p>Kms  by car : <b> {carDatas.kms} </b></p>
                      <p>Year of Registration : <b>{carDatas.year} </b></p>
                      <p>Fuel used  by car : <b>{carDatas.fuel} </b></p>
                      <p>Regstration number of the car : <b>{carDatas.regNo}</b> </p>
                      <button onClick={toggleModal} > <b> Book Now</b></button>
                   
                    </div>
                    
                  </div>
                </div>
                <br />
               
               
                {/* <div className="je2-listing__section">
                  <h2>About This Car</h2>
                  <div className="je2-listing-about js-listing-about">
                    <div
                      className="je2-read-more js-read-more _original"
                      aria-expanded="false"
                      data-block
                    >
                      <div className="je2-read-more__preview _translated" />
                      <div className="je2-read-more__preview _original">
                        
                        
                        <em>1964 Jaguar XKE Series I Roadster</em> This highly
                        desirable 1964 Jaguar XKE Series I Roadster featured
                        with matching numbers is finished in Old English White
                        complemented with a Black interior and Red upholstery.
                        This Series I XKE roadster is equipped with a four-speed
                        manual transmission, 3.8-liter inline-six engine, triple
                        SU carburetors, front-wheel disc brakes, twin exhaust
                        finishers, convertible soft top, toggle switches, Smiths
                        instruments, Lucas-branded ammeter gauge, covered
                        headlights, triple windshield wipers, three-spoke
                        wood-rimmed steering wheel, bonnet louvers, chrome
                        trim/bumpers, Coker Classic redline tires, wire wheels
                        with Jaguar branded two-eared knock-off wheel spinners,
                        and a full-size spare tire fitted in the trunk.
                        Amenities include manual-crank windows, an armrest
                        center console, cigar lighter with an ashtray, a
                        passenger dash grab handle, and a vintage Boman
                        Astrosonic radio. A sensational Series I E-Type Roadster
                        that is in excellent condition and is also mechanically
                        sound. For $119,500
                      </div>
                      <div className="je2-read-more__expand js-expand">
                        <span>…</span>
                        <button className="je2-button je2-link">
                          Read more
                        </button>
                      </div>
                      <div className="je2-read-more__collapse">
                        <button className="je2-button je2-link js-collapse">
                          Read less
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
                       
               
              </div>
             
            </div>
            
          </main>
        </div>
        
      </div>
    </div>
  );
}

export default CarView;
