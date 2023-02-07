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


const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


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
                    <motion.ul
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="HomePage__in">
                        <motion.li variants={item} className="HomePage__item">
                            <HomeBalance/>
                        </motion.li>
                        <motion.li variants={item} className="HomePage__item">
                            <HomeBuy/>
                        </motion.li>
                        <motion.li variants={item} className="HomePage__item">
                            <HomeDl/>
                        </motion.li>
                        <motion.li variants={item} className="HomePage__item">
                            <HomeCon/>
                        </motion.li>
                        <motion.li variants={item} className="HomePage__item">
                            <HomeUl list={UnlocskList} openAllUnlock={openAllUnlock}/>
                        </motion.li>
                        <motion.li variants={item} className="HomePage__item">
                            <HomeSale/>
                        </motion.li>
                        {/* <div className="HomePage__item">
                            <HomeNot/>
                        </div> */}
                    </motion.ul>
                </ContentLayout>
                
            </PageLayout>
        </div>
    )
}

export default HomePage;