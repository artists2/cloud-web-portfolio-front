import "./App.css";
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chart from './pages/Chart';
import Graph from './pages/Graph';
import Signin from './pages/Signin';



function App() {
    return (
        <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/chart' component={Chart} />
                <Route path='/graph' component={Graph} />
                <Route path='/signin' component={Signin} />
            </Switch>
        </Router>
        </>
    );
}


export default App;