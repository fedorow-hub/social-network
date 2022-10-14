import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route, Routes} from "react-router-dom";


function App(props) {
    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <Routes>
                <Route path='/messages/*' element={<DialogsContainer store={props.store}/>}/>
                <Route path='/profile/*' element={<Content store={props.store} />}/>
            </Routes>

        </div>
    );
}

export default App;
