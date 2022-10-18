import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import ContentContainer from "./components/Content/Content";


function App() {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <Sidebar/>
            <Routes>
                <Route path='/messages/*' element={<DialogsContainer />}/>
                <Route path='/profile/*' element={<ContentContainer />}/>
                <Route path='/profile/:id' element={<ContentContainer />}/>
                <Route path='/users/*' element={<UsersContainer />}/>
                <Route path='/login/' element={<Login />}/>
            </Routes>
        </div>
    );
}

export default App;
