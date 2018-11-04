import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Series from '../../containers/series';
import singleSeries from '../../containers/singleSeries/index';


const Main = props => (
    <Switch>
        <Route exact path="/" component={Series} />
        <Route path ="/series/:id" component={singleSeries}/>
    </Switch>
);

export default Main;