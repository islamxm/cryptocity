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

const App = () => {
    const loc = useLocation();

    return (
        <div className="App">
            <ToastContainer/>
            <Layout>
                {
                    loc?.pathname !== '/auth' && loc?.pathname !== '/signup' ? (
                        <>
                            <Header/>
                            <Menu/>
                        </>
                    ) : null
                }
                
                
                <Routes>
                    <Route path='/auth' element={<CheckAuth><AuthPage/></CheckAuth>}/>
                    <Route path='/' element={<CheckAuth><HomePage/></CheckAuth>}/>
                    <Route path='/referals' element={<CheckAuth><RefPage/></CheckAuth>}/>
                    <Route path='/wallet' element={<CheckAuth><WalletPage/></CheckAuth>}/>
                    <Route path='/signup' element={<SignupPage/>}></Route>
                    <Route path='*' element={<Notfound/>}/>
                </Routes>
            </Layout>
            
            
        </div>
    )
}

export default App;