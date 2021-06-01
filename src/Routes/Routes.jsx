import Search from '../Pages/Search/Search';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import { Content } from '../Pages/Comman/Content';
import { Economy } from '../Pages/Economy/Economy';
import { Corona } from '../Pages/Coronavirus/Corona';
import { Content2 } from '../Pages/Coronavirus/FullArticle/Content';
import Landing from '../Pages/Landing/Landing';
import Video from '../Pages/Video/Video';
import Live from '../Pages/Live/Live';
import { Features } from "../Pages/Features/Features"
import { FeaturesContent } from "../Pages/Features/FeaturesContent"
import { Opinion } from "../Pages/Opinion/Opinion";
import { Content3 } from "../Pages/Opinion/FullArticle/Content";  
import { FooterContainer } from '../Common/Footer/Containers/Footer';
function AllRoutes() {
  const location = useLocation();
  console.log('location inside Routes', location);
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/features'>
          <Features />
        </Route>
        <Route path='/features/:id'>
          <FeaturesContent />
        </Route>
        <Route exact path='/economy'>
          <Economy />
        </Route>
        <Route path='/economy/:id'>
          <Content />
        </Route>
        <Route exact path='/corona'>
          <Corona />
        </Route>
        <Route path='/corona/:id'>
          <Content2 />
        </Route>
        <Route path='/video'>
          <Video />
        </Route>
        <Route path='/live'>
          <Live />
        </Route>
        <Route exact path='/features'>
          <Features />
        </Route>
        <Route path='/features/:id'>
          <FeaturesContent />
        </Route>
        <Route exact path='/opinion'>
          <Opinion />
        </Route>
        <Route path='/opinion/:id'>
          <Content3 />
        </Route>
        <Route path='/search/:title'>
          <Search />
        </Route>
        <Route>
          <h1> 404 Not Found </h1>
        </Route>
      </Switch>
    </>
  );
}


export { AllRoutes };
