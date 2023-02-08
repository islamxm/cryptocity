import PageLayout from "../../components/PageLayout/PageLayout";
import ContentLayout from "../../components/ContentLayout/ContentLayout";
import './WalletPage.scss';
import {motion} from 'framer-motion';
import contentEnterAnimProps from '../../ex/contentEnterAnimProps';
import WalletTable from "./components/WalletTable/WalletTable";
import orderedElemAnim from "../../ex/orderedElemAnim";

const WalletPage = () => {
    return (
        <div className="WalletPage page">
            <PageLayout>
                <div className="sb"></div>
                <ContentLayout>
                    <motion.div {...orderedElemAnim?.container} className={"WalletPage__in"}>
                        <motion.div {...orderedElemAnim?.item} className="WalletPage__head">26 Сентября 2022</motion.div>
                        <motion.div {...orderedElemAnim?.item} className="WalletPage__item">
                            <WalletTable/>
                        </motion.div>
                        
                    </motion.div>
                </ContentLayout>
            </PageLayout>
        </div>
    )
}

export default WalletPage;