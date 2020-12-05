import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Main from "./Page/Main";
import Login from "./Page/Login"
import Stocksale from "./Page/Stocksale"
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Router>

                <Switch>
                    <Route path={'/'} exact component={Login}/>
                    <Route path={'/dashboard'} component={Main}/>
                    <Route path={'/stocksale'} component={Stocksale}/>
                </Switch>

            </Router>

        </div>
    )
}


export default App;
