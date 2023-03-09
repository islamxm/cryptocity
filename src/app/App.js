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
import SignupPage from '../pages/signupPage/SignupPage';
import { ToastContainer } from 'react-toastify';
import ResetPage from '../pages/authPage/ResetPage';
import AcPage from '../pages/acPage/AcPage';
import NftPage from '../pages/nftPage/NftPage';
import SettingsPage from '../pages/settingsPage/SettingsPage';

const App = () => {
    const loc = useLocation();

    return (
        <div className="App">
            <ToastContainer/>
            <Layout>
                <Header home={loc?.pathname !== '/auth' && loc?.pathname !== '/signup' && loc?.pathname !== '/reset'}/>
                {
                    loc?.pathname !== '/auth' && loc?.pathname !== '/signup' && loc?.pathname !== '/reset' ? (
                        <>
                            <Menu/>
                        </>
                    ) : null
                }
                
                
                <Routes>
                    <Route path='/auth' element={<CheckAuth><AuthPage/></CheckAuth>}/>
                    <Route path='/reset' element={<ResetPage/>}/>
                    <Route path='/' element={<CheckAuth><HomePage/></CheckAuth>}/>
                    <Route path='/referals' element={<CheckAuth><RefPage/></CheckAuth>}/>
                    <Route path='/wallet' element={<CheckAuth><WalletPage/></CheckAuth>}/>
                    <Route path='/activity' element={<CheckAuth><AcPage/></CheckAuth>}/>
                    <Route path='/nft' element={<CheckAuth><NftPage/></CheckAuth>}/>
                    <Route path='/settings' element={<CheckAuth><SettingsPage/></CheckAuth>}/>
                    <Route path='/signup' element={<SignupPage/>}></Route>
                    <Route path='*' element={<Notfound/>}/>
                </Routes>
            </Layout>
            
            
        </div>
    )
}

export default App;