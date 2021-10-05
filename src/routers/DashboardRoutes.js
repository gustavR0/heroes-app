import React from "react";
import {Navbar} from "../components/ui/Navbar";
import {Route, Switch, Redirect} from "react-router-dom";
import {MarvelScreen} from "../components/marvel/MarvelScreen";
import {HeroeScreen} from "../components/heroes/HeroeScreen";
import {DcScreen} from "../components/dc/DcScreen";
import {SearchScreen} from "../components/search/searchScreen";

export const DashboardRoutes = () => {
    return(
        <>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exact path={"/marvel"} component={ MarvelScreen } />
                    <Route exact path={"/hero/:heroeId"} component={ HeroeScreen } />
                    <Route exact path={"/dc"} component={ DcScreen } />
                    <Route exact path={"/search"} component={ SearchScreen } />
                    <Redirect to={"/marvel"} />
                </Switch>
            </div>
        </>
    );
}
