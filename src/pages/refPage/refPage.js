import PageLayout from "../../components/PageLayout/PageLayout";
import ContentLayout from "../../components/ContentLayout/ContentLayout";
import './refPage.scss';
import {motion} from 'framer-motion';
import contentEnterAnimProps from '../../ex/contentEnterAnimProps';
import RefMain from "./components/RefMain/RefMain";
import RefVals from "./components/RefVals/RefVals";
import RefTable from "./components/RefTable/RefTable";
import orderedElemAnim from "../../ex/orderedElemAnim";
import { useSelector } from "react-redux";
import apiService from "../../service/apiService";
import { useEffect, useState } from "react";


const service = new apiService();


const RefPage = () => {
    const {token} = useSelector(state => state);
    const [list, setList] = useState([])
    const [mainInfo, setMainInfo] = useState(null);
    const [collectLoad, setCollectLoad] = useState(false)

    const getReferals = () => {
        if(token) {
            service.getReferals(token).then(res => {
                const r = Object.entries(res?.ReferralsList).map(item => {
                    return {
                        ID: item[0],
                        ...item[1]
                    }
                });
                setList(r);
                setMainInfo(res?.MainInfo)
            })
        }
    }

    const collectRef = () => {
        setCollectLoad(true)
        service.collectRef(token).then(res => {
            console.log(res)
        }).finally(_ => {
            getReferals()
            setCollectLoad(false)
            
        })
    }

    useEffect(() => {
        getReferals();
    }, [token])


    return (
        <div className="page RefPage">
            <PageLayout>
                <div className="sb"></div>
                <ContentLayout>
                        <motion.div {...orderedElemAnim?.container} className={"RefPage__in"}>
                            <div className="RefPage__head">
                                <motion.div {...orderedElemAnim?.item} className="RefPage__head_title">
                                    Данные для рефералки
                                </motion.div>
                                <motion.div {...orderedElemAnim?.item} className="RefPage__head_subtitle">
                                    Приглашая друзей в игру, Вы получаете награду с каждого заработанного MPI в игре, а также различные выплаты за определенные достижения в игре!
                                </motion.div>
                            </div>
                            <div className="RefPage__body">
                                <motion.div {...orderedElemAnim?.item} className="RefPage__body_item">
                                    <RefMain 
                                        data={mainInfo}
                                        load={collectLoad}
                                        collect={collectRef}/>
                                </motion.div>
                                {/* <div className="RefPage__body_item">
                                    <RefVals/>
                                </div> */}
                                <motion.div {...orderedElemAnim?.item} className="RefPage__body_item">
                                    <RefTable
                                        list={list}
                                        />
                                </motion.div>
                            </div>
                        </motion.div>
                    </ContentLayout>
            </PageLayout>
        </div>
    )
}

export default RefPage;