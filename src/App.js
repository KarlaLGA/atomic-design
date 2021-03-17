import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from './components/3modules/SignUp'
import CenterAlign from './components/4templates/CenterAlign'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path='/'>
                        <CenterAlign>
                            <SignUp/>
                        </CenterAlign>
                    </Route>
                </Switch>
            </Router>

        </div>
    );
}

export default App;
