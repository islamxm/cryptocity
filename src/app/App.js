import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Layout from '../components/Layout/Layout';
//pages
import Notfound from '../pages/notfound/Notfound';
import HomePage from '../pages/homePage/HomePage';


const App = () => {
    return (
        <div className="App">
            <Layout>
                <Header/>
                <Menu/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='*' element={<Notfound/>}/>
                </Routes>
            </Layout>
            
            
        </div>
    )
}

export default App;