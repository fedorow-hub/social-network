import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";


function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Sidebar/>
            <Routes>
                <Route path='/messages/*' element={<DialogsContainer />}/>
                <Route path='/profile/*' element={<Content />}/>
                <Route path='/profile/:id' element={<Content />}/>
                <Route path='/users/*' element={<UsersContainer />}/>
            </Routes>
        </div>
    );
}

export default App;
