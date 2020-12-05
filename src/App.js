import "./App.css";
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chart from './pages/Chart';
import Graph from './pages/Graph';
import Signin from './pages/Signin';
import stockGraph from './pages/stock/holding_stock_graph';
import stockTable from './pages/stock/holding_stock_table';
import profitGraph from './pages/stock/profit_graph';
import transFrequency from './pages/stock/transaction_frequency';
import login from './pages/auth/login';
import main from './pages/main'

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
                <Route path='/tf' component={transFrequency}/>
                <Route path='/pg' component={profitGraph}/>
                <Route path='/sg' component={stockGraph}/>
                <Route path='/st' component={stockTable}/>
                <Route path='/login' component={login}/>
                <Route path='/main' component={main}/>
            </Switch>
        </Router>
        </>
    );
}


export default App;