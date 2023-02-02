import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu';
import Layout from '../components/Layout/Layout';
//pages
import Notfound from '../pages/notfound/Notfound';
import HomePage from '../pages/homePage/HomePage';
import RefPage from '../pages/refPage/refPage';
import WalletPage from '../pages/walletPage/WalletPage';
import CheckAuth from '../hoc/CheckAuth';
import AuthPage from '../pages/authPage/AuthPage';
import { useLocation } from 'react-router-dom';
const App = () => {
    const loc = useLocation();

    return (
        <div className="App">
            <Layout>
                {
                    loc?.pathname !== '/auth' ? (
                        <>
                            <Header/>
                            <Menu/>
                        </>
                    ) : null
                }
                
                
                <Routes>
                    <Route path='/auth' element={<AuthPage/>}/>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/referals' element={<RefPage/>}/>
                    <Route path='/wallet' element={<WalletPage/>}/>
                    <Route path='*' element={<Notfound/>}/>
                </Routes>
            </Layout>
            
            
        </div>
    )
}

export default App;