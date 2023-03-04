import PageLayout from "../../components/PageLayout/PageLayout";
import ContentLayout from "../../components/ContentLayout/ContentLayout";
import './WalletPage.scss';
import {motion} from 'framer-motion';
import contentEnterAnimProps from '../../ex/contentEnterAnimProps';
import WalletTable from "./components/WalletTable/WalletTable";
import orderedElemAnim from "../../ex/orderedElemAnim";
import { useSelector } from "react-redux";
import apiService from "../../service/apiService";
import { useEffect, useState } from "react";


const service = new apiService()

const WalletPage = () => {
    const {token} = useSelector(s => s);
    const [list, setList] = useState([])

    useEffect(() => {
        if(token) {
            service.getWalletTransactions(token).then(res => {
                setList(res?.Transactions)
            })
        }
    }, [token])

    return (
        <div className="WalletPage page">
            <PageLayout>
                <div className="sb"></div>
                <ContentLayout>
                    <motion.div {...orderedElemAnim?.container} className={"WalletPage__in"}>
                        <motion.div {...orderedElemAnim?.item} className="WalletPage__head">26 Сентября 2022</motion.div>
                        <motion.div {...orderedElemAnim?.item} className="WalletPage__item">
                            <WalletTable
                                list={list}
                                />
                        </motion.div>
                        
                    </motion.div>
                </ContentLayout>
            </PageLayout>
        </div>
    )
}

export default WalletPage;