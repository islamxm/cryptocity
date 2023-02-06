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
const service = new apiService();

const HomePage = () => {
    const dispatch = useDispatch();
    const {token} = useSelector(state => state);
    const [allUnlockModal, setAllUnlockModal] = useState(false)

    const [UnlocskList, setUnlocksList] = useState([])





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
            console.log('get dta')
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
            <PageLayout>
                <div className="sb"></div>
                <ContentLayout>
                    <motion.div {...contentEnterAnimProps} className="HomePage__in">
                        <div className="HomePage__item">
                            <HomeBalance/>
                        </div>
                        <div className="HomePage__item">
                            <HomeBuy/>
                        </div>
                        <div className="HomePage__item">
                            <HomeDl/>
                        </div>
                        <div className="HomePage__item">
                            <HomeCon/>
                        </div>
                        <div className="HomePage__item">
                            <HomeUl list={UnlocskList} openAllUnlock={openAllUnlock}/>
                        </div>
                        <div className="HomePage__item">
                            <HomeSale/>
                        </div>
                        <div className="HomePage__item">
                            <HomeNot/>
                        </div>
                    </motion.div>
                </ContentLayout>
                
            </PageLayout>
        </div>
    )
}

export default HomePage;