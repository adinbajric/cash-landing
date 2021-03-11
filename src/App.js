
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Footer from './components/pages/Footer/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignUp from './components/pages/SignUp/SignUp';
import Products from './components/pages/Products/Products';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' component={Services}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/products' component={Products}/>
      </Switch>
      <Footer/>      
    </Router>  
      
    
  );
}

export default App;
