import logo from './logo.svg';
import './App.css';
import Labs from './labs';
import HelloWorld from './labs/a6/hello-world';
import Tuiter from './tuiter';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Assignment7 from "./labs/a7";

function App() {
    return (
        <BrowserRouter>
            < div className="container">
                <Routes>
                    <Route path="/*"
                           element={<Labs/>}/>
                    <Route path="hello"
                           element={<HelloWorld/>}/>
                    <Route path="tuiter/*"
                           element={<Tuiter/>}/>
                    <Route path="a7/*"
                           element={<Assignment7/>}/>
                </Routes>
            </div>

        </BrowserRouter>
    );
}

export default App;
