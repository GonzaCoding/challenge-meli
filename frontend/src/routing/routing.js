import React from 'react';
import { Route, Switch} from 'react-router-dom';
import ItemsPage from '../pages/ItemsPage';
import MainPage from '../pages/MainPage';


const AppRouting = () => {
    return (
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/items" exact component={ItemsPage} />
            <Route path="/items/:id" exact component={ItemsPage} />
        </Switch>
    )
}

export default AppRouting;
