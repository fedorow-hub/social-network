import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


function App(props) {
    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <Routes>
                <Route path='/messages/*' element={<Dialogs state={props.state.dialogPage}
                                                            dispatch={props.dispatch}/>}/>
                <Route path='/profile/*' element={<Content profilePage={props.state.profilePage}
                                                           dispatch={props.dispatch} />}/>
            </Routes>

        </div>
    );
}

export default App;
