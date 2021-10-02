import React from 'react'
import { SignNav } from '../Home_Signin/SignNav';
import './Saved.css';
import {Link, Route, Switch} from 'react-router-dom';
import { SavedItems } from './SavedItems/SavedItems';
import {Highlights } from './Highlights/Highlights';
import {Recent} from './Recent/Recent';

export const Saved = () => {
    return (
        <div>
            <SignNav />
            <div className="saved-body">
                <div className="saved-list">
                    Your lists
                </div>

                <div className="saved-button">
                    <div><div><Link style={{textDecoration: 'none',color: "#292929"}} to="/saved">Saved</Link></div></div>
                    <div><div><Link style={{textDecoration: 'none',color: "#292929"}} to="/highlights">Highlights</Link></div></div>
                    <div><div><Link style={{textDecoration: 'none',color: "#292929"}} to="/recent">Recently Viewed</Link></div></div>
                </div>

                <hr className="saved-hr"/>

                    <Switch>
                        <Route path="/" exact>
                            <SavedItems />
                        </Route>
                        <Route path="/saved" exact>
                            <SavedItems />
                        </Route>
                        <Route path="/highlights" exact>
                            <Highlights />
                        </Route>
                        <Route path="/recent" exact>
                            <Recent />
                        </Route>
                    </Switch>

            </div>
        </div>
    )
}
