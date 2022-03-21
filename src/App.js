
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './componets/Home/Home';
import Header from './componets/Header/Header';
import Footer from './componets/Footer/Footer';
import NotFound from './componets/NotFound/NotFound';
import Login from './componets/Login/Login';
import AuthProvider from './contex/AuthProvider';
import ContactUs from './componets/ContactUs/ContactUs';
import ServiceDetails from './componets/ServiceDetails/ServiceDetails';
import PrivateRoute from './componets/PrivateRoute/PrivateRoute';
import About from './componets/About/About';
import Appointment from './componets/Appointment/Appointment';
import AdminRoute from './componets/Login/AdminRoute/AdminRoute';
import Dashboard from './componets/Dashboard/Dashboard';
import ManageReviews from './componets/Dashboard/ManageReviews';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/serviceDetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute exact path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/contactus">
              <ContactUs></ContactUs>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <AdminRoute exact path="/dashboard">
              <Dashboard></Dashboard>

            </AdminRoute>


            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
