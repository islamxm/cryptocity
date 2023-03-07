import './HomePage.scss';
import PageLayout from '../../components/PageLayout/PageLayout';


import HomeNot from './components/HomeNot/HomeNot';
import HomeUl from './components/HomeUl/HomeUl';
import HomeSale from './components/HomeSale/HomeSale';
import HomeDl from './components/HomeDl/HomeDl';
import HomeCon from './components/HomeCon/HomeCon';
import HomeBuy from './components/HomeBuy/HomeBuy';
import HomeBalance from './components/HomeBalance/HomeBalance';
import ContentLayout from '../../components/ContentLayout/ContentLayout';
import {motion} from 'framer-motion';
import contentEnterAnimProps from '../../ex/contentEnterAnimProps';
import apiService from '../../service/apiService';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import AllUnlockModal from './modals/AllUnlockModal/AllUnlockModal';
import { userInfoUpdate } from '../../store/actions';
import BuyCryptoModal from './modals/BuyCryptoModal/BuyCryptoModal';
import GetCryptoModal from './modals/GetCryptoModal/GetCryptoModal';
import orderedElemAnim from '../../ex/orderedElemAnim';
import HomePr from './components/HomePr/HomePr';
import { ToastContainer } from 'react-toastify';
import notify from '../../ex/notify';

const service = new apiService();




const HomePage = () => {
    const dispatch = useDispatch();
    const {token} = useSelector(state => state);
    const [allUnlockModal, setAllUnlockModal] = useState(false)
    const [UnlocskList, setUnlocksList] = useState([])
    const [getCryptoModal, setGetCryptoModal] = useState(false)
    const [buyCryptoModal, setBuyCryptoModal] = useState(false)

    const openBuyCryptoModal = () => setBuyCryptoModal(true)
    const closeBuyCryptoModal = () => setBuyCryptoModal(false)

    const openGetCryptoModal = () => setGetCryptoModal(true)
    const closeGetCryptoModal = () => setGetCryptoModal(false)


    const openAllUnlock = () => setAllUnlockModal(true)
    const closeAllUnlock = () => setAllUnlockModal(false)

    const getData = () => {

        if(token) {
            service.getUserBalance(token).then(res => {
                setUnlocksList(res.UnlocksList);
                dispatch(userInfoUpdate(res.UserInfo))
            })
        }
    }



    useEffect(() => {
        getData()
        const getDataInterval = setInterval(() => {
            getData()
        }, 20000)

        return () => clearInterval(getDataInterval);
    }, [token])


 


    return (
        <div className="page HomePage">
            <AllUnlockModal
                visible={allUnlockModal}
                close={closeAllUnlock}
                data={UnlocskList}
                />
            
            <GetCryptoModal
                visible={buyCryptoModal}
                close={closeBuyCryptoModal}
                />
            <BuyCryptoModal
                visible={getCryptoModal}
                close={closeGetCryptoModal}
                />
            <ToastContainer/>
            <PageLayout>
                <div className="sb"></div>
                <ContentLayout>
                    <motion.ul
                        {...orderedElemAnim?.container}
                        className="HomePage__in">
                        <motion.li {...orderedElemAnim?.item} className="HomePage__item">
                            <HomeBalance/>
                        </motion.li>
                        <motion.li {...orderedElemAnim?.item} className="HomePage__item">
                            <HomeBuy
                                openBuyCryptoModal={openBuyCryptoModal}
                                />
                        </motion.li>
                        <motion.li {...orderedElemAnim?.item} className="HomePage__item">
                            <HomeDl/>
                        </motion.li>
                        <motion.li {...orderedElemAnim?.item} className="HomePage__item">
                            <HomeCon openGetCryptoModal={openGetCryptoModal}/>
                        </motion.li>
                        <motion.li {...orderedElemAnim?.item} className="HomePage__item">
                            <HomeUl list={UnlocskList} openAllUnlock={openAllUnlock}/>
                        </motion.li>
                        <motion.li {...orderedElemAnim?.item} className="HomePage__item">
                            <HomeSale
                                // openBuyCryptoModal={openBuyCryptoModal}
                                />
                        </motion.li>
                        <motion.li {...orderedElemAnim?.item} className="HomePage__item">
                            {/* <HomeNot/> */}
                            <HomePr
                                // openBuyCryptoModal={openBuyCryptoModal}
                                />
                        </motion.li>
                    </motion.ul>
                </ContentLayout>
                
            </PageLayout>
        </div>
    )
}

export default HomePage;