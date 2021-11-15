
import { useEffect } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer.js';
import Header from './Components/Header/Header.js';
import NotFound from './Components/NotFound/NotFound.js';
import ContextProvider from './contexts/ContextProvider.js';
import Home from './Pages/Home/Home.js';
import Login from './Pages/Login/Login.js';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute.js';
import Signup from './Pages/Login/Signup.js';
import Purchase from './Pages/Purchase/Purchase/Purchase.js';
import Services from './Pages/Services/Services.js';

function App() {
  useEffect(() => {
    fetch('./tools.json')
      .then(res => res.json())
      .then(data => console.log(data));
  },[])
  return (
    // <div className="App">
    <>
    <ContextProvider>
        <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/home'>
            <Home></Home>
            </Route>

            <PrivateRoute path='/purchase/:serviceId'>
             <Purchase></Purchase>
            </PrivateRoute>

            <Route path='/explore'>
            <Services></Services>
            </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/signup'>
            <Signup/>
          </Route>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
        </BrowserRouter>
          </ContextProvider>
      </>
    // </div>
  );
}

export default App;
