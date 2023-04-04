import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const { localStorage } = window;
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedOut } from '../redux/feature/userSlice';



function LandingPageComponent() {

  const navigate = useNavigate();
  const dispatch =  useDispatch()

  const user = useSelector(state => state.user)
  console.log('log-=-=',user)

  let p
    const handleLogin = ()=>{
        navigate('/login')
        console.log('hi');
        axios.get('http://localhost:5000/api').then((res)=>console.log(res.data))
    }
    const logout = ()=>{
      localStorage.removeItem('jwtToken');
      dispatch(setLoggedOut()) 
    }
    useEffect(()=>{
        console.log('hello');
        axios.get('http://localhost:5000/admin/getCompanies')
        .then((res)=>{console.log(res)
          p=res.data.image
          console.log(res.data.image)
        })
        .catch((err)=>console.log(err))
    },[])


  return (
    <div> <div>
    <div className="je3-header js-header _transparent _without-space _with-search">
      <header>
        <button className="je2-button js-hamburger-menu _noborder" aria-label="Menu">
          <svg width={20} height={14} viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 13.0444H20" strokeWidth="1.6" />
            <path d="M0 7.04443H20" strokeWidth="1.6" />
            <path d="M0 1.04443H20" strokeWidth="1.6" />
          </svg>
        </button>
        <a href="/" style={{marginTop:'15px'}} className="je2-texts__heading-34" aria-label="JamesEdition">
          
         Sanan Cars
        </a>
        <div className="je3-search-field js-search-field ">
          <div className="je3-search-field__input">
            <div className="je3-search-field__placeholder js-placeholder">
              
              <p>Search Cars</p>
            </div>
            <label>
              <button className="je2-button _noborder js-back" aria-label="Back">
                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.1666 10L1.66663 10" stroke="#151515" strokeWidth="1.6" />
                  <path d="M10 18.3332L1.66667 9.99984L10 1.6665" stroke="#151515" strokeWidth="1.6" />
                </svg>
                
              </button>
              <input type="text" autoComplete="off" className="js-search-text" name="search" placeholder="Search Cars" enterkeyhint="search" data-url data-hj-allow defaultValue aria-label="Search Cars" />
            </label>
            
          </div>
          <div className="je3-search-field__suggestions js-search-suggestions" />
        </div>
        <ul>
          <li>
            <a onClick={()=>{navigate('/bookedCars')}} className="je2-button js-menu-link _noborder" data-click-area="Just for You">
              <span>Booked cars</span>
            </a>
          </li>
        </ul>
        <ul className="je2-user-controls js-user-controls">
          <li>
            <a className="je2-user-controls__saved" href="/buyer/saved-listings">
              Saved cars
              
            </a>
          </li>
          <li>
          {
            user?.isLoggedIn ?
            <button type="button" onClick={logout} className="je2-user-controls__account js-account" aria-haspopup="true" aria-expanded="false">
              <span className="je2-notification-circle js-notification-circle "/>
              <p>Log Out</p>
            </button>
            :
            <button type="button" onClick={handleLogin} className="je2-user-controls__account js-account" aria-haspopup="true" aria-expanded="false">
              <span className="je2-notification-circle js-notification-circle "/>
              <p>Log In</p>
            </button>

          }
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
      <div className="je2-secondary-menu js-secondary-menu">
        <nav>
          <ul>
            <li>
              <a href="/cars/bugatti" className="je2-button js-menu-button _noborder" data-name="Bugatti">
                <span>Bugatti</span>
              </a>
            </li>
            <li>
              <a href="/cars/pagani" className="je2-button js-menu-button _noborder" data-name="Pagani">
                <span>Pagani</span>
              </a>
            </li>
            <li>
              <a href="/cars/koenigsegg" className="je2-button js-menu-button _noborder" data-name="Koenigsegg">
                <span>Koenigsegg</span>
              </a>
            </li>
            <li>
              <a href="/cars/ferrari" className="je2-button js-menu-button _noborder" data-name="Ferrari">
                <span>Ferrari</span>
              </a>
            </li>
            <li>
              <a href="/cars/lamborghini" className="je2-button js-menu-button _noborder" data-name="Lamborghini">
                <span>Lamborghini</span>
              </a>
            </li>
            <li>
              <a href="/cars/mercedes" className="je2-button js-menu-button _noborder" data-name="Mercedes">
                <span>Mercedes</span>
              </a>
            </li>
            <li>
              <a href="/cars/rolls_royce" className="je2-button js-menu-button _noborder" data-name="Rolls-Royce">
                <span>Rolls-Royce</span>
              </a>
            </li>
            <li>
              <a href="/cars/mcLaren" className="je2-button js-menu-button _noborder" data-name="McLaren">
                <span>McLaren</span>
              </a>
            </li>
            <li>
              <a href="/cars/brabus" className="je2-button js-menu-button _noborder" data-name="Brabus">
                <span>Brabus</span>
              </a>
            </li>
            <li>
              <a href="/cars/porsche" className="je2-button js-menu-button _noborder" data-name="Porsche">
                <span>Porsche</span>
              </a>
            </li>
            <li>
              <a href="/cars/aston_martin" className="je2-button js-menu-button _noborder" data-name="Aston+Martin">
                <span>Aston Martin</span>
              </a>
            </li>
            <li>
              <a href="/cars/bentley" className="je2-button js-menu-button _noborder" data-name="Bentley">
                <span>Bentley</span>
              </a>
            </li>
            <li>
              <a href="/cars/maybach" className="je2-button js-menu-button _noborder" data-name="Maybach">
                <span>Maybach</span>
              </a>
            </li>
            <li>
              <a href="/cars/bmw" className="je2-button js-menu-button _noborder" data-name="BMW">
                <span>BMW</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
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
      <div className="je2-top-banner-new ">
        <div className="je2-top-banner-new__content">
          <div className="je2-top-banner-new__content-wrapper">
            <div className="je2-top-banner-new__content-left">
              <div className="je2-top-banner-new__title">
                Luxury Cars
              </div>
              <h1 className="je2-top-banner-new__subtitle">
                Explore 7,000+ luxury cars, supercars and exotic cars for sale worldwide in one simple
                search
              </h1>
            </div>
          </div>
        </div>
        <div className="je2-top-banner-new__slider _loading js-banner-slides">
          <div className="je2-top-banner-new__slider-slide js-banner-slide _active" style={{backgroundImage: 'url("data:image/jpeg'}}>
            <img src="https://static-x.jamesedition.com/assets/category_banner/cars_desktop-af2ea25aa8e069da3d3411834fa7b06a679a566f81461a9baf7a6e2b40739024.jpg" alt="" importance="high" />
          </div>
        </div>
      </div>
    </div></div>
    <div > <img style={{width:'100px',height:'100px'}} src={p}  alt='no image'/></div>
    </div>
  )
}

export default LandingPageComponent