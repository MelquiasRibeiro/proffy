import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Register from './pages/Register';





const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        < Route exact path="/" component={Home}/>
        < Route  path="/list" component={List}/>
        < Route  path="/register" component={Register}/>


    </BrowserRouter>
  );
}

export default Routes;
