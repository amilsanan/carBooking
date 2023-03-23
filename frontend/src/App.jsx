import Header from "./components/Header";
import LogIn from "./components/LogIn/LogIn";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUp from "./components/SignUp/SignUp";
import AdminLogin from "./components/adminLogin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ShowCollections from "./components/ShowCollections";
import CarView from "./components/CarView";
import Error from "./components/Error";
import SavedCars from "./components/SavedCars";
import BookedCars from "./components/BookedCars";
import ForgetPassword from "./components/ForgetPassword";
import EditCar from "./components/admin/EditCar";
import Profile from "./components/SignUp/Profile";
import UserChat from "./components/UserChat";
import UserBookedCars from "./components/UserBookedCars";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">

     <BrowserRouter>
      <Routes>
     <Route exact path='/' element={<LandingPage/>} />
     <Route  exact path='/login' element={ <LogIn/> } />
     <Route  exact path='/signup' element={ <SignUp/> } />
     <Route  exact path='/showCollections' element={ <ShowCollections/> } />
     <Route  exact path='/carView/:id' element={ <CarView/> } />
     <Route  exact path='/profile' element={ <Profile/> } />
     <Route  exact path='/userbookedcars' element={ <UserBookedCars/> } />
     {/* <Route  exact path='/search' element={ <Header/> } /> */}
     <Route  exact path='*' element={ <Error/> } />
     <Route  exact path='/userChat' element={ <UserChat/> } />
     <Route  exact path='/savedCars' element={ <SavedCars/> } />
     <Route  exact path='/bookedCars' element={ <BookedCars/> } />
     <Route  exact path='/forgetPassword' element={ <ForgetPassword/> } />
     <Route exact path="/admin" element={<AdminLogin/>} />
     <Route exact path="/admin/dashboard" element={<AdminDashboard/>} />
     <Route exact path="/admin/editCar/:id" element={<EditCar/>} />
     </Routes>
     </BrowserRouter>
    
    </div>
  )
}

export default App
