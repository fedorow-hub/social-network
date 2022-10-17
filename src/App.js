import './App.css';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {
    return (
        <div className="wrapper">
            <HeaderContainer/>
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
